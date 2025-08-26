import { Badge, Drawer, Space } from "antd";
import ListMenuCategories from "./ListMenuCategories";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ShoppingBasket, Heart } from "lucide-react";
import ShoppingCart from "./ShoppingCart";
import { ProductContextType, ProductsContext } from "../context/ProductContext";
import { FavoritesContext } from "../context/FavoritesContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { totalQuantity } = useContext(CartContext);
  const { searchProducts, termSearch } =
    useContext<ProductContextType>(ProductsContext);
  const [open, setOpen] = useState<boolean>(false);
  const favoritesContext = useContext(FavoritesContext);
  const favorites = favoritesContext ? favoritesContext.favorites : [];
  const navigate = useNavigate();

  const onClose = () => {
    setOpen(false);
  };

  const handlerSearch = (value: string) => {
    searchProducts(value);
  };
  return (
    <>
      <Drawer
        title={<h1 className="text-center">Carrito</h1>}
        onClose={onClose}
        open={open}
      >
        <ShoppingCart deleteButton={false} />
      </Drawer>
      <div>
        <header>
          <div className=" p-6 flex justify-between items-center">
            <div className="flex flex-row gap-5 items-center">
              <a href="/">
                <span className="text-xl lg:text-3xl font-extrabold">
                  Ale Shop
                </span>
              </a>

              <div>
                <input
                  className=" focus:outline-none focus:border-black w-56 p-4 text-base bg-gray-100 h-10 focus:animate-pulse"
                  placeholder="Buscar producto..."
                  type="text"
                  value={termSearch}
                  onChange={(e) => {
                    handlerSearch(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div className="flex flex-row gap-1 cursor-pointer hover:text-purple-800 text-black">
              <Badge color="#a855f7" count={favorites.length} className={`${favorites.length && 'animate-pulse'}`}>
                <Heart onClick={() => navigate("/favorites")}
                  size={20}
                  className="cursor-pointer"
                />
              </Badge>
              </div>
              <div
                className="flex flex-row gap-1 cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <Space size="middle">
                  <Badge color="#a855f7" count={totalQuantity} showZero>
                    <ShoppingBasket size={20} />
                  </Badge>
                </Space>
              </div>
            </div>
          </div>
          <div className="bg-green-200">
            <ListMenuCategories />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
