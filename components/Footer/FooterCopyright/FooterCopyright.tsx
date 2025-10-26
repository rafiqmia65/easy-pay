"use client";

import React from "react";
import { motion } from "framer-motion";

const FooterCopyright: React.FC = () => {
  return (
    <motion.div
      className="text-center text-sm text-secondary mt-4"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      2024 &copy; Easy Pay. All rights reserved. Fintech Landing Page by MUHIB
    </motion.div>
  );
};

export default FooterCopyright;
