"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative pt-16 lg:max-w-7xl lg:mx-auto lg:mt-5 rounded-3xl overflow-hidden">
      {/* Gradient Layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[25%] h-full bg-linear-to-tr from-primary-foreground/6 to-transparent" />
        <div className="absolute top-[36%] left-[35%] w-[40%] h-[60%] bg-linear-to-t from-orange-400/20 to-transparent blur-2xl" />
        <div className="absolute bottom-0 right-0 w-[25%] h-full bg-linear-to-tl from-secondary-foreground/15 to-transparent" />
      </div>

      {/* Navbar with scroll effect */}
      <div
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-linear-to-r from-primary-foreground/20 via-orange-400/65 to-secondary-foreground/20 backdrop-blur-md bg-background/80"
            : "top-2 pt-2"
        }`}
      >
        <Navbar />
      </div>

      {/* Banner */}
      <div className="relative z-10">
        <Banner />
      </div>
    </header>
  );
};

export default Header;
