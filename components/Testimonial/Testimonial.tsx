import React from "react";
import { testimonialData } from "./testimonialData";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import TestimonialIntro from "./TestimonialIntro/TestimonialIntro";

const Testimonial: React.FC = () => {
  return (
    <section className="py-16 bg-accent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-12 lg:space-y-0">
        {/* Left Content */}
        <TestimonialIntro />

        {/* Right Content */}
        <div className="lg:w-6/12 relative rounded-xl overflow-visible">
          {/* Gradient overlay */}
          <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-secondary-foreground/25 to-transparent" />

          <div className="flex space-x-6 pb-4 overflow-x-scroll no-scrollbar lg:overflow-visible relative z-10">
            {testimonialData.map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
