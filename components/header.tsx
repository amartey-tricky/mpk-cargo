"use client";

import NavList from "./ui/navlist";
import Logo from "./ui/logo";
import Link from "next/link";
import { ModeToggle } from "./ui/theme-controller";
import { Button } from "./ui/button";
import { useState } from "react";
import { X, Menu } from "lucide-react";

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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="rounded-md shadow m-4 backdrop-blur-lg sticky dark:text-slate-400">
        <nav className="flex items-center justify-between p-4">
          <Logo />
          <NavList />
          <div className="hidden xl:flex items-center gap-4">
            <ModeToggle />
          </div>
          <Button
            variant="ghost"
            onClick={toggleMenu}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            className="xl:hidden"
          >
            <span className="sr-only">Menu</span>
            {isOpen ? (
              <X className="w-8 h-8 text-xl" />
            ) : (
              <Menu className="w-8 h-8 text-xl" aria-hidden="true" />
            )}
          </Button>
        </nav>
      </div>
      <div className="top-0 left-0 w-65">
      {isOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {Links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </Link>
            );
          })}
          <ModeToggle />
        </div>
      )}
      </div>
    </header>
  );
}
