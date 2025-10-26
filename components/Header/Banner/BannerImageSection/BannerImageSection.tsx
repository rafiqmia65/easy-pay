"use client";

import Paragraph from "@/components/shared/Paragraph/Paragraph";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const BannerImageSection = () => {
  return (
    <div className="order-1 md:order-2 relative">
      {/* Main Image */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/Banner/man-wearing.png"
          alt="Man Wearing"
          width={520}
          height={450}
        />
      </motion.div>

      {/* Payment Received */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-10 -left-6 flex gap-2 items-center bg-background backdrop-blur-md p-4 rounded-sm shadow-md"
      >
        <div>
          <h3 className="text-primary-foreground">Payment Received</h3>
          <Paragraph className="text-primary-foreground text-sm font-semibold">
            +35,890.00
          </Paragraph>
          <div className="flex justify-between gap-6">
            <Paragraph className="text-secondary text-sm">
              1th Jan, 2024
            </Paragraph>
            <div className="flex items-center gap-2">
              <p className="text-[#37C390] text-sm">3.09%</p>
              <Image
                src="/Banner/Vector2.png"
                alt="Vector"
                width={10}
                height={6}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Active Users */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute right-2 top-1/3 mt-7 flex gap-2 items-center bg-background backdrop-blur-md p-4 rounded-sm shadow-md"
      >
        <Image src="/Banner/Avatars.png" width={96} height={40} alt="avatars" />
        <div>
          <Paragraph className="text-primary text-sm font-bold">
            120K+
          </Paragraph>
          <Paragraph className="text-sm">Active users</Paragraph>
        </div>
      </motion.div>
    </div>
  );
};

export default BannerImageSection;
