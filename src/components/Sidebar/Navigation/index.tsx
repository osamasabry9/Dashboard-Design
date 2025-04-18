import {
  LayoutDashboard,
  Activity,
  CheckSquare,
  BarChart2,
  Package,
  FileText,
  Inbox
} from 'lucide-react';
import NavItem from '../NavItem';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">

      <div className="navigation__group">
        <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" hasSubmenu/>
        <NavItem icon={<BarChart2 size={20} />} label="Analytics" hasSubmenu />
        <NavItem icon={<Package size={20} />} label="Sales" hasSubmenu />
      </div>
      <div className="navigation__separator" />

      <span className="sidebar-nav__title">Projects</span>
      <div className="navigation__group">
        <NavItem icon={<CheckSquare size={20} />} label="Pages" badge="8" />
        <NavItem icon={<BarChart2 size={20} />} label="Applications" hasSubmenu />
        <NavItem icon={<Package size={20} />} label="E-commerce" hasSubmenu />
        <NavItem icon={<FileText size={20} />} label="Authentication" />
      </div>

      <div className="navigation__separator" />
      <div className="navigation__group">
      <NavItem icon={<Activity size={20} />} label="Activity" badge="10" />
        <NavItem icon={<Inbox size={20} />} label="Inbox" badge="2" />
      </div>
      
    </nav>
  );
};

export default Navigation;
