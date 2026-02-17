import Link from "next/link";
import { ChevronDown, Search, ShoppingBag } from "lucide-react";
import { Container } from "@/components/ui/container";

const navItems = [
  { label: "Furniture", href: "#", hasDropdown: true },
  { label: "Shop", href: "#shop", hasDropdown: false },
  { label: "About Us", href: "#about", hasDropdown: false },
  { label: "Contact", href: "#contact", hasDropdown: false },
] as const;

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 pt-[40px]">
      <Container className="grid h-[40px] grid-cols-[1fr_auto_1fr] items-center">
        {/* Left: Logo */}
        <Link
          href="/"
          className="justify-self-start text-[28px] font-bold tracking-[0.28px] text-white"
        >
          Panto
        </Link>

        {/* Center: Links */}
        <nav className="hidden items-center gap-[60px] md:flex justify-self-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-[18px] font-medium leading-[27px] text-white"
            >
              {item.label}
              {item.hasDropdown ? <ChevronDown className="h-4 w-4" /> : null}
            </Link>
          ))}
        </nav>

        {/* Right: Icons */}
        <div className="justify-self-end flex items-center gap-[20px]">
          <button aria-label="Search" className="p-1">
            <Search className="h-6 w-6 text-white" />
          </button>
          <button aria-label="Cart" className="p-1">
            <ShoppingBag className="h-[34px] w-[34px] text-white" />
          </button>
        </div>
      </Container>
    </header>
  );
}
