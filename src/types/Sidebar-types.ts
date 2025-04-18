import { ReactNode } from 'react';

// Main props for Sidebar component
export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Props for NavItem component
export interface NavItemProps {
  icon: ReactNode;
  label: string;
  badge?: string;
  hasSubmenu?: boolean;
  active?: boolean;
  onClick?: () => void;
}

// Props for SidebarHeader component
export interface SidebarHeaderProps {
  onClose: () => void;
}

// Props for SearchBar component
export interface SearchBarProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}



// Props for UserProfile component
export interface UserProfileProps {
  name: string;
  email: string;
  avatarUrl: string;
  onProfileClick?: () => void;
}
