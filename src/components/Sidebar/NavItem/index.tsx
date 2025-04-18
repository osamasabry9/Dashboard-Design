import React, { memo } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavItemProps } from '../../../types';
import './NavItem.css';

const NavItem: React.FC<NavItemProps> = memo(({
  icon,
  label,
  badge,
  hasSubmenu = false,
  active = false,
  onClick
}) => {
  return (
    <a
      href="#"
      className={`nav-item ${active ? 'nav-item--active' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
    >
      <span className="nav-item__icon">{icon}</span>
      <span className="nav-item__label">{label}</span>
      {badge && <span className="nav-item__badge">{badge}</span>}
      {hasSubmenu && <ChevronDown size={16} className="nav-item__chevron" />}
    </a>
  );
});

NavItem.displayName = 'NavItem';

export default NavItem;
