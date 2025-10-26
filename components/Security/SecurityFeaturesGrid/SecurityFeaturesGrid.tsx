import React from "react";
import FeatureCard from "./FeatureCard/FeatureCard";

const featuresData = [
  {
    dotColor: "/Security/Bollet1.png",
    title: "Two-factor authentication",
    description:
      "Two-factor authentication ensures added protection by using verification steps.",
  },
  {
    dotColor: "/Security/Bollet2.png",
    title: "Fraud detection and alerts",
    description:
      "Fraud detection safeguards your money, sending instant alerts for any activity.",
  },
  {
    dotColor: "/Security/Bollet3.png",
    title: "Transaction notifications",
    description:
      "Instant notifications for transaction keep you informed to manage your finances.",
  },
  {
    dotColor: "/Security/Bollet4.png",
    title: "Biometric access",
    description:
      "Easily and securely log in with biometric features, and facial recognition.",
  },
  {
    dotColor: "/Security/Bollet5.png",
    title: "End-to-end encryption",
    description:
      "By encryption, protecting your data from unauthorized access.",
  },
  {
    dotColor: "/Security/Bollet6.png",
    title: "24/7 Protection support",
    description:
      "Our dedicated team is available around the clock to help you.",
  },
];

const SecurityFeaturesGrid: React.FC = () => {
  return (
    <section className="mt-5 relative">
      <div
        className="rounded-2xl p-5"
        style={{
          // Custom subtle gradient background replicating the image's effect
          background:
            "linear-gradient(135deg, #fefefe 0%, #f7f7ff 50%, #fcf7ff 100%)",
          // Optional: Add a subtle border/shadow to enhance the card-like appearance
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                     gap-x-8 gap-y-12 relative"
        >
          {featuresData.map((feature, index) => (
            <div key={index} className="relative">
              <FeatureCard
                dotColor={feature.dotColor}
                title={feature.title}
                description={feature.description}
              />

              {/* MOBILE HORIZONTAL DIVIDER */}
              {index < featuresData.length - 1 && (
                <div
                  aria-hidden="true"
                  className="
                    block md:hidden
                    absolute z-10
                    h-0.5 w-[80%]
                    left-1/2 -translate-x-1/2
                    bg-linear-to-r from-transparent via-gray-300 to-transparent
                    rounded-full
                  "
                  style={{
                    top: `calc(100% + 20px)`,
                  }}
                />
              )}

              {/* DESKTOP VERTICAL DIVIDER */}
              {index % 3 !== 2 && index < featuresData.length - 1 && (
                <div
                  aria-hidden="true"
                  className="
                    hidden md:block
                    absolute z-10
                    top-1/2 -translate-y-1/2
                    w-0.5 h-[80%]
                    bg-linear-to-b from-transparent via-gray-300 to-transparent
                    rounded-full
                  "
                  style={{
                    left: "100%",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityFeaturesGrid;
