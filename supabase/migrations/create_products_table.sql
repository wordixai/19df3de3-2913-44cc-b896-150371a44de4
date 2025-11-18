/*
  # Create products table

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text, product name)
      - `tagline` (text, product tagline)
      - `description` (text, product description)
      - `category` (text, product category)
      - `price` (numeric, product price)
      - `image_url` (text, product image)
      - `features` (jsonb, array of features)
      - `stats` (jsonb, product statistics)
      - `is_active` (boolean, product status)
      - `sort_order` (integer, display order)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access
    - Add policy for authenticated admin users to manage products
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  tagline text,
  description text,
  category text,
  price numeric(10, 2) DEFAULT 0,
  image_url text,
  features jsonb DEFAULT '[]'::jsonb,
  stats jsonb DEFAULT '{}'::jsonb,
  is_active boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (anyone can view active products)
CREATE POLICY "Products are viewable by everyone"
  ON products
  FOR SELECT
  USING (is_active = true);

-- Create policy for authenticated users to view all products (including inactive)
CREATE POLICY "All products viewable by authenticated users"
  ON products
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy for authenticated users to insert products
CREATE POLICY "Authenticated users can insert products"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policy for authenticated users to update products
CREATE POLICY "Authenticated users can update products"
  ON products
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policy for authenticated users to delete products
CREATE POLICY "Authenticated users can delete products"
  ON products
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS products_category_idx ON products(category);
CREATE INDEX IF NOT EXISTS products_is_active_idx ON products(is_active);
CREATE INDEX IF NOT EXISTS products_sort_order_idx ON products(sort_order);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();

-- Insert sample products
INSERT INTO products (name, tagline, description, category, price, image_url, features, stats, sort_order) VALUES
  (
    '企业管理平台',
    'Enterprise Management System',
    '一体化企业管理解决方案，整合ERP、CRM、OA等核心功能',
    'management',
    2999.00,
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    '["流程自动化", "智能审批", "数据可视化", "移动办公"]'::jsonb,
    '{"users": "10万+", "satisfaction": "98%", "uptime": "99.9%"}'::jsonb,
    1
  ),
  (
    '数据分析引擎',
    'Data Analytics Engine',
    '强大的数据处理与分析平台，帮助企业挖掘数据价值',
    'analytics',
    4999.00,
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    '["实时分析", "智能预测", "可视化报表", "多维度分析"]'::jsonb,
    '{"users": "5万+", "satisfaction": "97%", "uptime": "99.8%"}'::jsonb,
    2
  ),
  (
    '云协作平台',
    'Cloud Collaboration Platform',
    '高效的团队协作工具，让远程办公更简单、更高效',
    'collaboration',
    1999.00,
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    '["在线协作", "文档共享", "视频会议", "项目管理"]'::jsonb,
    '{"users": "20万+", "satisfaction": "99%", "uptime": "99.9%"}'::jsonb,
    3
  ),
  (
    '安全防护系统',
    'Security Protection System',
    '企业级安全解决方案，全方位保护您的数据资产',
    'security',
    6999.00,
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    '["威胁监测", "数据加密", "访问控制", "合规审计"]'::jsonb,
    '{"users": "3万+", "satisfaction": "99%", "uptime": "99.99%"}'::jsonb,
    4
  ),
  (
    '移动应用套件',
    'Mobile App Suite',
    '跨平台移动应用解决方案，随时随地掌控业务',
    'mobile',
    3999.00,
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    '["跨平台", "离线使用", "消息推送", "智能同步"]'::jsonb,
    '{"users": "15万+", "satisfaction": "96%", "uptime": "99.7%"}'::jsonb,
    5
  ),
  (
    '开发者平台',
    'Developer Platform',
    '开放API接口和开发工具，助力企业快速构建应用',
    'developer',
    8999.00,
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    '["API接口", "SDK工具", "技术文档", "开发者社区"]'::jsonb,
    '{"users": "8万+", "satisfaction": "98%", "uptime": "99.9%"}'::jsonb,
    6
  )
ON CONFLICT DO NOTHING;
