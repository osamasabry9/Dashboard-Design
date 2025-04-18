import { render, screen } from '@testing-library/react';
import Breadcrumb from './index';

describe('Breadcrumb Component', () => {
  const mockItems = [
    { label: 'Dashboard', href: '#' },
    { label: 'Sales', href: '#', active: true }
  ];

  test('renders all breadcrumb items', () => {
    render(<Breadcrumb items={mockItems} />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Sales')).toBeInTheDocument();
  });

  test('renders separator between items', () => {
    render(<Breadcrumb items={mockItems} />);

    expect(screen.getByText('/')).toBeInTheDocument();
  });

  test('applies active class to active item', () => {
    render(<Breadcrumb items={mockItems} />);

    const activeLink = screen.getByText('Sales').closest('a');
    expect(activeLink).toHaveClass('breadcrumb__link--active');

    const inactiveLink = screen.getByText('Dashboard').closest('a');
    expect(inactiveLink).not.toHaveClass('breadcrumb__link--active');
  });
});
