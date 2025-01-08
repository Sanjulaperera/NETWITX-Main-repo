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
    starter: "2GB",
    growth: "10GB",
    elite: "100GB",
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
    feature: "Customer Support",
    starter: "24/7 Standard",
    growth: "24/7 Standard",
    elite: "24/7 Priority",
  },
  {
    feature: "Free Domain",
    starter: false,
    growth: "1 Year",
    elite: "3 Years",
  },
];

