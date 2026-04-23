export interface ProductProps {
  id: number;
  title?: string;
  price: number;
  image?: string;
  description?: string;
  quantity?: number;
}

export type Order = "asc" | "desc" | "default";
