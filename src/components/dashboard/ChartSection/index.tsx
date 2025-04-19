import React from 'react';
import { ChannelsChart } from './ChannelsChart';
import RevenueChart from './RevenueChart';
import './ChartSection.css';

export const ChartSection: React.FC = () => {
  return (
    <div className="chart-section-grid">
      <div className="chart-card">
        <div className="chart-header">
          <h2 className="chart-title">Channels</h2>
          <div className="chart-date-range">
            <span className="date-range-text">May 6 - Jun 4</span>
          </div>
        </div>
        <div className="chart-container">
          <ChannelsChart />
        </div>
        <div className="chart-footer">
          <div className="chart-summary">
            <span className="summary-value">$4,289,000</span> total orders over last 30 days
          </div>
          <button className="view-report-button">
            View report
          </button>
        </div>
      </div>

      <div className="chart-card">
        <div className="chart-header">
          <h2 className="chart-title">Revenue</h2>
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-marker revenue-marker"></div>
              <span className="legend-text">Revenue</span>
            </div>
            <div className="legend-item">
              <div className="legend-marker people-marker"></div>
              <span className="legend-text">People Rate</span>
            </div>
          </div>
        </div>
        <div className="chart-container">
          <RevenueChart />
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
