"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface StepCardProps {
  step: {
    id: number;
    step_number: string;
    icon: string; // image path
    title: string;
    description: string;
  };
}

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-start text-left p-6 md:p-8"
    >
      {/* Step Number & Icon */}
      <div className="relative mb-6">
        {/* Large transparent step number behind the icon */}
        <p className="text-8xl font-bold text-accent opacity-80 absolute -top-4 -left-3">
          {step.step_number}
        </p>

        {/* Icon / Image container */}
        <div className="relative z-10 p-2 ml-2 mt-8 inline-block">
          <Image
            src={step.icon}
            alt={`Step ${step.step_number}`}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
      </div>

      {/* Step Title */}
      <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>

      {/* Step Description */}
      <p className="text-secondary max-w-[235px] leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
};

export default StepCard;
