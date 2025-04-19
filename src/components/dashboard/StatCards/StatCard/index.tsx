import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './StatCard.css';

export interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendText: string;
  icon: React.ReactNode;
  trendUp: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  trend,
  trendText,
  icon,
  trendUp
}) => {
  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <div>
          <h3 className="stat-card-title">{title}</h3>
          <p className="stat-card-value">{value}</p>
        </div>
        <div className="stat-card-icon-container">
          {icon}
        </div>
      </div>
      <div className="stat-card-trend">
        {trendUp ? (
          <TrendingUp className="trend-icon trend-up" />
        ) : (
          <TrendingDown className="trend-icon trend-down" />
        )}
        <span className={`trend-value ${trendUp ? 'trend-up' : 'trend-down'}`}>
          {trend}
        </span>
        <span className="trend-text">{trendText}</span>
      </div>
    </div>
  );
};

export default StatCard;
