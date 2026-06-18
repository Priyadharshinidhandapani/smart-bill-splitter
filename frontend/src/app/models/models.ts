// Shared data models used across the application

export interface Contact {
  id: number;
  name: string;
  phone: string;
  created_at: string;
}

export type SplitMethod = 'contacts' | 'shares' | 'percentage';

export interface BillParticipant {
  id?: number;
  bill_id?: number;
  participant_name: string;
  phone?: string | null;
  shares?: number | null;
  percentage?: number | null;
  amount?: number;
}

export interface Bill {
  id: number;
  bill_amount: number;
  split_method: SplitMethod;
  created_at: string;
  participants: BillParticipant[];
}

export interface CreateBillPayload {
  bill_amount: number;
  split_method: SplitMethod;
  participants: BillParticipant[];
}

export interface ApiError {
  error: string;
  details?: string;
}
