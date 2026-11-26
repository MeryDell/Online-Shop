import { Outlet } from "react-router";
import { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import ShoppingBag from "../pages/ShoppingBag";

function MainLayout() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem("lobscur-current-user")) ?? null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (!isCartOpen) return undefined;

    function closeOnEscape(event) {
      if (event.key === "Escape") setIsCartOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isCartOpen]);

  function addToCart(product) {
    setCart((currentCart) => [...currentCart, product]);
  }

  function removeFromCart(indexToRemove) {
    setCart((currentCart) => currentCart.filter((_, index) => index !== indexToRemove));
  }

  function registerUser(fullName, email) {
    const normalizedEmail = email.trim().toLowerCase();
    let users = [];
    try {
      const storedUsers = JSON.parse(window.localStorage.getItem("lobscur-users"));
      users = Array.isArray(storedUsers) ? storedUsers : [];
    } catch { /* Use an empty local account list if storage is unavailable or invalid. */ }

    if (users.some((user) => user.email === normalizedEmail)) {
      return "An account with this email already exists. Please log in.";
    }

    const user = { fullName: fullName.trim(), email: normalizedEmail };
    window.localStorage.setItem("lobscur-users", JSON.stringify([...users, user]));
    window.localStorage.setItem("lobscur-current-user", JSON.stringify(user));
    setCurrentUser(user);
    return null;
  }

  function loginUser(email) {
    const normalizedEmail = email.trim().toLowerCase();
    let users = [];
    try {
      const storedUsers = JSON.parse(window.localStorage.getItem("lobscur-users"));
      users = Array.isArray(storedUsers) ? storedUsers : [];
    } catch { /* Use an empty local account list if storage is unavailable or invalid. */ }

    const user = users.find((entry) => entry.email === normalizedEmail);
    if (!user) return "We couldn’t find an account with this email. Please register first.";

    window.localStorage.setItem("lobscur-current-user", JSON.stringify(user));
    setCurrentUser(user);
    return null;
  }

  function logoutUser() {
    window.localStorage.removeItem("lobscur-current-user");
    setCurrentUser(null);
  }

  const outletContext = {
    cart,
    addToCart,
    removeFromCart,
    openCart: () => setIsCartOpen(true),
    currentUser,
    registerUser,
    loginUser,
    logoutUser,
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#090909] text-white">
      <Header cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />

      <main className="flex-1 bg-[#090909]">
        <Outlet context={outletContext} />
      </main>

      <Footer />

      {isCartOpen && (
        <div role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsCartOpen(false); }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-6">
          <div role="dialog" aria-modal="true" aria-labelledby="cart-dialog-title" className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#d7c1a5]/20 bg-[#0b0a0a] shadow-[0_25px_100px_rgba(0,0,0,0.75)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
              <div><p className="text-[9px] uppercase tracking-[0.24em] text-[#c8ae8d]">Your selection</p><h2 id="cart-dialog-title" className="mt-1 font-serif text-2xl text-[#eadbc7]">Shopping bag</h2></div>
              <button type="button" onClick={() => setIsCartOpen(false)} aria-label="Close shopping bag" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xl text-white/60 transition hover:border-[#c8ae8d]/40 hover:text-white">×</button>
            </div>
            <ShoppingBag cart={cart} removeFromCart={removeFromCart} onClose={() => setIsCartOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default MainLayout;
