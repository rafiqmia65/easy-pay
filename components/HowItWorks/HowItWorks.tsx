"use client";

import React from "react";
import Section from "../shared/Section/Section";
import HowItWorksHeader from "./HowItWorksHeader/HowItWorksHeader";
import HowItWorksContent from "./HowItWorksContent/HowItWorksContent";
import Image from "next/image";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <div className="bg-accent">
      <Section bgColor="bg-accent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <HowItWorksHeader />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <HowItWorksContent />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6"
        >
          <Image
            src="/HowItWorks/HowItWorks.png"
            width={1500}
            height={600}
            alt="How It Works"
            className="rounded-2xl object-cover"
          />
        </motion.div>
      </Section>
    </div>
  );
};

export default HowItWorks;
