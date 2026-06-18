import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact, SplitMethod, BillParticipant } from '../../models/models';
import { ContactService } from '../../services/contact.service';
import { BillService } from '../../services/bill.service';
import { ToastService } from '../../services/toast.service';

// Local row shape used while editing shares/percentage participants in the UI.
interface ParticipantRow {
  tempId: number;
  name: string;
  value: number | null;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // ----- Core bill state -----
  billAmount: number | null = null;
  splitMethod: SplitMethod = 'contacts';
  isSaving = false;

  // ----- Contacts split state -----
  allContacts: Contact[] = [];
  selectedContactIds: Set<number> = new Set();
  showAddFriendsPanel = false;
  contactSearchTerm = '';
  newContactName = '';
  newContactPhone = '';
  isAddingContact = false;
  isLoadingContacts = false;

  // ----- Shares / Percentage split state -----
  private rowIdCounter = 0;
  participantRows: ParticipantRow[] = [];

  showParticipantContactsPanel = false;
  participantSearchTerm = '';
  selectedParticipantContactIds: Set<number> = new Set();

  // ----- Validation popup (modal) state -----
  showValidationModal = false;
  validationModalMessage = '';

  constructor(
    private contactService: ContactService,
    private billService: BillService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  // ============================================================
  // Split method switching
  // ============================================================
  setSplitMethod(method: SplitMethod): void {
    if (method === this.splitMethod) { return; }
    this.splitMethod = method;

    // Shares and Percentage share the same underlying participantRows array,
    // but each method should start from a clean slate when selected — names
    // or values entered under one method must never carry over to the other.
    this.participantRows = [];
    this.selectedParticipantContactIds = new Set();
    this.showParticipantContactsPanel = false;
    this.participantSearchTerm = '';
  }

  // ============================================================
  // CONTACTS SPLIT
  // ============================================================
  loadContacts(): void {
    this.isLoadingContacts = true;
    this.contactService.getAll().subscribe({
      next: (contacts) => {
        this.allContacts = contacts;
        this.isLoadingContacts = false;
      },
      error: () => {
        this.isLoadingContacts = false;
        this.toast.error('Could not load contacts. Is the backend running?');
      }
    });
  }

  get filteredContacts(): Contact[] {
    const term = this.contactSearchTerm.trim().toLowerCase();
    if (!term) { return this.allContacts; }
    return this.allContacts.filter(
      c => c.name.toLowerCase().includes(term) || c.phone.includes(term)
    );
  }

  toggleAddFriendsPanel(): void {
    this.showAddFriendsPanel = !this.showAddFriendsPanel;
  }

  isContactSelected(id: number): boolean {
    return this.selectedContactIds.has(id);
  }

  toggleContactSelection(id: number): void {
    const current = new Set(this.selectedContactIds);
    if (current.has(id)) {
      current.delete(id);
    } else {
      current.add(id);
    }
    this.selectedContactIds = current;
  }

  removeSelectedContact(id: number): void {
    this.toggleContactSelection(id);
  }
  toggleParticipantContactsPanel(): void {
  this.showParticipantContactsPanel =
    !this.showParticipantContactsPanel;
}

get filteredParticipantContacts(): Contact[] {
  const term = this.participantSearchTerm.trim().toLowerCase();

  if (!term) {
    return this.allContacts;
  }

  return this.allContacts.filter(
    c =>
      c.name.toLowerCase().includes(term) ||
      c.phone.includes(term)
  );
}

isParticipantSelected(id: number): boolean {
  return this.selectedParticipantContactIds.has(id);
}

toggleParticipantSelection(contact: Contact): void {

  const current = new Set(this.selectedParticipantContactIds);

  if (current.has(contact.id)) {

    current.delete(contact.id);

    this.participantRows =
      this.participantRows.filter(
        row => row.name !== contact.name
      );

  } else {

    current.add(contact.id);

    const alreadyExists =
      this.participantRows.some(
        row => row.name === contact.name
      );

    if (!alreadyExists) {
      this.participantRows = [
        ...this.participantRows,
        {
          tempId: this.rowIdCounter++,
          name: contact.name,
          value: null
        }
      ];
    }
  }

  this.selectedParticipantContactIds = current;
}
  get selectedContacts(): Contact[] {
    return this.allContacts.filter(c => this.selectedContactIds.has(c.id));
  }

  createNewContact(): void {
    const name = this.newContactName.trim();
    const phone = this.newContactPhone.trim();

    if (!name) {
      this.toast.error('Contact name is required');
      return;
    }
    if (!phone) {
      this.toast.error('Phone number is required');
      return;
    }

    this.isAddingContact = true;
    this.contactService.create({ name, phone }).subscribe({
      next: (contact) => {
        this.isAddingContact = false;
        this.allContacts = [contact, ...this.allContacts];
        this.toggleContactSelection(contact.id);

if (
  this.splitMethod === 'shares' ||
  this.splitMethod === 'percentage'
) {

  this.selectedParticipantContactIds.add(contact.id);

  this.participantRows = [
    ...this.participantRows,
    {
      tempId: this.rowIdCounter++,
      name: contact.name,
      value: null
    }
  ];
}
        this.newContactName = '';
        this.newContactPhone = '';
        this.toast.success(`${contact.name} added to contacts`);
      },
      error: (err: any) => {
        this.isAddingContact = false;
        this.toast.error(err?.error?.error || 'Failed to create contact');
      }
    });
  }

  get contactsSplitAmount(): number {
    const count = this.selectedContacts.length;
    if (!this.billAmount || count === 0) { return 0; }
    return Math.round((this.billAmount / count) * 100) / 100;
  }

  // ============================================================
  // SHARES / PERCENTAGE SPLIT
  // ============================================================
  addParticipantRow(): void {
    this.participantRows = [
      ...this.participantRows,
      { tempId: this.rowIdCounter++, name: '', value: null }
    ];
  }

  removeParticipantRow(tempId: number): void {
    this.participantRows = this.participantRows.filter(r => r.tempId !== tempId);
  }

  // Used by *ngFor's trackBy so Angular matches each row to its existing
  // DOM node (and input element) by tempId, instead of destroying and
  // recreating every row's inputs whenever the rows array changes. Without
  // this, every keystroke in a Name/Shares/Percentage field would rebuild
  // all the input elements and kick focus out of the one being typed in.
  trackByTempId(_index: number, row: ParticipantRow): number {
    return row.tempId;
  }

  updateRowName(tempId: number, name: string): void {
    const row = this.participantRows.find(r => r.tempId === tempId);
    if (row) {
      row.name = name;
    }
  }

  updateRowValue(tempId: number, value: string): void {
    const num = value === '' ? null : Number(value);
    const row = this.participantRows.find(r => r.tempId === tempId);
    if (row) {
      row.value = num;
    }
  }

  // True when this row's Shares value has been entered but is negative.
  // Used to show "Please enter a valid share." beneath the offending row.
  isShareInvalid(row: ParticipantRow): boolean {
    return this.splitMethod === 'shares' && row.value !== null && row.value < 0;
  }

  get totalShares(): number {
    return this.participantRows.reduce((sum, r) => sum + (r.value || 0), 0);
  }

  get totalPercentage(): number {
    return this.participantRows.reduce((sum, r) => sum + (r.value || 0), 0);
  }

  get percentageRemaining(): number {
    return Math.round((100 - this.totalPercentage) * 100) / 100;
  }

  amountForRow(row: ParticipantRow): number {
    if (!this.billAmount || !row.value) { return 0; }
    if (this.splitMethod === 'shares') {
      if (this.totalShares <= 0) { return 0; }
      return Math.round((row.value / this.totalShares) * this.billAmount * 100) / 100;
    }
    if (this.splitMethod === 'percentage') {
      return Math.round((row.value / 100) * this.billAmount * 100) / 100;
    }
    return 0;
  }

  // ============================================================
  // VALIDATION
  // ============================================================
  get validationError(): string | null {
    if (!this.billAmount || this.billAmount <= 0) {
      return 'Enter a bill amount greater than zero';
    }
    if (this.splitMethod === 'contacts') {
      if (this.selectedContacts.length === 0) {
        return 'Select at least one contact to split with';
      }
    }
    if (this.splitMethod === 'shares') {
      const rows = this.participantRows;
      if (rows.length === 0) { return 'Add at least one participant'; }
      for (const r of rows) {
        if (!r.name.trim()) { return 'Every participant needs a name'; }
        if (r.value === null) { return 'Please enter a valid share.'; }
        if (r.value < 0) { return 'Please enter a valid share.'; }
      }
      if (this.totalShares <= 0) { return 'Please enter a valid share.'; }
    }
    if (this.splitMethod === 'percentage') {
      const rows = this.participantRows;
      if (rows.length === 0) { return 'Add at least one participant'; }
      for (const r of rows) {
        if (!r.name.trim()) { return 'Every participant needs a name'; }
        if (r.value === null || r.value < 0) { return 'Percentage cannot be negative'; }
      }
      if (this.isPercentageMismatch) {
        return 'Total percentage must equal 100%.';
      }
    }
    return null;
  }

  // True once every row has a name and a non-negative percentage, but the
  // rows don't add up to exactly 100%. Used to trigger the popup validation
  // message specifically for the "total must equal 100%" rule.
  get isPercentageMismatch(): boolean {
    if (this.splitMethod !== 'percentage') { return false; }
    const rows = this.participantRows;
    if (rows.length === 0) { return false; }
    for (const r of rows) {
      if (!r.name.trim() || r.value === null || r.value < 0) { return false; }
    }
    return Math.abs(this.totalPercentage - 100) > 0.01;
  }

  // ============================================================
  // SAVE
  // ============================================================
  saveBill(): void {
    if (this.isPercentageMismatch) {
      this.validationModalMessage =
        `Total percentage must equal 100%. It is currently ${this.totalPercentage.toFixed(2)}%. ` +
        `Please adjust the percentages so they add up to exactly 100% before saving.`;
      this.showValidationModal = true;
      return;
    }

    const error = this.validationError;
    if (error) {
      this.toast.error(error);
      return;
    }

    let participants: BillParticipant[] = [];

    if (this.splitMethod === 'contacts') {
      participants = this.selectedContacts.map(c => ({
        participant_name: c.name,
        phone: c.phone
      }));
    } else if (this.splitMethod === 'shares') {
      participants = this.participantRows.map(r => ({
        participant_name: r.name.trim(),
        shares: r.value!
      }));
    } else {
      participants = this.participantRows.map(r => ({
        participant_name: r.name.trim(),
        percentage: r.value!
      }));
    }

    this.isSaving = true;
    this.billService.create({
      bill_amount: this.billAmount!,
      split_method: this.splitMethod,
      participants
    }).subscribe({
      next: (bill) => {
        this.isSaving = false;
        this.toast.success('Bill saved successfully');
        this.router.navigate(['/history', bill.id]);
      },
      error: (err: any) => {
        this.isSaving = false;
        this.toast.error(err?.error?.error || 'Failed to save bill');
      }
    });
  }

  closeValidationModal(): void {
    this.showValidationModal = false;
  }

  resetForm(): void {
    this.billAmount = null;
    this.selectedContactIds = new Set();
    this.participantRows = [];
    this.selectedParticipantContactIds = new Set();
    this.showValidationModal = false;
  }
}