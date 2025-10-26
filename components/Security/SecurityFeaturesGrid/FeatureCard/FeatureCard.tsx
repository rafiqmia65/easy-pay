"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col p-4"
    >
      <Image src={dotColor} alt="Dot" width={28} height={28} />
      <h3 className="text-lg mt-6 font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
export type { FeatureProps };
