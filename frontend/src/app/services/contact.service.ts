import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/models';
import { API_BASE_URL } from './api-config';

// Handles all HTTP communication with the /contacts backend endpoints.
@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly baseUrl = `${API_BASE_URL}/contacts`;

  constructor(private http: HttpClient) {}

  getAll(query?: string): Observable<Contact[]> {
    const url = query ? `${this.baseUrl}?q=${encodeURIComponent(query)}` : this.baseUrl;
    return this.http.get<Contact[]>(url);
  }

  getById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.baseUrl}/${id}`);
  }

  create(contact: { name: string; phone: string }): Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl, contact);
  }

  update(id: number, contact: { name: string; phone: string }): Observable<Contact> {
    return this.http.put<Contact>(`${this.baseUrl}/${id}`, contact);
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/${id}`);
  }
}
