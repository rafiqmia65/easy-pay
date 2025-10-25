import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";

const Header = () => {
  return (
    <header className="relative lg:max-w-7xl lg:mx-auto lg:mt-5 rounded-3xl">
      {/* ===== Gradient Background Layers (independent, won't clip sidebar) ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[25%] h-full bg-gradient-to-tr from-primary-foreground/6 to-transparent" />
        <div className="absolute top-[36%] left-[35%] w-[40%] h-[60%] bg-gradient-to-t from-orange-400/30 to-transparent blur-2xl" />
        <div className="absolute bottom-0 right-0 w-[25%] h-full bg-gradient-to-tl from-secondary-foreground/15 to-transparent" />
      </div>

      {/* ===== Actual Content ===== */}
      <div className="relative z-10">
        <Navbar />
        <Banner />
      </div>
    </header>
  );
};

export default Header;
