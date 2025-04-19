import React from 'react';
import { Users, DollarSign } from 'lucide-react';
import './StatCards.css';
import StatCard from './StatCard';

export const StatCards: React.FC = () => {
  return (
    <div className="stat-cards-grid">
      <StatCard
        title="Sales"
        value="$239,220"
        trend="+15%"
        trendText="since last month"
        icon={<DollarSign className="icon-blue" />}
        trendUp
      />
      <StatCard
        title="Customers"
        value="9,300"
        trend="+10%"
        trendText="since last month"
        icon={<Users className="icon-green" />}
        trendUp
      />
      <StatCard
        title="Avg. Revenue"
        value="$1,200"
        trend="+8%"
        trendText="since last month"
        icon={<DollarSign className="icon-purple" />}
        trendUp
      />
    </div>
  );
};

export default StatCards;
