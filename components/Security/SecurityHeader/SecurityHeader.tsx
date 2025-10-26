import Paragraph from "@/components/shared/Paragraph/Paragraph";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import SmallHeading from "@/components/shared/SmallHeading/SmallHeading";
import React from "react";

const SecurityHeader = () => {
  return (
    <div className="md:flex items-end justify-between">
      {/* Text Content */}
      <div>
        <SmallHeading>SECURITY</SmallHeading>
        <SectionHeading className="mt-2 max-w-[510px]">
          We protect your money at every step with Easy Pay
        </SectionHeading>
      </div>

      {/* Button */}
      <Paragraph className="max-w-[377px]">
        Easy Pay ensures your money is protected at every step with advanced
        encryption, real-time monitoring, and multi-factor authentication.
      </Paragraph>
    </div>
  );
};

export default SecurityHeader;
