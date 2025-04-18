import { ReactNode } from 'react';

// Main props for Header component
export interface HeaderProps {
  children?: ReactNode;
}

// Props for Breadcrumb component
export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

// Props for SearchInput component
export interface SearchInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

// Props for NotificationButton component
export interface CustomNotificationButtonProps {
  Icon?: ReactNode;
  hasNotifications?: boolean;
  onClick?: () => void;
}

// Props for UserProfile component (Header version)
export interface HeaderUserProfileProps {
  avatarUrl: string;
  onClick?: () => void;
}
