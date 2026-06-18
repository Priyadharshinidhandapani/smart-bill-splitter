import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

// Lightweight global toast service used to surface success and error
// notifications throughout the application without prop drilling.
@Injectable({ providedIn: 'root' })
export class ToastService {
  private nextId = 0;
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  readonly toasts$ = this.toastsSubject.asObservable();

  get toasts(): Toast[] {
    return this.toastsSubject.getValue();
  }

  success(message: string): void {
    this.show(message, 'success');
  }

  error(message: string): void {
    this.show(message, 'error');
  }

  dismiss(id: number): void {
    const updated = this.toastsSubject.getValue().filter(t => t.id !== id);
    this.toastsSubject.next(updated);
  }

  private show(message: string, type: 'success' | 'error'): void {
    const id = this.nextId++;
    const current = this.toastsSubject.getValue();
    this.toastsSubject.next([...current, { id, message, type }]);
    setTimeout(() => this.dismiss(id), 4000);
  }
}
