"use client";

import Paragraph from "@/components/shared/Paragraph/Paragraph";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const BannerTextSection = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="order-2 md:order-1"
    >
      <Paragraph className="mb-2">EASY PAYMENT</Paragraph>

      <div className="relative">
        <h1 className="text-primary font-bold text-4xl leading-14 lg:text-[56px] mb-6">
          Pay fast and smarter from anywhere
        </h1>
        <Image
          className="absolute top-10 lg:top-14 right-0"
          src="/Banner/Vector.png"
          alt="Vector"
          width={300}
          height={6}
        />
      </div>

      <Paragraph>
        Experience the future of payments: fast, secure, and tailored for the
        next generation&apos;s convenience and trust.
      </Paragraph>

      <div className="flex gap-6 items-center mt-10">
        <Image
          src="/Banner/AppStore.png"
          width={144}
          height={48}
          alt="App Store"
        />
        <Image
          src="/Banner/GooglePlay.png"
          width={144}
          height={48}
          alt="Google Play"
        />
      </div>
    </motion.div>
  );
};

export default BannerTextSection;
