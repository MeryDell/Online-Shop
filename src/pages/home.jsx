import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { useState } from "react";

function Home() {
    const [cart, setCart] = useState([]);

    function addToCart(product) {
    setCart((currentCart) => [...currentCart, product]);
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

export default Home;