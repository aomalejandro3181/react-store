import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { ProductsProvider } from "./context/ProductProvider";
import CartProvider from "./context/CartProvider";
import FavoritesProvider from "./context/FavoritesProvider";

const App = () => {
  return (
    <>
      <CartProvider>
        <ProductsProvider>
          <FavoritesProvider>
            <BrowserRouter>
              <Layout />
            </BrowserRouter>
          </FavoritesProvider>
        </ProductsProvider>
      </CartProvider>
    </>
  );
};

export default App;
