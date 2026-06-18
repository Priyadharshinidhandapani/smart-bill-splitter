import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/models';
import { ContactService } from '../../services/contact.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-contact-management',
  templateUrl: './contact-management.component.html',
  styleUrls: ['./contact-management.component.css']
})
export class ContactManagementComponent implements OnInit {
  contacts: Contact[] = [];
  isLoading = false;
  searchTerm = '';

  showForm = false;
  editingId: number | null = null;
  formName = '';
  formPhone = '';
  isSaving = false;

  // Field-level validation error messages shown beneath the Name and
  // Phone Number inputs. Null means that field currently has no error.
  nameError: string | null = null;
  phoneError: string | null = null;

  confirmDeleteId: number | null = null;

  constructor(private contactService: ContactService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.isLoading = true;
    this.contactService.getAll(this.searchTerm || undefined).subscribe({
      next: (contacts) => {
        this.contacts = contacts;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Could not load contacts. Is the backend running?');
      }
    });
  }

  onSearchChange(): void {
    this.loadContacts();
  }

  openAddForm(): void {
    this.editingId = null;
    this.formName = '';
    this.formPhone = '';
    this.clearFieldErrors();
    this.showForm = true;
  }

  openEditForm(contact: Contact): void {
    this.editingId = contact.id;
    this.formName = contact.name;
    this.formPhone = contact.phone;
    this.clearFieldErrors();
    this.showForm = true;
  }

  cancelForm(): void {
    this.showForm = false;
    this.editingId = null;
    this.clearFieldErrors();
  }

  private clearFieldErrors(): void {
    this.nameError = null;
    this.phoneError = null;
  }

  onNameInput(): void {
    if (this.nameError) {
      this.nameError = null;
    }
  }

  onPhoneInput(): void {
    if (this.phoneError) {
      this.phoneError = null;
    }
  }

  submitForm(): void {
    const name = this.formName.trim();
    const phone = this.formPhone.trim();

    this.clearFieldErrors();

    const isNameEmpty = !name;
    const isPhoneEmpty = !phone;

    // Rule 4: both fields empty -> single combined message on both fields.
    if (isNameEmpty && isPhoneEmpty) {
      this.nameError = 'Please enter a valid full name and phone number.';
      this.phoneError = 'Please enter a valid full name and phone number.';
      return;
    }

    // Rule 1: full name missing.
    if (isNameEmpty) {
      this.nameError = 'Please enter the full name.';
    }

    // Rule 2 & 3: phone missing, or not exactly 10 digits.
    if (isPhoneEmpty) {
      this.phoneError = 'Please enter the phone number.';
    } else if (!/^\d{10}$/.test(phone)) {
      this.phoneError = 'Please enter a valid phone number.';
    }

    // Stop here if any validation error was set above (Rule 5: only
    // proceed to create/update the contact once all checks pass).
    if (this.nameError || this.phoneError) {
      return;
    }

    this.isSaving = true;

    if (this.editingId) {
      this.contactService.update(this.editingId, { name, phone }).subscribe({
        next: (updated) => {
          this.isSaving = false;
          this.contacts = this.contacts.map(c => c.id === this.editingId ? updated : c);
          this.showForm = false;
          this.toast.success('Contact updated');
        },
        error: (err: any) => {
          this.isSaving = false;
          this.toast.error(err?.error?.error || 'Failed to update contact');
        }
      });
    } else {
      this.contactService.create({ name, phone }).subscribe({
        next: (created) => {
          this.isSaving = false;
          this.contacts = [created, ...this.contacts];
          this.showForm = false;
          this.toast.success('Contact added');
        },
        error: (err: any) => {
          this.isSaving = false;
          this.toast.error(err?.error?.error || 'Failed to create contact');
        }
      });
    }
  }

  requestDelete(id: number): void {
    this.confirmDeleteId = id;
  }

  cancelDelete(): void {
    this.confirmDeleteId = null;
  }

  confirmDelete(id: number): void {
    this.contactService.delete(id).subscribe({
      next: () => {
        this.contacts = this.contacts.filter(c => c.id !== id);
        this.confirmDeleteId = null;
        this.toast.success('Contact deleted');
      },
      error: () => {
        this.toast.error('Failed to delete contact');
      }
    });
  }

  formatDate(dateStr: string): string {
    const d = new Date(dateStr.replace(' ', 'T') + 'Z');
    if (isNaN(d.getTime())) { return dateStr; }
    return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
  }
}