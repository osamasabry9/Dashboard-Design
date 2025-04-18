import React, { useEffect, memo } from 'react';
import SidebarHeader from '../../components/Sidebar/SidebarHeader';
import UserProfile from '../../components/Sidebar/UserProfile';
import Navigation from '../../components/Sidebar/Navigation';

import { SidebarProps } from './../../types';
import './Sidebar.css';

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  // Prevent scroll when sidebar is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div className="sidebar__overlay" onClick={onClose} />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <SidebarHeader onClose={onClose} />
        <div className="sidebar__user-container">
          <UserProfile
            name="Brooklyn Alice"
            email="alice@untitledui.com"
            avatarUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
            onProfileClick={() => console.log('Profile clicked')}
          />
        </div>

        <Navigation />

      </aside>
    </>
  );
};

export default memo(Sidebar);
