import React, { memo } from "react";
import { Menu } from "lucide-react";
import "./Layout.css";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const MenuIcon = memo(() => <Menu size={24} />);
MenuIcon.displayName = "MenuIcon";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleSidebarClose = React.useCallback(() => {
    setSidebarOpen(false);
  }, []);

  return (
    <div className="layout-container">
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />

      <div className="content-wrapper">
        <Header>
          <button
            className="menu-button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </Header>
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default React.memo(Layout);
