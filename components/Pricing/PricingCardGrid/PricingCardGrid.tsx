import React from "react";
import PricingCard from "./PricingCard/PricingCard";

const pricingPlans = [
  {
    name: "Free Plan",
    description: "Free for personal payments.",
    price: "$0",
    features: [
      { text: "Up to 100 transactions per month" },
      { text: "Basic proud protection" },
      { text: "Email support" },
    ],
    buttonText: "Get Free Plan",
    isAdvanced: false,
  },
  {
    name: "Advanced",
    description: "Minimal fees for advanced transactions",
    price: "$19",
    features: [
      { text: "Up to 1000 transactions per month" },
      { text: "Advanced proud protection" },
      { text: "Detailed transaction reports" },
      { text: "Priority email & chat support" },
    ],
    buttonText: "Get Advanced Plan",
    isAdvanced: true,
  },
  {
    name: "Business",
    description: "Premium business transactions",
    price: "$29",
    features: [
      { text: "Unlimited transactions per month" },
      { text: "Premium proud protection" },
      { text: "Detailed transaction reports" },
      { text: "Priority email & chat support" },
    ],
    buttonText: "Get Business Plan",
    isAdvanced: false,
  },
];

const PricingCardGrid: React.FC = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingCardGrid;
