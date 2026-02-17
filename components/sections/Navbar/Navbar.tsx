import Link from "next/link";
import { Container } from "@/components/ui/container";

/** Figma node 1:31 — Iconly/Bold/Bag, 34×34, white path */
function BagIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path
        d="M17.007 2.833c3.797 0 6.918 2.984 7.076 6.764h-.037a.904.904 0 0 0-.06.32h.222c1.724 0 3.529 1.195 4.253 4.08l.079.34 1.089 8.776c.784 5.597-2.278 7.951-6.456 8.05l-.28.004H11.147c-4.245 0-7.517-1.547-6.797-7.674l.049-.38 1.101-8.776c.544-3.107 2.367-4.332 4.125-4.415l.195-.005h.11a.894.894 0 0 1 0-.32c.159-3.78 3.28-6.764 7.077-6.764Zm-4.12 11.8c-.691 0-1.252.577-1.252 1.289 0 .711.56 1.289 1.253 1.289.691 0 1.252-.577 1.252-1.289l-.01-.162a1.258 1.258 0 0 0-1.243-1.127Zm8.201 0c-.692 0-1.252.577-1.252 1.289 0 .711.56 1.289 1.252 1.289.691 0 1.252-.577 1.252-1.289 0-.712-.56-1.289-1.252-1.289Zm-4.137-7.955c-2.726 0-4.935 2.202-4.935 4.919.018.106.018.214 0 .32h9.933a.882.882 0 0 0-.062-.32c0-2.717-2.21-4.919-4.936-4.919Z"
        fill="white"
      />
    </svg>
  );
}

/** Figma node 1:35 — Cart badge, orange ellipse 20×25.24 with "0" */
function CartBadge() {
  return (
    <svg width="20" height="26" viewBox="0 0 20 26" fill="none" className="absolute top-0.75 left-5">
      <ellipse cx="10" cy="12.622" rx="10" ry="12.622" fill="#E58411" />
      <path
        d="M9.87 19.2c2.41 0 3.865-2.315 3.87-6.302.004-3.957-1.47-6.225-3.87-6.225-2.405 0-3.865 2.262-3.87 6.225-.009 3.975 1.456 6.296 3.87 6.302Zm0-2.12c-1.1 0-1.811-1.394-1.807-4.181.005-2.747.711-4.129 1.807-4.129 1.09 0 1.801 1.382 1.801 4.129.005 2.787-.706 4.18-1.801 4.18Z"
        fill="white"
      />
    </svg>
  );
}

/** Figma node 1:14 — Furniture dropdown arrow, 10×6 white vector */
function DropdownArrow() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="ml-2">
      <path
        d="M0 .996a1.1 1.1 0 0 1 .264.668l4.286 4.14a.702.702 0 0 0 .453.196.702.702 0 0 0 .454-.195l4.285-4.287a.986.986 0 0 0 .255-.581.986.986 0 0 0-.162-.628.858.858 0 0 0-.484-.306.858.858 0 0 0-.523.195L5 4.03 1.171.327A.842.842 0 0 0 .803.135.78.78 0 0 0 .407.21a.896.896 0 0 0-.299.32A1.06 1.06 0 0 0 0 .996Z"
        fill="white"
      />
    </svg>
  );
}

/**
 * Navbar — pixel-perfect from Figma nodes 1:18, 1:10, 1:31, 1:35
 *
 * Logo "Panto": rel(80, 40) — Gilroy-Bold 28px, white, tracking 0.28px
 * Nav group: rel(493, 41) — Gilroy-Medium 18px, white
 *   Furniture (with dropdown arrow 1:14), Shop, About Us, Contact
 *   Gaps: Furniture→Shop=66px, Shop→AboutUs=43px, AboutUs→Contact=64px
 * Bag icon: rel(1326, 41) — 34×34, white Iconly/Bold/Bag
 * Cart badge: rel(1346, 44) — orange ellipse overlapping bag top-right
 */
export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 pt-10">
      <Container className="grid h-8.75 grid-cols-[1fr_auto_1fr] items-center">
        {/* Logo — node 1:18 */}
        <Link
          href="/"
          className="justify-self-start font-gilroy text-[28px] font-bold leading-none tracking-[0.28px] text-white"
        >
          Panto
        </Link>

        {/* Nav links — node 1:10 */}
        <nav className="hidden items-center md:flex">
          <Link href="#" className="flex items-center font-gilroy text-[18px] font-medium leading-5.25 text-white">
            Furniture
            <DropdownArrow />
          </Link>
          <Link href="#shop" className="ml-16.5 font-gilroy text-[18px] font-medium leading-5.25 text-white">
            Shop
          </Link>
          <Link href="#about" className="ml-15.5 font-gilroy text-[18px] font-medium leading-5.25 text-white">
            About Us
          </Link>
          <Link href="#contact" className="ml-16 font-gilroy text-[18px] font-medium leading-5.25 text-white">
            Contact
          </Link>
        </nav>

        {/* Bag + badge — nodes 1:31 + 1:35 */}
        <div className="relative justify-self-end">
          <BagIcon />
          <CartBadge />
        </div>
      </Container>
    </header>
  );
}
