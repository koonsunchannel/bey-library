alter table public.products
  add column if not exists display_order integer;

create index if not exists products_category_display_order_idx
  on public.products (category, display_order);