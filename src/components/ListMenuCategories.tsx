import { Link, NavLink } from "react-router-dom";
import { API_URL } from "../constants";
import { useContext, useEffect, useState } from "react";
import { ProductContextType, ProductsContext } from "../context/ProductContext";

const ListMenuCategories = () => {
  const [lisCategories, setListCategories] = useState([]);
  const { termSearch, searchProducts, category } =
    useContext<ProductContextType>(ProductsContext);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(`${API_URL}/category`);
      const data = await response.json();

      setListCategories(data.categories);
    };
    fetchCategories();
  }, []);

  const clearInput = () => {
    console.log("input", termSearch);
    searchProducts("");
  };
  return (
    <>
      <div>
        <ul className="flex flex-row flex-nowrap overflow-x-auto items-center gap-3 font-light text-sm text-gray-600 list-none h-10 px-5">
          <li
            onClick={clearInput}
            className="capitalize min-w-max h-10 flex items-center"
          >
            <Link to="/products">All Products</Link>
          </li>

          {lisCategories.map((cat) => (
            <li
              key={cat}
              onClick={clearInput}
              className={`capitalize min-w-max h-10 flex items-center px-4 ${
                category === cat
                  ? "bg-purple-500 text-white rounded-tl-md rounded-br-md"
                  : ""
              }`}
            >
              <NavLink to={`/products/category/${cat}`}>{cat}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListMenuCategories;
