"use client";

import React from "react";
import { Clock, Zap, CreditCard, Leaf } from "lucide-react";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import BenefitCard from "./BenefitCard/BenefitCard";
import Paragraph from "../shared/Paragraph/Paragraph";
import Section from "../shared/Section/Section";
import { motion } from "framer-motion";

const bgColors = ["#F3F7FF", "#FBF6EF", "#EEF9FE", "#F4EDFC"];

const benefitsData = [
  {
    id: 1,
    icon: Clock,
    title: "Smart Payment Scheduling",
    description:
      "Set up recurring payments or reminders automatically — never miss a due date again.",
  },
  {
    id: 2,
    icon: Zap,
    title: "One-Tap Transfers",
    description:
      "Send money instantly to friends, family, or businesses with just one tap.",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Customizable Wallets",
    description:
      "Organize your money into multiple wallets for different goals or categories.",
  },
  {
    id: 4,
    icon: Leaf,
    title: "Eco-Friendly Payments",
    description:
      "Go paperless — pay bills and invoices digitally to reduce environmental impact.",
  },
];

const Benefits = () => {
  return (
    <Section>
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading className="mx-auto">
            Why You&apos;ll Love Easy Pay
          </SectionHeading>
          <Paragraph className="text-secondary max-w-2xl mx-auto mt-6 mb-12">
            Discover the unique advantages of Easy Pay that make your payments
            smarter, faster, and more secure.
          </Paragraph>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {benefitsData.map(({ id, icon, title, description }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="h-full"
            >
              <BenefitCard
                Icon={icon}
                title={title}
                description={description}
                bgColor={bgColors[index % bgColors.length]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
