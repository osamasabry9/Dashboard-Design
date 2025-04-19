import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { ageData } from '../../../data/mockData';
import './SalesByAge.css';

export const SalesByAge: React.FC = () => {
  return (
    <div className="sales-card">
      <h2 className="sales-title">Sales by Age</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ageData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              width={45}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <Tooltip
              formatter={(value: number) => [`${value}%`, 'Percentage']}
              contentStyle={{
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                padding: '8px 12px'
              }}
            />
            <Bar
              dataKey="value"
              className="age-bar"
              radius={[0, 4, 4, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesByAge;
