"use client";

import React from "react";
import Section from "../shared/Section/Section";
import SmallHeading from "../shared/SmallHeading/SmallHeading";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import PricingCardGrid from "./PricingCardGrid/PricingCardGrid";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SmallHeading className="text-center">PRICING</SmallHeading>
        <SectionHeading className="mx-auto text-center max-w-[500px]">
          Simple transparent pricing no hidden fees
        </SectionHeading>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <PricingCardGrid />
      </motion.div>
    </Section>
  );
};

export default Pricing;
