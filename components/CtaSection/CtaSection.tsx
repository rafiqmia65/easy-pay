"use client";

import React from "react";
import Section from "../shared/Section/Section";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import Paragraph from "../shared/Paragraph/Paragraph";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const CtaSection: React.FC = () => {
  return (
    <Section>
      <div
        className="rounded-2xl px-4 overflow-hidden relative"
        style={{
          backgroundImage: "url('/CTA/CtaBg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary/10"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Headline */}
          <SectionHeading className="mx-auto text-white">
            Ready to experience seamless secure payments globally
          </SectionHeading>

          {/* Description */}
          <Paragraph className="mt-4 text-center text-white max-w-[580px] mx-auto font-normal">
            Ready for hassle-free, secure payments anywhere in the world? Start
            using Monks Pay today. It&apos;s fast, free, and focused on keeping
            your transactions secure!
          </Paragraph>

          {/* Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Primary Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button className="px-8 py-5 bg-primary-foreground text-white transition duration-300 shadow-lg w-full sm:w-auto hover:bg-primary-foreground/90">
                Download the App
              </Button>
            </motion.div>

            {/* Secondary Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button className="px-8 py-5 border border-white text-white bg-transparent hover:bg-white hover:text-gray-900 transition duration-300 w-full sm:w-auto">
                Get Started Now
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default CtaSection;
