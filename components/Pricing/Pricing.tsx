import React from "react";
import Section from "../shared/Section/Section";
import SmallHeading from "../shared/SmallHeading/SmallHeading";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import PricingCardGrid from "./PricingCardGrid/PricingCardGrid";

const Pricing = () => {
  return (
    <Section>
      <SmallHeading className="text-center">PRICING</SmallHeading>
      <SectionHeading className="mx-auto text-center max-w-[500px]">
        Simple transparent pricing no hidden fees
      </SectionHeading>
      <PricingCardGrid></PricingCardGrid>
    </Section>
  );
};

export default Pricing;
