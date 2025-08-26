import { ReactNode, useEffect, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";
import { ProductProps } from "../types/product";

interface Props {
  children: ReactNode;
}

const FavoritesProvider = (props: Props) => {
    const { children } = props;
    const [favorites, setFavorites] = useState<ProductProps[]>([]);

    const addFavorite = (product: ProductProps) => {
        const isFavorite = isFavoriteFind(product.id);
        if(!isFavorite){
            setFavorites((prevFavorites) => {
                const updateFavorites = [...prevFavorites, product];
                console.log(updateFavorites)
                return updateFavorites;
            });
        }
    };

    const removeFavorite = (product: ProductProps) => {
        const isFavorite = isFavoriteFind(product.id);
        if(isFavorite){
            setFavorites((prevFavorites) => {
                const updateFavorites = prevFavorites.filter(
                    (favorite) => favorite.id !== product.id
                );
                return updateFavorites;
            });
        }
    }
    const isFavoriteFind = (id: number) => {
        return favorites.some((favorite) => favorite.id === id);
    };

    useEffect(() => {
        const savedFavorites = localStorage.getItem("favorites");
        if(savedFavorites){
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }, [favorites]);

      console.log(favorites)

    return (
        <FavoritesContext.Provider
          value={{
            favorites,
            addFavorite,
            removeFavorite,
            isFavoriteFind,
          }}
        >
          {children}
        </FavoritesContext.Provider>
      );
};

export default FavoritesProvider;