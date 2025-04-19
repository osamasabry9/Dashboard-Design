import { render, screen } from '@testing-library/react';
import StatCard from '.';

// Mock Lucide icons
jest.mock('lucide-react', () => ({
  TrendingUp: () => <div data-testid="trending-up-icon" />,
  TrendingDown: () => <div data-testid="trending-down-icon" />
}));

describe('StatCard', () => {
  const mockProps = {
    title: 'Test Title',
    value: '$1,000',
    trend: '+10%',
    trendText: 'since last week',
    icon: <div data-testid="test-icon" />,
    trendUp: true
  };

  it('renders card with correct content', () => {
    render(<StatCard {...mockProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('$1,000')).toBeInTheDocument();
    expect(screen.getByText('+10%')).toBeInTheDocument();
    expect(screen.getByText('since last week')).toBeInTheDocument();
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('shows trending up icon when trendUp is true', () => {
    render(<StatCard {...mockProps} trendUp={true} />);

    expect(screen.getByTestId('trending-up-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('trending-down-icon')).not.toBeInTheDocument();

    const trendValue = screen.getByText('+10%');
    expect(trendValue).toHaveClass('trend-up');
    expect(trendValue).not.toHaveClass('trend-down');
  });

  it('shows trending down icon when trendUp is false', () => {
    render(<StatCard {...mockProps} trendUp={false} />);

    expect(screen.queryByTestId('trending-up-icon')).not.toBeInTheDocument();
    expect(screen.getByTestId('trending-down-icon')).toBeInTheDocument();

    const trendValue = screen.getByText('+10%');
    expect(trendValue).toHaveClass('trend-down');
    expect(trendValue).not.toHaveClass('trend-up');
  });
});
