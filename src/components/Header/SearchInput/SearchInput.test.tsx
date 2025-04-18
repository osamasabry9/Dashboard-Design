import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './index';

// Mock Lucide icons
jest.mock('lucide-react', () => ({
  Search: () => <div data-testid="search-icon" />
}));

describe('SearchInput Component', () => {
  test('renders with placeholder', () => {
    render(<SearchInput placeholder="Test search" />);
    expect(screen.getByPlaceholderText('Test search')).toBeInTheDocument();
  });

  test('updates value on change', () => {
    render(<SearchInput />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'test query' } });
    expect(input).toHaveValue('test query');
  });

  test('calls onChange handler', () => {
    const handleChange = jest.fn();
    render(<SearchInput onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test query' } });

    expect(handleChange).toHaveBeenCalledWith('test query');
  });

  test('renders search icon', () => {
    render(<SearchInput />);
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
  });
});
