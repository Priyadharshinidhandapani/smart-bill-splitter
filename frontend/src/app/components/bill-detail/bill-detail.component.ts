import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from '../../models/models';
import { BillService } from '../../services/bill.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {
  bill: Bill | null = null;
  isLoading = true;
  notFound = false;
  showConfirmDelete = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private billService: BillService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.notFound = true;
      this.isLoading = false;
      return;
    }
    this.billService.getById(id).subscribe({
      next: (bill) => {
        this.bill = bill;
        this.isLoading = false;
      },
      error: () => {
        this.notFound = true;
        this.isLoading = false;
      }
    });
  }

  deleteBill(): void {
    if (!this.bill) { return; }
    this.billService.delete(this.bill.id).subscribe({
      next: () => {
        this.toast.success('Bill deleted');
        this.router.navigate(['/history']);
      },
      error: () => {
        this.toast.error('Failed to delete bill');
      }
    });
  }

  formatDate(dateStr: string): string {
    const d = new Date(dateStr.replace(' ', 'T') + 'Z');
    if (isNaN(d.getTime())) { return dateStr; }
    return d.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
