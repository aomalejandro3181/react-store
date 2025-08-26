import { Order, ProductProps } from "../types/product";

export const handleSort = (products: ProductProps[], order: Order) => {
  console.log(order);
  if (order === "default") {
    console.log("paso");
    return products;
  }

  return [...products].sort((a, b) => {
    const priceA = a.price || 0;
    const priceB = b.price || 0;

    return order === "asc" ? priceA - priceB : priceB - priceA;
  });
};
