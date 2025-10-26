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
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Drawer - Full Height */}
      <div
        className={`lg:hidden bg-background fixed top-0 left-0 h-screen w-4/5 max-w-sm transform transition-transform duration-300 ease-in-out z-50 shadow-xl border-r flex flex-col
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b bg-background shrink-0">
          <BrandLogo />
          <button
            onClick={() => setIsOpen(false)}
            className="text-secondary-foreground cursor-pointer p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Main Navigation Content - Scrollable if needed */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navigation Links */}
          <div className="flex-1 px-6 py-6 bg-background overflow-y-auto">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-secondary hover:bg-secondary-foreground/10 hover:text-secondary-foreground rounded-lg transition-all duration-200 font-medium text-base border border-transparent hover:border-muted-foreground/20"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Button Section */}
          <div className="px-6 py-6 bg-background border-t shrink-0">
            <Button
              className="w-full py-3 bg-primary-foreground text-white hover:bg-primary/90 transition-colors font-medium text-base"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
