import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

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
