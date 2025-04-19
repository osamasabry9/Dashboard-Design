import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { revenueData } from '../../../../data/mockData';
import { formatYAxis } from '../../../../utils/formatters';
import './RevenueChart.css';

export const RevenueChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={revenueData}
        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#eee"
          vertical={false}
        />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          tick={{ fontSize: 12, fill: '#6B7280' }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={formatYAxis}
          tickMargin={10}
          tick={{ fontSize: 12, fill: '#6B7280' }}
        />
        <Tooltip
          contentStyle={{
            borderRadius: '8px',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            padding: '8px 12px'
          }}
          formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
          labelFormatter={(label) => `${label}`}
        />
        <Line
          type="monotone"
          dataKey="revenue"
          className="revenue-line"
          dot={false}
          activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2, fill: '#fff' }}
        />
        <Line
          type="monotone"
          dataKey="people"
          className="people-line"
          dot={false}
          activeDot={{ r: 6, stroke: '#9CA3AF', strokeWidth: 2, fill: '#fff' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
