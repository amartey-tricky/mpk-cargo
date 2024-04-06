import Link from "next/link";
import CldImage from "./cldimage";
import { LinkIcon } from "lucide-react";

const Links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Cost Calculator",
    href: "/calculator",
  },
];

export default function Footer() {
  return (
    <footer className="rounded-lg shadow m-4 dark:text-slate-400">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:p-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <CldImage
              src="logo_lhvmu4"
              alt="Mpk logo"
              height={40}
              width={40}
              loading="lazy"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              MPK Cargo
            </span>
          </Link>
          <nav className="flex flex-wrap items-center mb-6 text-sm font-medium gap-4 md:gap-6 sm:mb-0">
            {Links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:underline transition-all ease-in-out duration-300"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <hr className="my-6 border-slate-600 sm:mx-auto ld:my-8" />
        <span className="block text-sm sm:text-center">
          © 2024{" "}
          <Link href="/" className="hover:underline">
            MPK Cargo Logistics™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
