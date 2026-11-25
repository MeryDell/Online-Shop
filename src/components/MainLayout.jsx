import { Outlet } from "react-router";
import { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";

function MainLayout() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((currentCart) => [...currentCart, product]);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cart.length} />

      <main className="flex-1">
        <Outlet context={{ cart, addToCart }} />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;