"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Check,
  Server,
  Wand2,
  HeadphonesIcon,
  Lock,
} from "lucide-react";
import { ComparisonChart } from "./comparison-chart";

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Baisc",
    price: 9.97,
    description: "Perfect for personal websites and small projects.",
    features: [
      "2 website",
      "5GB storage",
      "Shared Hosting",
      "Access to free templates",
      "Standard Security",
      "24/7 support",
    ],
  },
  {
    name: "Growth",
    price: 24.97,
    description: "Ideal for businesses and growing websites.",
    features: [
      "10 websites",
      "20GB storage",
      "1 Free Solution",
      "VPS Hosting",
      "Access to premium templates",
      "Free SSL certificate",
      "24/7 Support",
      "Site analytics reports",
      "1 Year free domain",
    ],
  },
  {
    name: "Elite",
    price: 59.97,
    description: "For enterprises and high-traffic websites.",
    features: [
      "Unlimited websites",
      "100GB storage",
      "Access to all solutions",
      "Dedicated Hosting",
      "Custom UI/UX design",
      "Free SSL certificate",
      "24/7 priority support",
      "Detailed site analytics",
      "3 Year free domain",
    ],
  },
];

export default function WebsiteHostingPricing() {
  const [selectedPlan, setSelectedPlan] = useState("growth");
  const [showComparison, setShowComparison] = useState(false);

  const currentPlan =
    pricingPlans.find((plan) => plan.name.toLowerCase() === selectedPlan) ||
    pricingPlans[1];

  return (
    <div className="min-h-screen bg-white text-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">
          Our Hosting Plans
        </h1>
        <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Choose a hosting plan:
            </h2>
            <div className="bg-blue-100 p-4 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-blue-800">
                <span className="font-semibold mb-2 md:mb-0">
                  All plans include:
                </span>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <Lock className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>100% Security</span>
                  </div>
                  <div className="flex items-center">
                    <Server className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>Reliable web hosting</span>
                  </div>
                  <div className="flex items-center">
                    <Wand2 className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>AI creation tools</span>
                  </div>
                  <div className="flex items-center">
                    <HeadphonesIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>24/7 customer care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-8">
              <Tabs
                value={selectedPlan}
                onValueChange={setSelectedPlan}
                defaultValue="growth"
                className="w-full"
              >
                <TabsList className="grid grid-cols-3 bg-white">
                  {pricingPlans.map((plan) => (
                    <TabsTrigger
                      key={plan.name.toLowerCase()}
                      value={plan.name.toLowerCase()}
                      className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800"
                    >
                      {plan.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              <div className="space-y-6">
                <h3 className="text-xl font-medium text-blue-800">
                  {currentPlan.name} plan details:
                </h3>
                <div className="space-y-4 text-slate-700">
                  <p>{currentPlan.description}</p>
                  <ul className="space-y-3">
                    {currentPlan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-5 w-5 flex-shrink-0 text-blue-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-blue-800">
                  {currentPlan.name} plan
                </h3>
                <div className="space-y-1">
                  <div className="text-slate-600">Starting at</div>
                  <div className="text-5xl font-bold text-blue-800">
                    ${currentPlan.price}
                    <span className="text-xl font-normal">/mo</span>
                  </div>
                </div>
              </div>

              <Button
                className="w-full text-lg py-6 bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                Get started
              </Button>

              <Button
                variant="link"
                className="w-full text-blue-600 hover:text-blue-700"
                onClick={() => setShowComparison(!showComparison)}
              >
                {showComparison
                  ? "Hide comparison chart"
                  : "View comparison chart"}{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-sm text-slate-600">
                *Our 99.9% uptime guarantee ensures your website is always
                accessible. For more details about packages, please refer to{" "}
                <Link href="/plans" className="hover:text-blue-800 underline">
                  Pricing
                </Link>{" "}
                .
              </p>
            </div>
          </div>

          {showComparison && (
            <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">
                Plan Comparison
              </h3>
              <div className="max-h-[600px] overflow-y-auto">
                <ComparisonChart />
              </div>
            </div>
          )}
        </div>
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="text-blue-600 hover:text-blue-700 border-blue-200 hover:bg-blue-50"
            asChild
          >
            <a href="/plans">See All Pricing Options</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
