export const products = [
  // --- YOUR ORIGINAL 8 PRODUCTS (UPDATED) ---
  {
    id: 1,
    title: "L'Obscur", // Was: L'Obscur Necklace
    price: 35.60,
    category: "Necklace",
    image: "https://i.pinimg.com/1200x/67/2f/e0/672fe0bce302280235d388f81d8c4e52.jpg",
    images: [
      "https://i.pinimg.com/1200x/67/2f/e0/672fe0bce302280235d388f81d8c4e52.jpg",
      "https://i.pinimg.com/736x/66/e1/c1/66e1c1a2ce66a12b98ca60c642ebc392.jpg"
    ],
    featured: true,
    description: "A mystical necklace with delicate details.",
    sizes: ["40cm", "45cm", "50cm"],
    stock: 5,
    details: {
      material: "925 Sterling Silver, Black Rhodium Plating",
      stones: "Black Zirconia",
      care: "Avoid contact with perfume. Clean with a soft cloth."
    }
  },
  {
    id: 2,
    title: "Noir Ring", // Was: Noir Evening Rings
    price: 46.30,
    category: "Rings",
    image: "https://i.pinimg.com/1200x/69/e7/7e/69e77e1811db766ecdc7b2da439a280b.jpg",
    images: ["https://i.pinimg.com/1200x/69/e7/7e/69e77e1811db766ecdc7b2da439a280b.jpg"],
    featured: false,
    description: "Elegant rings designed for an evening look.",
    sizes: ["16", "17", "18", "19"],
    stock: 8,
    details: {
      material: "Silver-plated alloy",
      stones: "Faceted glass",
      care: "Store in a dry place."
    }
  },
  {
    id: 3,
    title: "Goth Muse", // Was: Goth Muse Bracelet
    price: 31.70,
    category: "Bracelet",
    image: "https://i.pinimg.com/1200x/69/a5/68/69a5684c1fcdf4a2cfb5a8eaebb370c7.jpg",
    images: ["https://i.pinimg.com/1200x/69/a5/68/69a5684c1fcdf4a2cfb5a8eaebb370c7.jpg"],
    featured: true,
    description: "A gothic style bracelet with sharp, distinct lines.",
    sizes: ["S (16cm)", "M (18cm)", "L (20cm)"],
    stock: 3,
    details: {
      material: "Stainless Steel",
      stones: "Black Onyx charms",
      care: "Keep away from water."
    }
  },
  {
    id: 4,
    title: "Elegance", // Was: Elegance Ring
    price: 26.80,
    category: "Rings",
    image: "https://i.pinimg.com/736x/f0/ce/ed/f0ceed45b2880925a6c54b073a9e08fd.jpg",
    images: ["https://i.pinimg.com/736x/f0/ce/ed/f0ceed45b2880925a6c54b073a9e08fd.jpg"],
    featured: false,
    description: "A delicate ring for everyday wear.",
    sizes: ["15", "16", "17"],
    stock: 12,
    details: {
      material: "14K Gold Plating",
      stones: "Small diamond-like Zirconia",
      care: "Clean with an alcohol wipe."
    }
  },
  {
    id: 5,
    title: "Dark Set", // Was: Necklace and Earrings Set
    price: 36.60,
    category: "Jewelry Set",
    image: "https://i.pinimg.com/736x/de/4c/31/de4c319bc6cadbad8f6efcc0617612fb.jpg",
    images: ["https://i.pinimg.com/736x/de/4c/31/de4c319bc6cadbad8f6efcc0617612fb.jpg"],
    featured: true,
    description: "A complete set featuring a necklace and earrings.",
    sizes: ["One Size"],
    stock: 4,
    details: {
      material: "925 Sterling Silver",
      stones: "Pearls and Zirconia",
      care: "Store separately in a jewelry box."
    }
  },
  {
    id: 6,
    title: "Noir Braslet", // Was: NOir Braslet
    price: 31.70,
    category: "Bracelet",
    image: "https://i.pinimg.com/1200x/d3/03/00/d303008619bd0b60d9b3e8056599fee0.jpg",
    images: ["https://i.pinimg.com/1200x/d3/03/00/d303008619bd0b60d9b3e8056599fee0.jpg"],
    featured: false,
    description: "A delicate bracelet with dark accents.",
    sizes: ["17cm", "19cm"],
    stock: 6,
    details: {
      material: "Black Rhodium",
      stones: "Black Spinel",
      care: "Avoid contact with harsh chemicals."
    }
  },
  {
    id: 7,
    title: "Essential", // Was: Essential Necklace
    price: 26.80,
    category: "Necklace",
    image: "https://i.pinimg.com/736x/66/e1/c1/66e1c1a2ce66a12b98ca60c642ebc392.jpg",
    images: ["https://i.pinimg.com/736x/66/e1/c1/66e1c1a2ce66a12b98ca60c642ebc392.jpg"],
    featured: false,
    description: "A basic, everyday necklace that pairs with everything.",
    sizes: ["40cm", "45cm"],
    stock: 10,
    details: {
      material: "Gold-plated Stainless Steel",
      stones: "Stone-free",
      care: "Keep in a dry place."
    }
  },
  {
    id: 8,
    title: "Silhouette", // Was: Silhouette Ring
    price: 41.50,
    category: "Rings",
    image: "https://i.pinimg.com/736x/34/3b/24/343b2438ab8a0ec012c0a60b351f1006.jpg",
    images: ["https://i.pinimg.com/736x/34/3b/24/343b2438ab8a0ec012c0a60b351f1006.jpg"],
    featured: true,
    description: "A statement ring with a striking, voluminous design.",
    sizes: ["16", "17", "18"],
    stock: 2,
    details: {
      material: "925 Sterling Silver",
      stones: "Grey Pearl",
      care: "Clean with a soft brush."
    }
  },

  // --- NEW 8 PRODUCTS (SAME STYLE) ---
  {
    id: 9,
    title: "Midnight Tear", // Was: Midnight Tear Earrings
    price: 28.90,
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1000&auto=format&fit=crop"
    ],
    featured: true,
    description: "Teardrop-shaped dangle earrings.",
    sizes: ["One Size"],
    stock: 7,
    details: {
      material: "925 Sterling Silver, Black Oxidized finish",
      stones: "Black Onyx",
      care: "Hang to store."
    }
  },
  {
    id: 10,
    title: "Obsidian Chain", // Was: Obsidian Chain Bracelet
    price: 54.00,
    category: "Bracelet",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop"],
    featured: false,
    description: "A heavy, chunky chain bracelet.",
    sizes: ["18cm", "20cm", "22cm"],
    stock: 4,
    details: {
      material: "Stainless Steel",
      stones: "Obsidian",
      care: "Avoid scratches."
    }
  },
  {
    id: 11,
    title: "Vintage Moon", // Was: Vintage Moon Pendant
    price: 39.20,
    category: "Necklace",
    image: "https://images.unsplash.com/photo-1599643478514-4a4204b4ae3f?q=80&w=1000&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1599643478514-4a4204b4ae3f?q=80&w=1000&auto=format&fit=crop"],
    featured: true,
    description: "Crescent moon pendant with a vintage aesthetic.",
    sizes: ["45cm", "50cm"],
    stock: 3,
    details: {
      material: "Antique Gold Plating",
      stones: "Moonstone",
      care: "Wipe with a dry cloth."
    }
  },
  {
    id: 12,
    title: "Crystal Stack", // Was: Crystal Stacking Rings
    price: 22.50,
    category: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?q=80&w=1000&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1605100804763-247f67b2548e?q=80&w=1000&auto=format&fit=crop"],
    featured: false,
    description: "Thin crystal rings, perfect for stacking.",
    sizes: ["15", "16", "17", "18"],
    stock: 15,
    details: {
      material: "Silver Plated",
      stones: "Small Crystals",
      care: "Keep away from water."
    }
  },
  {
    id: 13,
    title: "Dark Rose", // Was: Dark Rose Choker
    price: 33.40,
    category: "Necklace",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop"],
    featured: true,
    description: "Leather choker with a metal rose detail.",
    sizes: ["35cm", "40cm"],
    stock: 6,
    details: {
      material: "Genuine Leather, Brass",
      stones: "Stone-free",
      care: "Clean with leather conditioner."
    }
  },
  {
    id: 14,
    title: "Eclipse Hoops", // Was: Eclipse Hoop Earrings
    price: 25.00,
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop"],
    featured: false,
    description: "Large, statement hoop earrings.",
    sizes: ["One Size (5cm)"],
    stock: 9,
    details: {
      material: "Lightweight Alloy, Gold Plated",
      stones: "Stone-free",
      care: "Store in a box."
    }
  },
  {
    id: 15,
    title: "Serpentine", // Was: Serpentine Ring
    price: 48.90,
    category: "Rings",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop"],
    featured: true,
    description: "A wrap-around snake ring.",
    sizes: ["16", "17", "18"],
    stock: 2,
    details: {
      material: "925 Sterling Silver",
      stones: "Green Emerald (Imitation)",
      care: "Clean with a soft cloth."
    }
  },
  {
    id: 16,
    title: "Shadow Pearl", // Was: Shadow Pearl Set
    price: 65.00,
    category: "Jewelry Set",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1000&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1000&auto=format&fit=crop"],
    featured: true,
    description: "Necklace and earrings set with grey pearls.",
    sizes: ["45cm"],
    stock: 1,
    details: {
      material: "925 Sterling Silver",
      stones: "Natural Grey Pearl",
      care: "Do not use chemical cleaners."
    }
  }
];