import React from "react";
import StarRating from "../StarRating/StarRating";
import Image from "next/image";
import Paragraph from "@/components/shared/Paragraph/Paragraph";
import { Card } from "@/components/ui/card";

export interface TestimonialCardProps {
  review: string;
  name: string;
  title: string;
  avatarUrl: string;
  isGradientBg: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  review,
  name,
  title,
  avatarUrl,
}) => {
  return (
    <Card
      className={`flex flex-col justify-between p-8 shrink-0 w-[85vw] sm:w-[48%] lg:w-[400px] bg-background transition-all duration-300 transform hover:shadow-lg`}
    >
      <div>
        <StarRating />
        <p className="mt-4 text-sm text-secondary leading-relaxed">{review}</p>
      </div>

      <div className="flex items-center mt-6">
        <Image
          src={avatarUrl}
          alt={name}
          width={52}
          height={52}
          className="w-10 h-10 rounded-full object-cover mr-4 ring-2 ring-purple-100"
        />
        <div>
          <Paragraph className="font-semibold text-primary">{name}</Paragraph>
          <p className="text-sm text-secondary">{title}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
