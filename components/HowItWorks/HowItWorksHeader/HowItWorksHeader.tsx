import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import SmallHeading from "@/components/shared/SmallHeading/SmallHeading";
import { Button } from "@/components/ui/button";
import React from "react";

const HowItWorksHeader = () => {
  return (
    <div className="md:flex items-end justify-between">
      {/* Text Content */}
      <div>
        <SmallHeading>HOW IT WORKS</SmallHeading>
        <SectionHeading className="mt-2 max-w-[510px]">
          Make payments, transfers, and more in 3 simple steps
        </SectionHeading>
      </div>

      {/* Button */}
      <Button className="bg-primary-foreground text-white mt-5">
        Get Started Now
      </Button>
    </div>
  );
};

export default HowItWorksHeader;
