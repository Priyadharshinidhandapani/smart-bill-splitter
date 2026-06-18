import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill, CreateBillPayload } from '../models/models';
import { API_BASE_URL } from './api-config';

// Handles all HTTP communication with the /bills backend endpoints.
@Injectable({ providedIn: 'root' })
export class BillService {
  private readonly baseUrl = `${API_BASE_URL}/bills`;

  constructor(private http: HttpClient) {}

  getAll(query?: string, sort: 'asc' | 'desc' = 'desc'): Observable<Bill[]> {
    const params = new URLSearchParams();
    if (query) { params.set('q', query); }
    params.set('sort', sort);
    return this.http.get<Bill[]>(`${this.baseUrl}?${params.toString()}`);
  }

  getById(id: number): Observable<Bill> {
    return this.http.get<Bill>(`${this.baseUrl}/${id}`);
  }

  create(payload: CreateBillPayload): Observable<Bill> {
    return this.http.post<Bill>(this.baseUrl, payload);
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/${id}`);
  }
}
