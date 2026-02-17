import type { FooterColumn, SocialLink } from "@/lib/types";

/**
 * Footer data centralized for easier maintenance
 * Extracted from Footer component for DRY principle
 */

export const footerDescription =
  "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.";

export const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Email Marketing", href: "#" },
      { label: "Campaigns", href: "#" },
      { label: "Branding", href: "#" },
    ],
  },
  {
    title: "Furniture",
    links: [
      { label: "Beds", href: "#" },
      { label: "Chair", href: "#" },
      { label: "All", href: "#" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { name: "Facebook", href: "#", ariaLabel: "Visit our Facebook page" },
  { name: "Twitter", href: "#", ariaLabel: "Follow us on Twitter" },
  { name: "Instagram", href: "#", ariaLabel: "Follow us on Instagram" },
];

export const legalLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export const copyrightYear = new Date().getFullYear();
