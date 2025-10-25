import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/components/shared/BrandLogo/BrandLogo";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  navLinks: { href: string; label: string }[];
}

const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  setIsOpen,
  navLinks,
}) => {
  return (
    <>
      {/* Sidebar Drawer */}
      <div
        className={`lg:hidden bg-background fixed top-0 left-0 h-full w-4/5 max-w-sm transform transition-transform duration-300 ease-in-out z-50 shadow-xl
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <BrandLogo />
          <button
            onClick={() => setIsOpen(false)}
            className="text-secondary-foreground cursor-pointer"
          >
            <X size={26} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-primary hover:text-secondary-foreground transition-colors font-medium text-lg"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="px-6 mt-auto mb-6">
          <Button className="bg-primary-foreground hover:bg-primary-foreground/80 text-white w-full">
            Contact Us
          </Button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default MobileNav;
