import Link from "next/link";
import { Container } from "@/components/ui/container";

/* ------------------------------------------------------------------ */
/*  Social Icons                                                       */
/* ------------------------------------------------------------------ */

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 0C7.284 0 6.944.012 5.877.06 4.813.11 4.086.277 3.45.525a4.902 4.902 0 00-1.772 1.153A4.902 4.902 0 00.525 3.45C.277 4.086.108 4.813.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.05 1.064.217 1.791.465 2.427a4.902 4.902 0 001.153 1.772 4.902 4.902 0 001.772 1.153c.636.248 1.363.415 2.427.465C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c1.064-.05 1.791-.217 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.248-.636.415-1.363.465-2.427C19.988 13.056 20 12.716 20 10s-.012-3.056-.06-4.123c-.05-1.064-.217-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772A4.902 4.902 0 0016.55.525C15.914.277 15.187.108 14.123.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.182.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858a3.097 3.097 0 01-.748 1.15c-.35.35-.684.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.097 3.097 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058zM10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-8.67a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Footer                                                        */
/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="bg-bg-light-2 pb-8 pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 px-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Column 1: Logo and Description */}
          <div>
            <h2 className="mb-4 font-gilroy text-[28px] font-bold leading-normal tracking-[0.28px] text-[#1E1E1E]">
              Panto
            </h2>
            <p className="font-gilroy text-[15px] leading-relaxed text-gray-medium">
              The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="mb-4 font-dm-sans text-[17px] font-normal text-brand">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="font-gilroy text-[15px] font-medium text-gray-medium transition-colors hover:text-brand">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="font-gilroy text-[15px] font-medium text-gray-medium transition-colors hover:text-brand">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link href="#" className="font-gilroy text-[15px] font-medium text-gray-medium transition-colors hover:text-brand">
                  Branding
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Furniture */}
          <div>
            <h3 className="mb-4 font-dm-sans text-[17px] font-normal text-brand">
              Furniture
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="font-gilroy text-[15px] font-medium text-gray-medium transition-colors hover:text-brand">
                  Beds
                </Link>
              </li>
              <li>
                <Link href="#" className="font-gilroy text-[15px] font-medium text-gray-medium transition-colors hover:text-brand">
                  Chair
                </Link>
              </li>
              <li>
                <Link href="#" className="font-gilroy text-[15px] font-medium text-gray-medium transition-colors hover:text-brand">
                  All
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="mb-4 font-dm-sans text-[17px] font-normal text-brand">
              Follow Us
            </h3>
            <div className="flex flex-col space-y-3">
              <Link
                href="#"
                className="flex items-center space-x-2 font-gilroy text-[15px] font-medium text-gray-medium transition-colors hover:text-brand"
              >
                <FacebookIcon />
                <span>Facebook</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-2 font-gilroy text-[15px] font-medium text-gray-medium transition-colors hover:text-brand"
              >
                <TwitterIcon />
                <span>Twitter</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-2 font-gilroy text-[15px] font-medium text-gray-medium transition-colors hover:text-brand"
              >
                <InstagramIcon />
                <span>Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 flex flex-col gap-4 border-t border-gray-300 px-8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-dm-sans text-[15px] text-gray-medium">
            Copyright &copy; 2021
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="font-dm-sans text-[15px] text-gray-medium transition-colors hover:text-brand"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="font-dm-sans text-[15px] text-gray-medium transition-colors hover:text-brand"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
