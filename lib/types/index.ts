/**
 * Shared TypeScript types and interfaces for the Panto Furniture Landing Page
 */

export interface Product {
  name: string;
  category: string;
  price: number;
  image: string;
  rating?: number; // Rating 0-5 (optional, defaults to 5)
}

export interface Review {
  name: string;
  role: string;
  review: string;
  rating: number;
  image: string;
  coverImg: string;
}

export interface Feature {
  title: string;
  description: string;
}

export type Category = "Chair" | "Beds" | "Sofa" | "Lamp";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
}
