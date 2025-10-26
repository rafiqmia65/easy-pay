import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Feature {
  text: string;
}

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  features: Feature[];
  buttonText: string;
  isAdvanced: boolean;
}

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  return (
    <Card
      className={`
        flex flex-col w-full max-w-sm border lg:max-w-none shadow-xl transition-all duration-300 hover:shadow-2xl
        ${
          plan.isAdvanced
            ? "bg-[#01081B] text-white border-primary border-2 shadow-secondary-foreground/35 transform"
            : "bg-background text-secondary"
        }
      `}
    >
      <CardHeader className=" pb-4">
        <CardTitle
          className={`text-2xl font-semibold ${
            plan.isAdvanced ? "text-white" : "text-secondary"
          }`}
        >
          {plan.name}
        </CardTitle>
        <CardDescription
          className={`mt-1 ${
            plan.isAdvanced ? "text-white" : "text-secondary"
          }`}
        >
          {plan.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col grow p-6 pt-0">
        <div
          className={`text-4xl font-extrabold flex items-baseline  mb-6 ${
            plan.isAdvanced ? "text-white" : "text-secondary"
          }`}
        >
          {plan.price.slice(0, 1)}
          {plan.price.slice(1)}
          <span
            className={`text-xl font-medium ml-1 opacity-70 ${
              plan.isAdvanced ? "text-white" : "text-secondary"
            }`}
          >
            /month
          </span>
        </div>

        <div className="relative mb-4">
          <hr
            className={`absolute z-10
      h-0.5 w-[80%]
      left-1/2 -translate-x-1/2
      rounded-full
      ${
        plan.isAdvanced
          ? "bg-linear-to-r from-transparent via-gray-700 to-transparent"
          : "bg-linear-to-r from-transparent via-gray-300 to-transparent"
      }`}
          />
        </div>

        <ul className="space-y-4 grow mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Image
                src={
                  plan.isAdvanced
                    ? "/Pricing/checkmark-circle-2.png" // image for advanced plan
                    : "/Pricing/checkmark-circle-1.png" // image for others
                }
                alt="check icon"
                width={28}
                height={28}
                className="shrink-0 mr-3 mt-1"
              />
              <span
                className={`${
                  plan.isAdvanced ? "text-white" : "text-secondary"
                }`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full py-6 text-base font-semibold border  transition-transform duration-300  ${
            plan.isAdvanced
              ? "bg-primary-foreground border-primary-foreground text-white hover:bg-primary/90"
              : "bg-transparent border border-primary hover:bg-primary hover:text-white"
          }`}
          variant={plan.isAdvanced ? "default" : "outline"}
        >
          {plan.buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
