import Features from "@/components/Features/Features";
import Sponsors from "@/components/Sponsors/Sponsors";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Security from "@/components/Security/Security";
import Pricing from "@/components/Pricing/Pricing";
import Testimonial from "@/components/Testimonial/Testimonial";
import CtaSection from "@/components/CtaSection/CtaSection";
import Benefits from "@/components/Benefits/Benefits";

export default function Home() {
  return (
    <>
      <Features></Features>
      <Sponsors></Sponsors>
      <HowItWorks></HowItWorks>
      <Benefits></Benefits>
      <Security></Security>
      <Pricing></Pricing>
      <Testimonial></Testimonial>
      <CtaSection></CtaSection>
    </>
  );
}
