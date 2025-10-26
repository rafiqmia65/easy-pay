import Image from "next/image";
import React from "react";

interface FeatureProps {
  dotColor: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({
  dotColor,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col p-4">
      <Image src={dotColor} alt="Dot" width={28} height={28} />
      <h3 className="text-lg mt-6 font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
export type { FeatureProps };
