import React from "react";
import SoftwareHero from "../components/Software/SoftwareHero";
import InventoryManagement from "../components/Software/InventoryManagement";
import BillingAutomation from "../components/Software/BillingAutomation";
import FinancialReports from "../components/Software/FinancialReports";
import AnalyticsDashboard from "../components/Software/AnalyticsDashboard";

const Software = () => {
  return (
    <div>
      <SoftwareHero />
      <InventoryManagement />
      <BillingAutomation />
      <FinancialReports />
      <AnalyticsDashboard />
    </div>
  );
};

export default Software;
