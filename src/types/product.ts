export interface ProductProps {
  id: number;
  title?: string;
  price: number | bigint;
  image?: string;
  description?: string;
  quantity?: number;
}

export type Order = "asc" | "desc" | "default";
