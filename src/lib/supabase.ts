import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://tzpuodywhsxabazrfuqi.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6cHVvZHl3aHN4YWJhenJmdXFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5NDEzNTAsImV4cCI6MjA3NzUxNzM1MH0.c9ZjWoJZ5L-aUV9Q_SjpSmZdsK1iTuVpaxGX_R27pSs";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  is_featured: boolean;
  display_order: number;
}

export interface Promotion {
  id: string;
  code: string;
  discount_type: 'percentage' | 'fixed';
  discount_value: number;
  valid_from: string;
  valid_until: string;
  is_active: boolean;
  min_purchase: number;
}

export interface Testimonial {
  id: string;
  customer_name: string;
  customer_photo: string;
  rating: number;
  comment: string;
  date: string;
  is_featured: boolean;
  display_order: number;
}

export interface DeliveryZone {
  id: string;
  name: string;
  delivery_fee: number;
  estimated_time: string;
  is_active: boolean;
}
