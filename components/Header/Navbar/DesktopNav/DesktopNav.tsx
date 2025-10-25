import React from "react";
import Link from "next/link";

interface DesktopNavProps {
  navLinks: { href: string; label: string }[];
  fontClass?: string;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navLinks, fontClass }) => {
  return (
    <ul className={`${fontClass} hidden md:flex items-center gap-8`}>
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="text-secondary hover:text-secondary-foreground transition-colors font-semibold"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
