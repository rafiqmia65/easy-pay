import React from "react";

interface SectionProps {
  children: React.ReactNode;
  bgColor?: string; // optional background color prop
  className?: string; // optional extra classes
}

const Section: React.FC<SectionProps> = ({ children, bgColor, className }) => {
  return (
    <div
      className={`max-w-6xl mx-auto px-4 py-10 lg:py-16 transition-colors ${
        bgColor || "bg-background"
      } ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Section;
