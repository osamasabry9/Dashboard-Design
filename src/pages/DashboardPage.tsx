import React from 'react';

import StatCards from '../components/dashboard/StatCards';
import { ChartSection } from '../components/dashboard/ChartSection';
import SalesByAge from '../components/dashboard/SalesByAge';
import SalesByCountry from '../components/dashboard/SalesByCountry';
import TopSellingProducts from '../components/dashboard/TopSellingProducts';

import './DashboardPage.css';

export const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-container">
      <StatCards />
      <ChartSection />
      <div className="dashboard-grid">
        <SalesByAge />
        <SalesByCountry />
      </div>
      <TopSellingProducts />
    </div>
  );
};

export default DashboardPage;
