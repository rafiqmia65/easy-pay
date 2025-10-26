"use client";

import React from "react";
import { motion } from "framer-motion";
import BannerImageSection from "./BannerImageSection/BannerImageSection";
import BannerTextSection from "./BannerTextSection/BannerTextSection";

const Banner = () => {
  return (
    <div className="max-w-6xl pt-10 mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <BannerTextSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <BannerImageSection />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
