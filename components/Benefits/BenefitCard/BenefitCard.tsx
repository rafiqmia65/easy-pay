"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card
        className="group p-6 border transition-all duration-300 flex flex-col h-full"
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 text-primary transition-colors duration-300">
          <Icon size={28} />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-secondary mt-auto">{description}</p>
      </Card>
    </motion.div>
  );
};

export default BenefitCard;
