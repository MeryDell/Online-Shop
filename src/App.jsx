import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero"
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart(prevCart => [
      ...prevCart,
      product
    ]);
  }

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <Header cartCount={cart.length} />

      <main>
        <Hero />
        <ProductList 
        onAddToCart={addToCart}
        />
        <ContactForm/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
