import Paragraph from "@/components/shared/Paragraph/Paragraph";
import Image from "next/image";
import React from "react";

const BannerImageSection = () => {
  return (
    <div className="order-1 md:order-2 relative">
      {/* Main Image */}
      <Image
        src="/Banner/man-wearing.png"
        alt="Man Wearing"
        width={520}
        height={450}
      />

      {/* Payment Received */}
      <div className="absolute bottom-10 -left-6 flex gap-2 items-center bg-background backdrop-blur-md p-4 rounded-sm shadow-md">
        <div>
          <h3 className="text-primary-foreground">Payment Received</h3>
          <Paragraph className="text-primary-foreground text-sm font-semibold">
            +35,890.00
          </Paragraph>
          <div className="flex justify-between gap-6">
            <Paragraph className="text-secondary text-sm">
              1th Jan, 2024
            </Paragraph>
            <div className="flex items-center gap-2">
              <p className="text-[#37C390] text-sm">3.09%</p>
              <Image
                src="/Banner/Vector2.png"
                alt="Vector"
                width={10}
                height={6}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Active Users */}
      <div className="absolute right-2 top-1/3 mt-7 flex gap-2 items-center bg-background backdrop-blur-md p-4 rounded-sm shadow-md">
        <Image src="/Banner/Avatars.png" width={96} height={40} alt="avatars" />
        <div>
          <Paragraph className="text-primary text-sm font-bold">
            120K+
          </Paragraph>
          <Paragraph className="text-sm">Active users</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default BannerImageSection;
