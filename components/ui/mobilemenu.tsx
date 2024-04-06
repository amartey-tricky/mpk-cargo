"use client";

import Link from "next/link";
import { Button } from "./button";
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

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        onClick={toggleMenu}
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Menu</span>
        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" aria-hidden="true" />}
      </Button>
      {isOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {Links.map((link => {
            return (
              <Link key={link.name} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium">{link.name}</Link>
            )
          }))}
        </div>
      )}
    </div>
  );
}
