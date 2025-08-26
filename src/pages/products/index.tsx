import { useContext, useEffect, useState } from "react";
import {
  ProductContextType,
  ProductsContext,
} from "../../context/ProductContext";
import CardProduct from "../../components/CardProduct";
import { Link, useParams } from "react-router-dom";
import { Order, ProductProps } from "../../types/product";
import Spinner from "../../components/Spinner";

const Products = () => {
  const { category } = useParams<string>();
  const {
    listProducts,
    filteredProducts,
    termSearch,
    isLoading,
    sortProducts,
    getCategoryParam,
  } = useContext<ProductContextType>(ProductsContext);
  const [itemForPage, setItemsForPage] = useState<number>(8);
  const [sort, setSort] = useState<Order>("default");
  const products = listProducts;

  useEffect(() => {
    if (category != undefined) {
      getCategoryParam(category);
    } else {
      getCategoryParam(null);
    }
  }, [category, getCategoryParam, isLoading, listProducts]);

  const handleSort = (sort: Order) => {
    sortProducts(sort);
    setSort(sort);
  };

  const handleLoadMore = () => {
    setItemsForPage((prev: number) => prev + 8);
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {filteredProducts?.length == 0 && termSearch ? (
            <h2>Productos No Encontrado!</h2>
          ) : (
            <>
              <h1 className="text-5xl font-semibold text-gray-700 pb-10 text-center">
                Consigue lo que necesitas
              </h1>
              <div className="w-full text-right p-10">
                <select
                  name="sort"
                  value={sort}
                  onChange={(e) => handleSort(e.target.value as Order)}
                  className="border border-gray-400 w-40 h-10 ml-2 p-2 active:outline-none outline-none"
                >
                  <option value="default">Ordenar por</option>
                  <option value="asc"> ➖ Menor precio</option>
                  <option value="desc"> ➕ Mayor precio</option>
                </select>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 pb-10 container mx-auto">
                {products
                  ?.slice(0, itemForPage)
                  .map((product: ProductProps) => (
                    <Link key={product.id} to={`/products/${product.id}`}>
                      <CardProduct
                        title={product.title}
                        id={product.id}
                        image={product.image}
                        price={product.price}
                      />
                    </Link>
                  ))}
              </div>
              <div className="flex flex-row w-full justify-center">
                {listProducts.length > itemForPage && (
                  <button
                    onClick={handleLoadMore}
                    className="w-[200px] h-10 border bg-purple-500 hover:bg-purple-800 active:bg-purple-400 text-white font-light shadow-xl rounded-full"
                  >
                    {isLoading ? "Cargando..." : "Cargar más"}
                  </button>
                )}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Products;
