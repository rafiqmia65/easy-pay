"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import { motion } from "framer-motion";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

interface FeatureCardProps {
  title: string;
  paragraph: string;
  image: string;
  index: number;
}

const bgColors = ["#F3F7FF", "#FBF6EF", "#EEF9FE", "#F4EDFC"];

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  paragraph,
  image,
  index,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        style={{ backgroundColor: bgColors[index % bgColors.length] }}
        className="text-center rounded-2xl shadow-sm py-6"
      >
        <Image
          src={image}
          width={60}
          height={60}
          alt={title}
          className="mx-auto mb-4"
        />
        <CardContent>
          <CardTitle
            className={`${urbanist.className} text-xl font-semibold text-primary`}
          >
            {title}
          </CardTitle>
          <CardDescription className="text-secondary mt-4">
            {paragraph}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
