-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  image TEXT,
  category TEXT NOT NULL,
  type TEXT[] DEFAULT '{}',
  price TEXT,
  specs JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create product_variants table for bey array
CREATE TABLE IF NOT EXISTS product_variants (
  id TEXT PRIMARY KEY,
  product_id TEXT REFERENCES products(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_type ON products USING GIN(type);
CREATE INDEX IF NOT EXISTS idx_products_specs ON products USING GIN(specs);
CREATE INDEX IF NOT EXISTS idx_product_variants_product_id ON product_variants(product_id);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_variants ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on products" ON products FOR SELECT USING (true);
CREATE POLICY "Allow authenticated insert on products" ON products FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated update on products" ON products FOR UPDATE USING (true);
CREATE POLICY "Allow authenticated delete on products" ON products FOR DELETE USING (true);

-- Create policies for product_variants
CREATE POLICY "Allow public read access on product_variants" ON product_variants FOR SELECT USING (true);
CREATE POLICY "Allow authenticated insert on product_variants" ON product_variants FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated update on product_variants" ON product_variants FOR UPDATE USING (true);
CREATE POLICY "Allow authenticated delete on product_variants" ON product_variants FOR DELETE USING (true);

-- Admin table for admin login
CREATE TABLE IF NOT EXISTS admin_users (
  id TEXT PRIMARY KEY,
  password TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE POLICY "Allow public read admin user" ON admin_users FOR SELECT USING (true);

INSERT INTO admin_users (id, password) VALUES ('admin', 'Sol@r2468') ON CONFLICT (id) DO NOTHING;

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();