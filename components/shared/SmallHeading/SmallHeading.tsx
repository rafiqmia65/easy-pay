import React, { ReactNode } from "react";

interface SmallHeadingProps {
  children: ReactNode;
  className?: string; // optional className
}

const SmallHeading: React.FC<SmallHeadingProps> = ({ children, className }) => {
  return (
    <h3
      className={`text-secondary-foreground font-semibold ${className || ""}`}
    >
      {children}
    </h3>
  );
};

export default SmallHeading;
