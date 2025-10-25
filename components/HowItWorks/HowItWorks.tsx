import React from "react";
import Section from "../shared/Section/Section";
import HowItWorksHeader from "./HowItWorksHeader/HowItWorksHeader";
import HowItWorksContent from "./HowItWorksContent/HowItWorksContent";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="bg-accent">
      <Section bgColor="bg-accent">
        <HowItWorksHeader></HowItWorksHeader>
        <HowItWorksContent></HowItWorksContent>
        <div className="mt-6">
          <Image
            src="/HowItWorks/HowItWorks.png"
            width={1500}
            height={600}
            alt="How It Works"
            className="rounded-2xl object-cover"
          />
        </div>
      </Section>
    </div>
  );
};

export default HowItWorks;
