// src/components/Testimonial/StarRating.tsx
import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  count?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ count = 5 }) => (
  <div className="flex space-x-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

export default StarRating;
