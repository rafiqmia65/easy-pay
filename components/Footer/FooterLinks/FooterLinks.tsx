"use client";

import React from "react";
import { motion } from "framer-motion";

interface FooterLink {
  name: string;
  href: string;
}

const shortLinks: FooterLink[] = [
  { name: "Features", href: "/features" },
  { name: "How it works", href: "/how-it-works" },
  { name: "Security", href: "/security" },
  { name: "Testimonial", href: "/testimonial" },
];

const otherPages: FooterLink[] = [
  { name: "Privacy policy", href: "/privacy-policy" },
  { name: "Terms & conditions", href: "/terms-conditions" },
  { name: "404", href: "/404" },
];

const FooterLinks: React.FC = () => {
  return (
    <div className="md:col-span-2 flex md:justify-end gap-16">
      {/* Short Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold text-primary mb-4">Short links</h3>
        <ul className="space-y-3">
          {shortLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-secondary hover:text-purple-600 transition-colors duration-200 text-base"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Other Pages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold text-primary mb-4">Other pages</h3>
        <ul className="space-y-3">
          {otherPages.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-secondary hover:text-purple-600 transition-colors duration-200 text-base"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default FooterLinks;
