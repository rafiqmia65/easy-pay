"use client";

import React from "react";
import FooterLogo from "./FooterLogo/FooterLogo";
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterCopyright from "./FooterCopyright/FooterCopyright";

const Footer: React.FC = () => {
  return (
    <section className="relative max-w-6xl mx-auto px-4 pt-16 pb-5">
      {/* Background Gradient Overlay */}
      <div
        className="absolute left-0 right-0 bottom-0 pointer-events-none rounded-t-xl"
        style={{
          height: "60%",
          background:
            "radial-gradient(ellipse at center bottom, rgba(147, 51, 234, 0.30) 0%, rgba(79, 70, 229, 0.02) 35%, transparent 100%)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16">
        <FooterLogo />
        <FooterLinks />
      </div>

      <div className="mt-8">
        <hr className="border-t border-gray-200" />
        <FooterCopyright />
      </div>
    </section>
  );
};

export default Footer;
