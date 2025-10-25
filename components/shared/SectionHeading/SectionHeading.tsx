import { Urbanist } from "next/font/google";
import React, { ReactNode } from "react";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

interface SectionHeadingProps {
  children: ReactNode;
  className?: string; // optional className
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className,
}) => {
  return (
    <h3
      className={`${
        urbanist.className
      } text-primary mt-4 max-w-[500px] text-3xl md:text-4xl font-bold ${
        className || ""
      }`}
    >
      {children}
    </h3>
  );
};

export default SectionHeading;
