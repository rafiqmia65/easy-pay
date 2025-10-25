"use client";

import React from "react";
import StepCard from "./StepCard/StepCard";

// JSON data for steps
const stepsData = [
  {
    id: 1,
    step_number: "01",
    icon: "/HowItWorks/Icon/Step1.png",
    title: "Download Easy Pay",
    description:
      "Get the Easy Pay app today from the App Store or Google Play hassle free.",
  },
  {
    id: 2,
    step_number: "02",
    icon: "/HowItWorks/Icon/Step2.png",
    title: "Link your bank or card",
    description:
      "Easily connect your account in seconds with advanced security for peace of mind.",
  },
  {
    id: 3,
    step_number: "03",
    icon: "/HowItWorks/Icon/Step3.png",
    title: "Start paying",
    description:
      "Easily split bills, send money to friends, and make smooth online payments instantly.",
  },
];

const HowItWorksContent: React.FC = () => {
  return (
    <section className="py-10 mt-12 rounded-2xl bg-background">
      <div className="relative grid grid-cols-1 px-4 gap-10 md:grid-cols-3">
        {stepsData.map((step, index) => (
          <React.Fragment key={step.id}>
            <StepCard step={step} />

            {/* Render dividers only between steps */}
            {index < stepsData.length - 1 && (
              <React.Fragment>
                {/* 1. MOBILE HORIZONTAL DIVIDER (Visible on small screens, hidden on md+) */}
                <div
                  aria-hidden="true"
                  className="
                    block md:hidden 
                    absolute z-10 
                    h-0.5 w-[80%] 
                    left-1/2 -translate-x-1/2 
                    bg-gradient-to-r from-transparent via-gray-300 to-transparent 
                    rounded-full
                  "
                  // Position the divider in the middle of the gap-10 (40px)
                  style={{
                    top: `calc(${
                      (100 / stepsData.length) * (index + 1)
                    }% + 20px)`,
                  }}
                />

                {/* 2. DESKTOP/TABLET VERTICAL DIVIDER (Hidden on small screens, visible on md+) */}
                <div
                  aria-hidden="true"
                  className="
                    hidden md:block 
                    absolute z-10 
                    top-1/2 -translate-y-1/2 
                    w-0.5 h-[80%] 
                    bg-gradient-to-b from-transparent via-gray-300 to-transparent
                    rounded-full
                  "
                  // Position the divider between the grid columns
                  style={{
                    left: `calc(${
                      (100 / stepsData.length) * (index + 1)
                    }% - 5px)`,
                  }}
                />
              </React.Fragment>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksContent;
