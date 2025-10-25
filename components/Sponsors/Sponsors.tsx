"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const sponsors = [
  "/Sponsors/Sponsors1.png",
  "/Sponsors/Sponsors2.png",
  "/Sponsors/Sponsors3.png",
  "/Sponsors/Sponsors4.png",
  "/Sponsors/Sponsors5.png",
  "/Sponsors/Sponsors6.png",
];

const Sponsors = () => {
  return (
    <section className="pb-16 bg-background overflow-hidden">
      <motion.div
        className="flex items-center gap-16 w-max"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 5,
        }}
      >
        {[...sponsors, ...sponsors].map((src, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center min-w-[140px] h-[60px]"
          >
            <Image
              src={src}
              width={140}
              height={60}
              alt={`Sponsor ${idx + 1}`}
              className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Sponsors;
