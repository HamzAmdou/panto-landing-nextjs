import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "@/components/ui/icons";
import {
  footerDescription,
  footerColumns,
  socialLinks,
  legalLinks,
  copyrightYear,
} from "@/lib/data/footer";

/* ------------------------------------------------------------------ */
/*  Constants - DRY principle for repeated classNames                */
/* ------------------------------------------------------------------ */

const FOOTER_LINK_CLASS =
  "font-gilroy text-[15px] font-medium text-gray-medium transition-colors hover:text-brand focus:outline-2 focus:outline-brand";

const FOOTER_HEADING_CLASS = "mb-4 font-dm-sans text-[17px] font-normal text-brand";

/* ------------------------------------------------------------------ */
/*  Icon Components Mapping                                           */
/* ------------------------------------------------------------------ */

const socialIconMap = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
} as const;

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
            <h2 className="mb-4 font-gilroy text-[28px] font-bold leading-normal tracking-[0.28px] text-dark">
              Panto
            </h2>
            <p className="font-gilroy text-[15px] leading-relaxed text-gray-medium">
              {footerDescription}
            </p>
          </div>

          {/* Columns 2-3: Services & Furniture */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className={FOOTER_HEADING_CLASS}>{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={FOOTER_LINK_CLASS}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Follow Us */}
          <div>
            <h3 className={FOOTER_HEADING_CLASS}>Follow Us</h3>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social) => {
                const IconComponent = socialIconMap[social.name as keyof typeof socialIconMap];
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.ariaLabel}
                    className={`flex items-center space-x-2 ${FOOTER_LINK_CLASS}`}
                  >
                    <IconComponent aria-hidden="true" />
                    <span>{social.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 flex flex-col gap-4 border-t border-gray-300 px-8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-dm-sans text-[15px] text-gray-medium">
            Copyright &copy; {copyrightYear}
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-dm-sans text-[15px] text-gray-medium transition-colors hover:text-brand focus:outline-2 focus:outline-brand"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
