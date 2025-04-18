import { render, screen } from '@testing-library/react';
import Header from './index';

// Mock child components
jest.mock('./components/Breadcrumb', () => ({
  __esModule: true,
  default: () => <div data-testid="breadcrumb" />
}));

jest.mock('./components/SearchInput', () => ({
  __esModule: true,
  default: () => <div data-testid="search-input" />
}));

jest.mock('./components/NotificationButton', () => ({
  __esModule: true,
  default: () => <div data-testid="notification-button" />
}));

jest.mock('./components/UserProfile', () => ({
  __esModule: true,
  default: () => <div data-testid="user-profile" />
}));

describe('Header Component', () => {
  test('renders all subcomponents', () => {
    render(<Header />);

    expect(screen.getByTestId('breadcrumb')).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('notification-button')).toBeInTheDocument();
    expect(screen.getByTestId('user-profile')).toBeInTheDocument();
  });

  test('renders children when provided', () => {
    render(
      <Header>
        <button data-testid="menu-button">Menu</button>
      </Header>
    );

    expect(screen.getByTestId('menu-button')).toBeInTheDocument();
  });

  test('has the correct structure', () => {
    const { container } = render(<Header />);

    expect(container.querySelector('.header')).toBeInTheDocument();
    expect(container.querySelector('.header__container')).toBeInTheDocument();
    expect(container.querySelector('.header__left')).toBeInTheDocument();
    expect(container.querySelector('.header__right')).toBeInTheDocument();
  });
});
