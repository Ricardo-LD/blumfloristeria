/*
  # blum Floristería Database Schema

  ## Overview
  Creates the complete database structure for blum floristería e-commerce landing page.

  ## New Tables
  
  ### `products`
  - `id` (uuid, primary key) - Unique product identifier
  - `name` (text) - Product name (e.g., "Ramo Clásico")
  - `description` (text) - Product description
  - `price` (numeric) - Price in CRC
  - `image_url` (text) - Product image URL
  - `category` (text) - Category (ramo, planta, ocasión)
  - `is_featured` (boolean) - Show in homepage catalog
  - `display_order` (integer) - Sort order
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  
  ### `promotions`
  - `id` (uuid, primary key) - Unique promotion identifier
  - `code` (text, unique) - Coupon code (e.g., "BLUM10")
  - `discount_type` (text) - "percentage" or "fixed"
  - `discount_value` (numeric) - Discount amount
  - `valid_from` (timestamptz) - Start date
  - `valid_until` (timestamptz) - End date
  - `is_active` (boolean) - Active status
  - `min_purchase` (numeric) - Minimum purchase amount (optional)
  - `created_at` (timestamptz) - Creation timestamp
  
  ### `testimonials`
  - `id` (uuid, primary key) - Unique testimonial identifier
  - `customer_name` (text) - Customer name
  - `customer_photo` (text) - Customer photo URL
  - `rating` (integer) - Star rating (1-5)
  - `comment` (text) - Testimonial text
  - `date` (date) - Review date
  - `is_featured` (boolean) - Show on homepage
  - `display_order` (integer) - Sort order
  - `created_at` (timestamptz) - Creation timestamp
  
  ### `delivery_zones`
  - `id` (uuid, primary key) - Unique zone identifier
  - `name` (text) - Zone name (e.g., "San Pablo")
  - `delivery_fee` (numeric) - Delivery cost in CRC
  - `estimated_time` (text) - ETA description
  - `is_active` (boolean) - Active status
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access for active content
  - No public write access (admin only via service role)

  ## Notes
  - All prices in CRC (Costa Rican Colones)
  - Images stored externally (Supabase Storage or CDN)
  - Timestamps in UTC (America/Costa_Rica offset handled client-side)
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text DEFAULT '',
  price numeric(10, 2) NOT NULL CHECK (price >= 0),
  image_url text NOT NULL,
  category text NOT NULL DEFAULT 'ramo',
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create promotions table
CREATE TABLE IF NOT EXISTS promotions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  discount_type text NOT NULL CHECK (discount_type IN ('percentage', 'fixed')),
  discount_value numeric(10, 2) NOT NULL CHECK (discount_value > 0),
  valid_from timestamptz DEFAULT now(),
  valid_until timestamptz NOT NULL,
  is_active boolean DEFAULT true,
  min_purchase numeric(10, 2) DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_photo text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  date date DEFAULT CURRENT_DATE,
  is_featured boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create delivery zones table
CREATE TABLE IF NOT EXISTS delivery_zones (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  delivery_fee numeric(10, 2) NOT NULL CHECK (delivery_fee >= 0),
  estimated_time text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE promotions ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE delivery_zones ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Public read access for active/featured content

-- Products: Public can read featured products
CREATE POLICY "Anyone can view featured products"
  ON products FOR SELECT
  TO anon
  USING (is_featured = true);

-- Promotions: Public can read active promotions
CREATE POLICY "Anyone can view active promotions"
  ON promotions FOR SELECT
  TO anon
  USING (is_active = true AND valid_until > now());

-- Testimonials: Public can read featured testimonials
CREATE POLICY "Anyone can view featured testimonials"
  ON testimonials FOR SELECT
  TO anon
  USING (is_featured = true);

-- Delivery zones: Public can read active zones
CREATE POLICY "Anyone can view active delivery zones"
  ON delivery_zones FOR SELECT
  TO anon
  USING (is_active = true);

-- Insert sample products
INSERT INTO products (name, description, price, image_url, category, is_featured, display_order) VALUES
  ('Ramo Clásico', 'Elegancia atemporal con rosas y follaje fresco', 18000, 'https://images.pexels.com/photos/1070862/pexels-photo-1070862.jpeg?auto=compress&cs=tinysrgb&w=800', 'ramo', true, 1),
  ('Romántico', 'Rosas rojas y blancas que expresan amor eterno', 25000, 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800', 'ramo', true, 2),
  ('Cumpleaños', 'Colores vibrantes para celebrar momentos especiales', 20000, 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800', 'ocasión', true, 3),
  ('Condolencias', 'Arreglo sereno en tonos blancos y pasteles', 22000, 'https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg?auto=compress&cs=tinysrgb&w=800', 'ocasión', true, 4),
  ('Plantas', 'Suculentas y plantas decorativas para el hogar', 12000, 'https://images.pexels.com/photos/6208087/pexels-photo-6208087.jpeg?auto=compress&cs=tinysrgb&w=800', 'planta', true, 5),
  ('Arma tu Ramo', 'Personaliza tu arreglo con nuestras flores frescas', 15000, 'https://images.pexels.com/photos/1458909/pexels-photo-1458909.jpeg?auto=compress&cs=tinysrgb&w=800', 'personalizado', true, 6);

-- Insert sample promotions
INSERT INTO promotions (code, discount_type, discount_value, valid_from, valid_until, is_active, min_purchase) VALUES
  ('BLUM10', 'percentage', 10, now(), now() + interval '90 days', true, 15000),
  ('AMOR15', 'percentage', 15, now(), now() + interval '60 days', true, 20000);

-- Insert sample testimonials
INSERT INTO testimonials (customer_name, customer_photo, rating, comment, date, is_featured, display_order) VALUES
  ('María González', 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', 5, 'Flores hermosas y frescas. La entrega fue puntual y el servicio excelente. Totalmente recomendado.', CURRENT_DATE - 5, true, 1),
  ('Carlos Rodríguez', 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', 5, 'Pedí un ramo para mi esposa y quedó encantada. La atención por WhatsApp es muy buena.', CURRENT_DATE - 12, true, 2),
  ('Ana Jiménez', 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', 5, 'Me salvaron con una entrega el mismo día. Las flores duraron más de una semana, súper frescas.', CURRENT_DATE - 8, true, 3),
  ('Roberto Vargas', 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', 5, 'Excelente calidad y diseño. Siempre compro aquí para ocasiones especiales.', CURRENT_DATE - 20, true, 4),
  ('Laura Mora', 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', 5, 'La mejor floristería en Heredia. Precios justos y flores hermosas. ¡100% recomendado!', CURRENT_DATE - 3, true, 5);

-- Insert delivery zones
INSERT INTO delivery_zones (name, delivery_fee, estimated_time, is_active) VALUES
  ('San Pablo', 2000, '1-2 horas', true),
  ('Heredia Centro', 2500, '1-3 horas', true),
  ('Barva', 3000, '2-3 horas', true),
  ('Santo Domingo', 3500, '2-4 horas', true),
  ('San José Centro', 4000, '3-5 horas', true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured, display_order);
CREATE INDEX IF NOT EXISTS idx_promotions_active ON promotions(is_active, valid_until);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(is_featured, display_order);
CREATE INDEX IF NOT EXISTS idx_delivery_zones_active ON delivery_zones(is_active);
