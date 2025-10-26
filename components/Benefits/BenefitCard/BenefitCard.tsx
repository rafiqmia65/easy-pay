import { Card } from "@/components/ui/card";
import React from "react";

interface BenefitCardProps {
  title: string;
  description: string;
  Icon: React.ComponentType<{ size?: number }>;
  bgColor: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  description,
  Icon,
  bgColor,
}) => {
  return (
    <Card
      className="group p-6 border transition-all duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-white/30 text-primary transition-colors duration-300">
        <Icon size={28} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-secondary">{description}</p>
    </Card>
  );
};

export default BenefitCard;
