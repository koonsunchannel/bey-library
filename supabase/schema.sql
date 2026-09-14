-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  image TEXT,
  category TEXT NOT NULL,
  type TEXT[] DEFAULT '{}',
  price TEXT,
  specs JSONB DEFAULT '{}',
  random_variants JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE products ADD COLUMN IF NOT EXISTS random_variants JSONB DEFAULT '[]';

-- Blade V2 metadata is stored in the existing specs JSONB column.
UPDATE products
SET specs = COALESCE(specs, '{}'::jsonb) || '{"V2": false}'::jsonb
WHERE category = 'blade'
  AND NOT (COALESCE(specs, '{}'::jsonb) ? 'V2');

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

-- Seed the Credits page into the database so it can be managed like other categories.
INSERT INTO products (id, name, image, category, type, price, specs)
VALUES (
  'CD001',
  'Credits? Why you want to know that???',
  'https://i.ibb.co/0pcrGh1N/Credit.webp',
  'credits',
  ARRAY['credits'],
  'This website don''t want anything from you.',
  '{
    "Creator Name": "Why you want to know that?",
    "Donation": "Go to Philanthropy funds.",
    "Ownership": "I''m not Takara Tomy. Beyblade is not my product, This web for community free use.",
    "Objective": "To make it easier for the community to find Beyblade X parts data, Not find me.",
    "Special Thanks": "Thanks to Takara Tomy for making Beyblade."
  }'::jsonb
)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  image = EXCLUDED.image,
  category = EXCLUDED.category,
  type = EXCLUDED.type,
  price = EXCLUDED.price,
  specs = EXCLUDED.specs;

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