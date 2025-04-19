import { TChannelsData, TProductData, TSalesCountryData } from "../types";

// Statistics Card Data
export const statsData = [
  {
    id: 1,
    title: 'Sales',
    value: '$239,220',
    trend: '+15%',
    trendText: 'since last month',
    trendUp: true,
  },
  {
    id: 2,
    title: 'Customers',
    value: '9,300',
    trend: '+10%',
    trendText: 'since last month',
    trendUp: true,
  },
  {
    id: 3,
    title: 'Avg. Revenue',
    value: '$1,200',
    trend: '+8%',
    trendText: 'since last month',
    trendUp: true,
  },
];

// Channels Chart Data
export const channelsData : TChannelsData[] = [
  { name: 'Conversion', value: 45, color: '#3B82F6' },
  { name: 'Organic', value: 30, color: '#10B981' },
  { name: 'Direct', value: 15, color: '#F43F5E' },
  { name: 'Referral', value: 10, color: '#8B5CF6' },
];

// Revenue Chart Data
export const revenueData = [
  { name: 'Jan', revenue: 30000, people: 10000 },
  { name: 'Feb', revenue: 25000, people: 8000 },
  { name: 'Mar', revenue: 35000, people: 12000 },
  { name: 'Apr', revenue: 45000, people: 15000 },
  { name: 'May', revenue: 40000, people: 13000 },
  { name: 'Jun', revenue: 50000, people: 16000 },
  { name: 'Jul', revenue: 60000, people: 18000 },
  { name: 'Aug', revenue: 65000, people: 20000 },
  { name: 'Sep', revenue: 70000, people: 22000 },
];

// Sales by Age Data
export const ageData = [
  { name: '18-24', value: 40 },
  { name: '25-34', value: 65 },
  { name: '35-44', value: 80 },
  { name: '45-54', value: 100 },
  { name: '55-64', value: 55 },
  { name: '65+', value: 30 },
];

// Sales by Country Data
export const countriesData : TSalesCountryData[] = [
  {
    id: 1,
    country: 'United States',
    flag: '🇺🇸',
    orders: 2500,
    percent: '47.5%',
    value: '$59,800'
  },
  {
    id: 2,
    country: 'United Kingdom',
    flag: '🇬🇧',
    orders: 1200,
    percent: '39.2%',
    value: '$42,400'
  },
  {
    id: 3,
    country: 'Germany',
    flag: '🇩🇪',
    orders: 750,
    percent: '26.4%',
    value: '$31,500'
  },
  {
    id: 4,
    country: 'Canada',
    flag: '🇨🇦',
    orders: 500,
    percent: '20.5%',
    value: '$25,700'
  },
  {
    id: 5,
    country: 'France',
    flag: '🇫🇷',
    orders: 450,
    percent: '18.3%',
    value: '$20,600'
  },
  {
    id: 6,
    country: 'Japan',
    flag: '🇯🇵',
    orders: 400,
    percent: '16.7%',
    value: '$19,200'
  },
  {
    id: 7,
    country: 'Australia',
    flag: '🇦🇺',
    orders: 300,
    percent: '10.9%',
    value: '$15,800'
  }
];

// Top Selling Products Data
export const productsData : TProductData[] = [
  {
    id: 1,
    name: 'Nike Air Maxima',
    description: '#DJ321 in Sports',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=100',
    sold: 532,
    price: '$89.99'
  },
  {
    id: 2,
    name: 'Premium Notebook',
    description: '#NB720 in Office',
    image: 'https://images.pexels.com/photos/6372/coffee-smartphone-desk-pen.jpg?auto=compress&cs=tinysrgb&w=100',
    sold: 417,
    price: '$24.99'
  },
  {
    id: 3,
    name: 'Smart Watch V2',
    description: '#WS110 in Electronics',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=100',
    sold: 389,
    price: '$199.99'
  }
];
