import type { Product, Category } from "@/lib/types";

/**
 * Product catalog for Best Selling section
 * Organized by category with pricing and images
 */
export const products: Record<Category, Product[]> = {
  Chair: [
    { name: "Sakarias Armchair", category: "Chair", price: 392, image: "/images/products/chair-1.png" },
    { name: "Baltsar Chair", category: "Chair", price: 299, image: "/images/products/chair-2.png" },
    { name: "Anjay Chair", category: "Chair", price: 519, image: "/images/products/chair-3.png" },
    { name: "Nyantuy Chair", category: "Chair", price: 921, image: "/images/products/chair-4.png" },
    { name: "Ekerö Chair", category: "Chair", price: 449, image: "/images/products/chair-5.png" },
    { name: "Strandmon Chair", category: "Chair", price: 629, image: "/images/products/chair-6.png" },
    { name: "Poäng Chair", category: "Chair", price: 349, image: "/images/products/chair-7.png" },
    { name: "Vedbo Chair", category: "Chair", price: 559, image: "/images/products/chair-8.png" },
  ],
  Beds: [
    { name: "Luxury Bed", category: "Beds", price: 1299, image: "/images/products/beds-1.png" },
    { name: "Comfort Bed", category: "Beds", price: 899, image: "/images/products/beds-2.png" },
    { name: "Modern Bed", category: "Beds", price: 1049, image: "/images/products/beds-3.png" },
    { name: "Classic Bed", category: "Beds", price: 749, image: "/images/products/beds-4.png" },
    { name: "Platform Bed", category: "Beds", price: 1149, image: "/images/products/beds-5.png" },
  ],
  Sofa: [
    { name: "Velvet Sofa", category: "Sofa", price: 1599, image: "/images/products/sofa-1.png" },
    { name: "Corner Sofa", category: "Sofa", price: 1299, image: "/images/products/sofa-2.png" },
    { name: "Modular Sofa", category: "Sofa", price: 1899, image: "/images/products/sofa-3.png" },
    { name: "Compact Sofa", category: "Sofa", price: 799, image: "/images/products/sofa-4.png" },
    { name: "Leather Sofa", category: "Sofa", price: 2199, image: "/images/products/sofa-4.png" },
  ],
  Lamp: [
    { name: "Floor Lamp", category: "Lamp", price: 199, image: "/images/products/lamp-1.png" },
    { name: "Desk Lamp", category: "Lamp", price: 149, image: "/images/products/lamp-2.png" },
    { name: "Pendant Lamp", category: "Lamp", price: 259, image: "/images/products/lamp-3.png" },
    { name: "Wall Lamp", category: "Lamp", price: 179, image: "/images/products/lamp-4.png" },
    { name: "Arc Lamp", category: "Lamp", price: 329, image: "/images/products/lamp-5.png" },
    { name: "Table Lamp", category: "Lamp", price: 189, image: "/images/products/lamp-6.png" },
  ],
};

export const categories = ["Chair", "Beds", "Sofa", "Lamp"] as const;
