"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

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

export default function NavList() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex gap-8">
      {Links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center justify-evenly text-xl font-medium hover:text-slate-500 hover:border-b-2 ease-in-out transition dark:hover:text-slate-300"
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
