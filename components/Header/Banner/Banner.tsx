import React from "react";
import BannerImageSection from "./BannerImageSection/BannerImageSection";
import BannerTextSection from "./BannerTextSection/BannerTextSection";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <BannerImageSection />
        <BannerTextSection />
      </div>
    </div>
  );
};

export default Banner;
