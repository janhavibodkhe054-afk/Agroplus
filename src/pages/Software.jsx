import React from "react";
import SoftwareHero from "../components/Software/SoftwareHero";
import InventoryManagement from "../components/Software/InventoryManagement";
import BillingAutomation from "../components/Software/BillingAutomation";
import FinancialReports from "../components/Software/FinancialReports";
import AnalyticsDashboard from "../components/Software/AnalyticsDashboard";
import WhyChooseAgroplus from "../components/Software/WhyChooseAgroplus";
import AgroplusBenefits from "../components/Software/AgroplusBenefits";
import AgroplusTestimonials from "../components/Software/AgroplusTestimonials";

const Software = () => {
  return (
    <div>
      <SoftwareHero />
      <InventoryManagement />
      <BillingAutomation />
      <FinancialReports />
      <AnalyticsDashboard />
      <WhyChooseAgroplus/>
      <AgroplusBenefits/>
      <AgroplusTestimonials/>
    </div>
  );
};

export default Software;
