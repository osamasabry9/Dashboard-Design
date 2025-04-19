
import { render, screen } from '@testing-library/react';
import { DashboardPage } from './DashboardPage';

// Mock the child components
jest.mock('../components/dashboard/StatCards/StatCards', () => ({
  StatCards: () => <div data-testid="stat-cards" />
}));

jest.mock('../components/dashboard/ChartSection/ChartSection', () => ({
  ChartSection: () => <div data-testid="chart-section" />
}));

jest.mock('../components/dashboard/SalesByAge/SalesByAge', () => ({
  SalesByAge: () => <div data-testid="sales-by-age" />
}));

jest.mock('../components/dashboard/SalesByCountry/SalesByCountry', () => ({
  SalesByCountry: () => <div data-testid="sales-by-country" />
}));

jest.mock('../components/dashboard/TopSellingProducts/TopSellingProducts', () => ({
  TopSellingProducts: () => <div data-testid="top-selling-products" />
}));

describe('DashboardPage', () => {
  it('renders all dashboard components', () => {
    render(<DashboardPage />);

    expect(screen.getByTestId('stat-cards')).toBeInTheDocument();
    expect(screen.getByTestId('chart-section')).toBeInTheDocument();
    expect(screen.getByTestId('sales-by-age')).toBeInTheDocument();
    expect(screen.getByTestId('sales-by-country')).toBeInTheDocument();
    expect(screen.getByTestId('top-selling-products')).toBeInTheDocument();
  });

  it('applies the correct layout classes', () => {
    render(<DashboardPage />);

    const container = screen.getByTestId('stat-cards').parentElement;
    expect(container).toHaveClass('dashboard-container');

    const grid = screen.getByTestId('sales-by-age').parentElement;
    expect(grid).toHaveClass('dashboard-grid');
  });
});
