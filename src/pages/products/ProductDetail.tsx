import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { API_URL } from "../../constants";
import currencyFormatter from "../../helpers/currencyFormatter";
import { Heart } from "lucide-react";
import { Drawer } from "antd";
import ShoppingCart from "../../components/ShoppingCart";
import { ProductProps } from "../../types/product";
import { CartContext } from "../../context/CartContext";
import Spinner from "../../components/Spinner";
import ImageComponent from "../../components/ImageComponent";
import { FavoritesContext } from "../../context/FavoritesContext";

const ProductDetail = () => {
  const { productId } = useParams<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductProps>({} as ProductProps);
  const [open, setOpen] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart, isCartFind } = useContext(CartContext);
  const { addFavorite, isFavoriteFind } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_URL}/${productId}`);
        const responseData = await response.json();
        setProduct(responseData.product);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const existProduct = (id: string | undefined) => {
    return isCartFind(id);
  };

  const addCart = () => {
    setOpen(true);
    addToCart(product, quantity);
  };
  const onClose = () => {
    setOpen(false);
  };

  const addFav = (product: ProductProps) => {
    addFavorite(product);
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
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mx-auto flex gap-0 flex-col lg:flex-row p-0 lg:px-20 py-10">
          <figure className="w-full">
            <ImageComponent
              alt={product?.title}
              src={product?.image}
              width={300}
              height={300}
            />
          </figure>
          <div className="w-full text-left">
            <h1 className="text-3xl font-bold">{product?.title}</h1>
            <p className="py-5 font-light">{product?.description}</p>
            <p className="font-bold text-2xl">
              {currencyFormatter.format(product.price)}
            </p>
            <div className="py-5 flex flex-row flex-wrap gap-5">
              <input
                className="w-20 h-10 border border-gray-400 p-3 rounded-full focus:outline-none focus:border-black"
                type="number"
                name="quantity"
                id="quantity"
                defaultValue={quantity}
                onChange={handleQuantityChange}
              />
              <Heart
                onClick={()=> addFav(product)}
                width={40}
                height={40}
                className={`${isFavoriteFind(product.id) && "bg-purple-800 text-white"} border border-purple-400 rounded-full p-2 text-purple-800 cursor-pointer hover:bg-purple-800 hover:text-white`}
              />
            </div>
            <div className="w-1/2">
              <button
                disabled={existProduct(productId) >= 0 && true}
                type="button"
                onClick={addCart}
                className="w-full h-10 border bg-purple-500 hover:bg-purple-800 active:bg-purple-400 text-white font-light shadow-xl rounded-full disabled:bg-purple-200"
              >
                {existProduct(productId) < 0
                  ? "Agregar al carrito"
                  : "Agregado"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
