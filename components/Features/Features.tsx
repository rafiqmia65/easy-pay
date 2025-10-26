"use client";

import React from "react";
import Section from "../shared/Section/Section";
import SmallHeading from "../shared/SmallHeading/SmallHeading";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import FeatureCard from "./FeatureCard/FeatureCard";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Instant payments",
    paragraph: "Send money to friends or family in real-time, for free.",
    image: "/Features/Features1.png",
  },
  {
    id: 2,
    title: "No hidden fees",
    paragraph: "Clear and simple pricing. Always be aware of your costs.",
    image: "/Features/Features2.png",
  },
  {
    id: 3,
    title: "Digital wallet",
    paragraph: "Store money securely and make fast transfers or purchases.",
    image: "/Features/Features3.png",
  },
  {
    id: 4,
    title: "Secure transactions",
    paragraph: "Store money securely and make fast transfers or purchases.",
    image: "/Features/Features4.png",
  },
];

const Features = () => {
  return (
    <Section>
      <SmallHeading className="text-center">FEATURES</SmallHeading>
      <SectionHeading className="text-center mx-auto mb-14">
        Why choose Easy Pay for effortless payments?
      </SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <FeatureCard
              title={feature.title}
              paragraph={feature.paragraph}
              image={feature.image}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Features;
