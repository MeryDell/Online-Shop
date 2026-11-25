import { useOutletContext } from "react-router";

import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import ContactForm from "../components/ContactForm";

function Home() {
  const { addToCart } = useOutletContext();

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <main>
        <Hero />
        <ProductList onAddToCart={addToCart} />
        <ContactForm />
      </main>
    </div>
  );
}

export default Home;