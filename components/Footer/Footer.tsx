import React from "react";
import BrandLogo from "../shared/BrandLogo/BrandLogo";

interface FooterLink {
  name: string;
  href: string;
}

const Footer = () => {
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

  return (
    <section className="relative max-w-6xl mx-auto px-4 pt-16 pb-5">
      {/* Background Gradient Overlay */}
      <div
        className="absolute left-0 right-0 bottom-0 pointer-events-none rounded-t-xl"
        style={{
          height: "60%", // extend up to 60% from bottom
          background:
            "radial-gradient(ellipse at center bottom, rgba(147, 51, 234, 0.30) 0%, rgba(79, 70, 229, 0.02) 35%, transparent 100%)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Logo & Description */}
          <div className="md:col-span-2 flex flex-col items-start">
            <BrandLogo />
            <p className="mt-6 text-secondary max-w-sm leading-relaxed">
              Easy Pay offers secure, seamless, and fee-free payments for
              effortless global transactions.
            </p>
          </div>

          {/* Right Columns */}
          <div className="md:col-span-2 flex justify-end gap-16">
            {/* Short Links */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">
                Short links
              </h3>
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
            </div>

            {/* Other Pages */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">
                Other pages
              </h3>
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
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-secondary">
          2024 &copy; Easy Pay. All rights reserved. Fintech Landing Page by
          MUHIB
        </div>
      </div>
    </section>
  );
};

export default Footer;
