
import React, { Suspense, lazy } from 'react';
import WaveLoader from '../components/Loading/WaveLoader';

import './DashboardPage.css';

const StatCards = lazy(() => import('../components/dashboard/StatCards'));
const ChartSection = lazy(() => import('../components/dashboard/ChartSection'));
const SalesByAge = lazy(() => import('../components/dashboard/SalesByAge'));
const SalesByCountry = lazy(() => import('../components/dashboard/SalesByCountry'));
const TopSellingProducts = lazy(() => import('../components/dashboard/TopSellingProducts'));

export const DashboardPage: React.FC = () => {
  return (
    <Suspense fallback={<WaveLoader />}>
      <div className="dashboard-container">
        <StatCards />
        <ChartSection />
        <div className="dashboard-grid">
          <SalesByAge />
          <SalesByCountry />
        </div>
        <TopSellingProducts />
      </div>
    </Suspense>
  );
};

export default DashboardPage;
