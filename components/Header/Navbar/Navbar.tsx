"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import BrandLogo from "@/components/shared/BrandLogo/BrandLogo";
import { Urbanist } from "next/font/google";
import { Button } from "@/components/ui/button";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/security", label: "Security" },
    { href: "/benefits", label: "Benefits" },
  ];

  return (
    <nav className="sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <BrandLogo />

        {/* Desktop Navigation */}
        <DesktopNav navLinks={navLinks} fontClass={urbanist.className} />

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Button className="bg-primary-foreground text-white hover:bg-primary/90 px-6 py-2">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden cursor-pointer text-secondary-foreground p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Navigation Drawer */}
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} />
      </div>
    </nav>
  );
};

export default Navbar;
