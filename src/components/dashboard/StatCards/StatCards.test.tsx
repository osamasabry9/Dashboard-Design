import { render, screen } from '@testing-library/react';
import StatCards  from '.';
import  StatCard  from './StatCard';
// Mock the StatCard component
jest.mock('./StatCard', () => ({
  StatCard: jest.fn(() => <div data-testid="stat-card" />)
}));

describe('StatCards', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders three StatCard components', () => {
    render(<StatCards />);

    expect(screen.getAllByTestId('stat-card')).toHaveLength(3);
  });

  it('passes correct props to each StatCard', () => {
    render(<StatCards />);

    const mockStatCard = StatCard as jest.Mock;

    // First card - Sales
    expect(mockStatCard.mock.calls[0][0]).toEqual(
      expect.objectContaining({
        title: 'Sales',
        value: '$239,220',
        trend: '+15%',
        trendText: 'since last month',
        trendUp: true
      })
    );

    // Second card - Customers
    expect(mockStatCard.mock.calls[1][0]).toEqual(
      expect.objectContaining({
        title: 'Customers',
        value: '9,300',
        trend: '+10%',
        trendText: 'since last month',
        trendUp: true
      })
    );

    // Third card - Avg. Revenue
    expect(mockStatCard.mock.calls[2][0]).toEqual(
      expect.objectContaining({
        title: 'Avg. Revenue',
        value: '$1,200',
        trend: '+8%',
        trendText: 'since last month',
        trendUp: true
      })
    );
  });

  it('applies the correct grid layout class', () => {
    render(<StatCards />);

    const gridContainer = screen.getAllByTestId('stat-card')[0].parentElement;
    expect(gridContainer).toHaveClass('stat-cards-grid');
  });
});
