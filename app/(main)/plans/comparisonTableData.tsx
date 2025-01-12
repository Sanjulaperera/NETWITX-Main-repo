export interface ComparisonItem {
  feature: string;
  starter: string | boolean;
  growth: string | boolean;
  elite: string | boolean;
}

export const comparisonTableData: ComparisonItem[] = [
  {
    feature: "Website Pages",
    starter: "1",
    growth: "5",
    elite: "Unlimited",
  },
  {
    feature: "Hosting Type",
    starter: "Shared",
    growth: "VPS",
    elite: "Dedicated",
  },
  {
    feature: "Storage",
    starter: "5GB",
    growth: "20GB",
    elite: "100GB",
  },
  {
    feature: "Website Templates",
    starter: "Free",
    growth: "Premium",
    elite: "Customizable",
  },
  {
    feature: "Solutions",
    starter: false,
    growth: "1 Free Solution",
    elite: "All Solutions",
  },
  {
    feature: "Free SSL Certificate",
    starter: false,
    growth: true,
    elite: true,
  },
  {
    feature: "Security",
    starter: "Standard",
    growth: "High",
    elite: "Expert",
  },
  {
    feature: "Site Analysis",
    starter: false,
    growth: "Basic Report",
    elite: "Detailed Analysis",
  },
  {
    feature: "Free Domain",
    starter: false,
    growth: "1 Year",
    elite: "3 Years",
  },
  {
    feature: "Custom Email",
    starter: false,
    growth: "1 Account",
    elite: "5 Accounts",
  },
  {
    feature: "Netwitx Ads",
    starter: false,
    growth: false,
    elite: "Free Credits",
  },
  {
    feature: "Customer Support",
    starter: "24/7 Standard",
    growth: "24/7 Standard",
    elite: "24/7 Priority",
  },
];

