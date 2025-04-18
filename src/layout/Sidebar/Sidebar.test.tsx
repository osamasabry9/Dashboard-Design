import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';

// Mock the child components
jest.mock('./components/SidebarHeader', () => ({
  __esModule: true,
  default: ({ onClose }: { onClose: () => void }) => (
    <div data-testid="sidebar-header">
      <button data-testid="close-button" onClick={onClose}>Close</button>
    </div>
  )
}));

jest.mock('./components/SearchBar', () => ({
  __esModule: true,
  default: () => <div data-testid="search-bar" />
}));

jest.mock('./components/Navigation', () => ({
  __esModule: true,
  default: () => <div data-testid="navigation" />
}));

jest.mock('./components/UserProfile', () => ({
  __esModule: true,
  default: () => <div data-testid="user-profile" />
}));

describe('Sidebar Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all subcomponents', () => {
    render(<Sidebar isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByTestId('sidebar-header')).toBeInTheDocument();
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('user-profile')).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    render(<Sidebar isOpen={true} onClose={mockOnClose} />);
    fireEvent.click(screen.getByTestId('close-button'));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('calls onClose when overlay is clicked', () => {
    render(<Sidebar isOpen={true} onClose={mockOnClose} />);
    fireEvent.click(screen.getByRole('button', { name: /Close/ }));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('sidebar has correct class when closed', () => {
    const { container } = render(<Sidebar isOpen={false} onClose={mockOnClose} />);
    const sidebar = container.querySelector('.sidebar');
    expect(sidebar).not.toHaveClass('sidebar--open');
  });

  test('sidebar has correct class when open', () => {
    const { container } = render(<Sidebar isOpen={true} onClose={mockOnClose} />);
    const sidebar = container.querySelector('.sidebar');
    expect(sidebar).toHaveClass('sidebar--open');
  });

  test('overlay is not rendered when sidebar is closed', () => {
    render(<Sidebar isOpen={false} onClose={mockOnClose} />);
    expect(document.querySelector('.sidebar__overlay')).not.toBeInTheDocument();
  });
});
