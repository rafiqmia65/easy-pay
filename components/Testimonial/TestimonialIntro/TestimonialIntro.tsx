import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SmallHeading from "@/components/shared/SmallHeading/SmallHeading";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import Paragraph from "@/components/shared/Paragraph/Paragraph";

const TestimonialIntro: React.FC = () => {
  return (
    <div className="lg:w-5/12">
      <SmallHeading>TESTIMONIAL</SmallHeading>
      <SectionHeading>
        We&apos;ve built trust with <br />
        reviews from real users
      </SectionHeading>
      <Paragraph className="mt-6 max-w-[460px]">
        Boost your credibility by featuring genuine testimonials from real
        users, showcasing their positive experiences and satisfaction with Monks
        Pay services.
      </Paragraph>

      {/* Navigation Arrows */}
      <div className="flex space-x-3 mt-8">
        <button
          className="p-3 border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-100 transition duration-150 shadow-md"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          className="p-3 bg-gray-900 rounded-full text-white hover:bg-gray-700 transition duration-150 shadow-md"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialIntro;
