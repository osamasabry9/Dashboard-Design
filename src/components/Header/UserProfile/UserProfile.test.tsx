import { render, screen, fireEvent } from '@testing-library/react';
import UserProfile from './index';

// Mock Lucide icons
jest.mock('lucide-react', () => ({
  ChevronDown: () => <div data-testid="chevron-down-icon" />
}));

describe('Header UserProfile Component', () => {
  test('renders avatar image', () => {
    render(<UserProfile avatarUrl="/test-avatar.jpg" />);
    expect(screen.getByAltText('User avatar')).toHaveAttribute('src', '/test-avatar.jpg');
  });

  test('renders chevron icon', () => {
    render(<UserProfile avatarUrl="/test-avatar.jpg" />);
    expect(screen.getByTestId('chevron-down-icon')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<UserProfile avatarUrl="/test-avatar.jpg" onClick={handleClick} />);

    fireEvent.click(screen.getByAltText('User avatar').closest('div')!);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
