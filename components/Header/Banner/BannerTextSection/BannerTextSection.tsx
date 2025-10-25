import Paragraph from "@/components/shared/Paragraph/Paragraph";
import Image from "next/image";
import React from "react";

const BannerTextSection = () => {
  return (
    <div className="order-2 md:order-1">
      <Paragraph className="mb-2">EASY PAYMENT</Paragraph>

      <div className="relative">
        <h1 className="text-primary font-bold text-4xl `leading-[3.5rem]` lg:text-[56px] mb-6">
          Pay fast and smarter from anywhere
        </h1>
        <Image
          className="absolute top-10 lg:top-14 right-0"
          src="/banner/Vector.png"
          alt="Vector"
          width={300}
          height={6}
        />
      </div>

      <Paragraph>
        Experience the future of payments: fast, secure, and tailored for the
        next generation&apos;s convenience and trust.
      </Paragraph>

      <div className="flex gap-6 items-center mt-10">
        <Image
          src="/banner/AppStore.png"
          width={144}
          height={48}
          alt="App Store"
        />
        <Image
          src="/banner/GooglePlay.png"
          width={144}
          height={48}
          alt="Google Play"
        />
      </div>
    </div>
  );
};

export default BannerTextSection;
