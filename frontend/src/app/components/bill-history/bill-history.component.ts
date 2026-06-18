import { Component, OnInit } from '@angular/core';
import { Bill } from '../../models/models';
import { BillService } from '../../services/bill.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-bill-history',
  templateUrl: './bill-history.component.html',
  styleUrls: ['./bill-history.component.css']
})
export class BillHistoryComponent implements OnInit {
  bills: Bill[] = [];
  isLoading = false;
  searchTerm = '';
  sortOrder: 'asc' | 'desc' = 'desc';
  confirmDeleteId: number | null = null;

  constructor(private billService: BillService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadBills();
  }

  loadBills(): void {
    this.isLoading = true;
    this.billService.getAll(this.searchTerm || undefined, this.sortOrder).subscribe({
      next: (bills) => {
        this.bills = bills;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.toast.error('Could not load bill history. Is the backend running?');
      }
    });
  }

  onSearchChange(): void {
    this.loadBills();
  }

  toggleSort(): void {
    this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
    this.loadBills();
  }

  requestDelete(id: number): void {
    this.confirmDeleteId = id;
  }

  cancelDelete(): void {
    this.confirmDeleteId = null;
  }

  confirmDelete(id: number): void {
    this.billService.delete(id).subscribe({
      next: () => {
        this.bills = this.bills.filter(b => b.id !== id);
        this.confirmDeleteId = null;
        this.toast.success('Bill deleted');
      },
      error: () => {
        this.toast.error('Failed to delete bill');
      }
    });
  }

  participantNames(bill: Bill): string {
    return bill.participants.map(p => p.participant_name).join(', ');
  }

  formatDate(dateStr: string): string {
    const d = new Date(dateStr.replace(' ', 'T') + 'Z');
    if (isNaN(d.getTime())) { return dateStr; }
    return d.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
