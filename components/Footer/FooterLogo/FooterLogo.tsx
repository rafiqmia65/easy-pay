"use client";

import React from "react";
import { motion } from "framer-motion";
import BrandLogo from "@/components/shared/BrandLogo/BrandLogo";

const FooterLogo: React.FC = () => {
  return (
    <motion.div
      className="md:col-span-2 flex flex-col items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <BrandLogo />
      <motion.p
        className="mt-6 text-secondary max-w-sm leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Easy Pay offers secure, seamless, and fee-free payments for effortless
        global transactions.
      </motion.p>
    </motion.div>
  );
};

export default FooterLogo;
