import React from "react";
import SoftwareHero from "../components/Software/SoftwareHero";
import InventoryManagement from "../components/Software/InventoryManagement";

import FinancialReports from "../components/Software/FinancialReports";
import AnalyticsDashboard from "../components/Software/AnalyticsDashboard";
import WhyChooseAgroplus from "../components/Software/WhyChooseAgroplus";
import AgroplusBenefits from "../components/Software/AgroplusBenefits";
import HeroSection from "../components/Software/HeroSection";

const Software = () => {
  return (
    <div>
      <HeroSection/>
      <SoftwareHero />
      <InventoryManagement />
      
      <FinancialReports />
      <AnalyticsDashboard />
      
      <AgroplusBenefits/>
      
    </div>
  );
};

export default Software;
