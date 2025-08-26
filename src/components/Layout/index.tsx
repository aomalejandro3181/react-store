import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Products from "../../pages/products";
import ProductDetail from "../../pages/products/ProductDetail";
import Cart from "../../pages/cart";
import FavoritesPage from "../../pages/favorites";

export default function Layout() {
  return (
    <div>
      <Header />
      <main className="text-center p-10">
        <Routes>
          <Route path="products" element={<Products />}></Route>
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="products/category/:category" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="/*" element={<Navigate to="products" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
