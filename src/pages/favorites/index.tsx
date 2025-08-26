import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import CardProduct from "../../components/CardProduct";
import { Link } from "react-router-dom";
import { CircleX } from "lucide-react";
import { ProductProps } from "../../types/product";
const FavoritesPage = () => {
    const favoritesContext = useContext(FavoritesContext);
    const favorites = favoritesContext ? favoritesContext.favorites : [];
//TODO: debo entender porque genera error del typescript
    const { removeFavorite } = favoritesContext as any;

    const removeFav = (product: ProductProps) => {
        removeFavorite(product);
      };

    return (
        <div>
            <h1 className="text-5xl font-semibold text-gray-700 pb-10 text-left">
                Mis Favoritos ❤️‍🔥
              </h1>
              { !favorites.length && ( <h1>Sé que algo te gusta, buscalo! <Link className="underline" to={'/'}>Ir a la tienda</Link></h1>)}
              <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 pb-10 container mx-auto">
                
                {favorites.map(product => (
                    <>
                    <div id={product.id.toString()} className="relative">
                            <CircleX
                                onClick={() => removeFav(product)}
                                width={20}
                                height={20}
                                className="cursor-pointer absolute z-10 m-2 w-4 h-4 right-0 hover:text-purple-400" />
                    <Link className="relative" key={product.id} to={`/products/${product.id}`}>
                    <CardProduct
                      title={product.title}
                      id={product.id}
                      image={product.image}
                      price={product.price}
                    />
                  </Link>
                  </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default FavoritesPage;