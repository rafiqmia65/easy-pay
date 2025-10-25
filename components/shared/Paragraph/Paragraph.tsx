import React, { ReactNode } from "react";
import clsx from "clsx";

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return <p className={clsx("text-secondary", className)}>{children}</p>;
};

export default Paragraph;
