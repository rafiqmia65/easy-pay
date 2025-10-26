import React from "react";
import Section from "../shared/Section/Section";
import SecurityHeader from "./SecurityHeader/SecurityHeader";
import SecurityFeaturesGrid from "./SecurityFeaturesGrid/SecurityFeaturesGrid";

const Security = () => {
  return (
    <Section>
      <SecurityHeader></SecurityHeader>
      <SecurityFeaturesGrid></SecurityFeaturesGrid>
    </Section>
  );
};

export default Security;
