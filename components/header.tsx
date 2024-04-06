"use client";

import NavList from "./ui/navlist";
import Logo from "./ui/logo";
import { ModeToggle } from "./ui/theme-controller";
import { MobileMenu } from "./ui/mobilemenu";

export default function Header() {
  return (
    <header className="w-full h-auto my-6 backdrop-blur-lg sticky top-0 z-20 dark:text-slate-400 px-8">
      <nav className="flex items-center justify-between p-4">
        <Logo />
        <NavList />
        <div className="flex gap-3">
          <ModeToggle />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
