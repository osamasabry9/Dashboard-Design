import React from 'react';
import { LayoutDashboard, X } from 'lucide-react';
import { SidebarHeaderProps } from '../../../types';
import './SidebarHeader.css';

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ onClose }) => {
  return (
    <div className="sidebar-header">
      <div className="sidebar-header__logo-container">
        <div className="sidebar-header__logo">
          <LayoutDashboard className="sidebar-header__logo-icon" />
        </div>
        <span className="sidebar-header__title">Untitled UI</span>
      </div>
      <button
        onClick={onClose}
        className="sidebar-header__close-button"
        aria-label="Close sidebar"
      >
        <X size={24} />
      </button>
    </div>
  );
};

export default SidebarHeader;
