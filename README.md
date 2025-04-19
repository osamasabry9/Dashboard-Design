
# React Dashboard Project

A React-based admin dashboard replicating the provided UI design with Header, Sidebar, Charts, Stat Cards, and more.

---

## Branches

- **master**  
  Production‑ready code.

- **develop**  
  Main integration branch for ongoing work.

- **feature/Dashboard**  
  Implements the **Dashboard** page and its components (charts, stat cards, top‑selling products).

- **feature/add-Header**  
  Adds the **Header** layout and all related sub‑components (Breadcrumb, SearchInput, Notification button, UserProfile).

- **feature/add-sidebar**  
  Adds the **Sidebar** layout and navigation items.

---

## File Structure

Below is the project’s `src/` directory tree (merged view from both screenshots):

```
src/
├── assets/                    # Static assets (images, icons, fonts)
│
├── components/
│   ├── dashboard/             # Dashboard page components
│   │   ├── ChartSection/
│   │   │   ├── ChannelsChart/
│   │   │   ├── RevenueChart/
│   │   │   ├── ChartSection.css
│   │   │   └── index.tsx
│   │   ├── SalesByAge/
│   │   ├── SalesByCountry/
│   │   ├── StatCards/
│   │   │   ├── StatCard/
│   │   │   ├── index.tsx
│   │   │   ├── StatCards.css
│   │   │   └── StatCards.test.tsx
│   │   └── TopSellingProducts/
│   │
│   ├── Header/                # Header and its sub‑components
│   │   ├── Breadcrumb/
│   │   ├── CustomNotificationButton/
│   │   ├── SearchInput/
│   │   └── UserProfile/
│   │
│   └── sidebar/               # Sidebar and its sub‑components
│       ├── Navigation/
│       ├── NavItem/
│       ├── SidebarHeader/
│       └── UserProfile/
│
├── data/
│   └── mockData.ts            # Mock data for development
│
├── layout/                    # Layout wrappers for Header/Sidebar
│   ├── Header/
│   │   ├── Header.css
│   │   ├── Header.test.tsx
│   │   └── index.tsx
│   │
│   └── sidebar/
│       ├── index.tsx
│       ├── sidebar.css
│       ├── Sidebar.test.tsx
│   ├── Layout.css
│   └── Layout.tsx
│
├── pages/
│   └── DashboardPage/
│       ├── DashboardPage.css
│       ├── DashboardPage.test.tsx
│       └── DashboardPage.tsx
│
├── types/                     # TypeScript definitions
│   ├── channelsData.type.ts
│   ├── header.types.ts
│   ├── index.ts
│   ├── productsData.type.ts
│   ├── salesCountry.type.ts
│   └── sidebar‑types.ts
│
├── utils/                     # Helper functions (formatters, custom label renderer)
│   ├── formatters.ts
│   └── renderCustomizedLabel.tsx
│
├── App.tsx                    # Root component with routes/layout
├── main.tsx                   # App entry point (Vite)
├── index.css                  # Global styles
├── vite-env.d.ts              # Vite TypeScript types
└── vite.config.ts             # Vite configuration
```

---

## Getting Started

1. **Install dependencies**  
   ```bash
   npm install
   ```
2. **Run locally**  
   ```bash
   npm run dev
   ```
3. **Build for production**  
   ```bash
   npm run build
   ```
---

