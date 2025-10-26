"use client";

import React from "react";
import Section from "../shared/Section/Section";
import SecurityHeader from "./SecurityHeader/SecurityHeader";
import SecurityFeaturesGrid from "./SecurityFeaturesGrid/SecurityFeaturesGrid";
import { motion } from "framer-motion";

const Security = () => {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <SecurityHeader />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <SecurityFeaturesGrid />
      </motion.div>
    </Section>
  );
};

export default Security;
