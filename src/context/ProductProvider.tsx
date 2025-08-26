import { ReactNode, useEffect, useState } from "react";
import { ProductsContext } from "./ProductContext";
import { Order, ProductProps } from "../types/product";
import { API_URL } from "../constants";
import { handleSort } from "../helpers/orderPrice";

interface Props {
  children: ReactNode;
}

export const ProductsProvider = (props: Props) => {
  const { children } = props;
  const [listProducts, setListProducts] = useState<ProductProps[]>([]);
  const [termSearch, setTermSearch] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  const [originalProductsList, setOriginalProductsList] = useState<
    ProductProps[]
  >([]);
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const searchProducts = (term: string) => {
    if (term.trim()) {
      const result = originalProductsList.filter((product) =>
        product.title?.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      );
      setTermSearch(term);
      setFilteredProducts(result);
      setListProducts(filteredProducts);
    } else {
      setTermSearch("");
      setListProducts(originalProductsList);
    }
  };

  useEffect(() => {
    const fetchListProducts = async () => {
      setIsLoading(true);
      try {
        const urlFinal = category
          ? `${API_URL}/category?type=${category}`
          : `${API_URL}`;
        console.log(category);
        const response = await fetch(urlFinal);
        const responseData = await response.json();
        setListProducts(responseData.products);
        setOriginalProductsList(responseData.products);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchListProducts();
  }, [category]);

  const getCategoryParam = (cat: string) => {
    setCategory(cat);
  };

  const sortProducts = (sort: Order) => {
    let orderedProducts;
    if (sort != "default") {
      orderedProducts = handleSort(listProducts, sort);
    } else {
      orderedProducts = originalProductsList;
    }
    //console.log(handleSort(listProducts, sort));
    setListProducts(orderedProducts);
  };

  return (
    <ProductsContext.Provider
      value={{
        listProducts,
        isLoading,
        filteredProducts,
        termSearch,
        category,
        sortProducts,
        getCategoryParam,
        searchProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
