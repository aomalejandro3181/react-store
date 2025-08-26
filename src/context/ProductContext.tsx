import { createContext } from "react";
import { ProductProps } from "../types/product";

export interface ProductContextType {
  listProducts: ProductProps[];
  isLoading?: boolean;
  filteredProducts?: ProductProps[];
  termSearch?: string;
  category?: string | undefined;
  searchProducts: (term: string) => void;
  sortProducts: (sort: string | null) => void;
  getCategoryParam: (cat: string | null) => void;
}

export const ProductsContext = createContext<ProductContextType>();
