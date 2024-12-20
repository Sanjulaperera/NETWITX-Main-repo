import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Code, Server, Zap } from "lucide-react";
import LandingText from "@/components/landing-text";
import { BackgroundBeamsDemo } from "@/components/Backgroundbeans";
import { BentoGridSecondDemo } from "@/components/Bentogrid";
import { FeaturesSectionDemo } from "@/components/feature-section";
import WebsiteTemplatesSection from "@/components/WebsitesTemplatesSection";
import { TrustedBy } from "@/components/trusted-by";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <LandingText />
              <p className="lg:text-xl md:text-l text-l text-gray-600 mb-8 mt-6">
                Netwitx provides all-in-one solutions for building, hosting, and
                managing your websites with ease.
              </p>
              <div className="relative z-10 flex justify-center space-x-4 pt-10">
                <Button
                  size="lg"
                  variant="default"
                  className="text-lg px-8 py-4 relative group"
                >
                  Get Started
                  <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                    →
                  </span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Link href="#features" aria-label="Scroll to features">
              <ArrowDown className="h-8 w-8 text-blue-600 animate-bounce" />
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Everything You Need to Succeed Online
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Code className="h-10 w-10 text-blue-600" />}
                title="Easy Website Builder"
                description="Create stunning websites with our intuitive drag-and-drop builder. No coding skills required."
              />
              <FeatureCard
                icon={<Server className="h-10 w-10 text-blue-600" />}
                title="Reliable Hosting"
                description="Enjoy fast, secure, and scalable hosting solutions tailored to your needs."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-blue-600" />}
                title="Performance Optimization"
                description="Boost your site's speed and SEO with our built-in optimization tools."
              />
            </div>
          </div>
        </section>

        {/* Trusted by Section */}
        <section>
          <TrustedBy  />
        </section>

        <section className="hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Choose professional design templates
            </h2>
            <BentoGridSecondDemo />

            <div className="flex justify-center space-x-4 pt-20 pb-10">
              <Button
                variant="default"
                className="text-lg px-8 py-4 relative group"
              >
                Browse Templates
                <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                  →
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Templates seection */}
        <section>
          <WebsiteTemplatesSection />
        </section>

        {/* Features Section */}

        <section>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 mt-10">
              Grow your website with powerful features
            </h2>
          </div>
          <FeaturesSectionDemo />
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Choose Your Perfect Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="Starter"
                price="$9.99"
                features={[
                  "1 Website",
                  "10 GB Storage",
                  "Free SSL Certificate",
                  "24/7 Support",
                ]}
              />
              <PricingCard
                title="Pro"
                price="$24.99"
                features={[
                  "5 Websites",
                  "50 GB Storage",
                  "Free Domain",
                  "SEO Tools",
                  "Priority Support",
                ]}
                highlighted
              />
              <PricingCard
                title="Enterprise"
                price="Custom"
                features={[
                  "Unlimited Websites",
                  "500 GB Storage",
                  "Advanced Security",
                  "Dedicated Support",
                  "Custom Solutions",
                ]}
              />
            </div>
          </div>
          <BackgroundBeamsDemo />
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied customers and bring your web projects
              to life.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 relative group"
            >
              Start Your Free Trial
              <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </div>
        </section>
          
          {/* Footer Section */}
        <section>
          <Footer />
        </section>
        
      </main>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({
  title,
  price,
  features,
  highlighted = false,
}: {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg ${
        highlighted ? "ring-2 ring-blue-600 transform scale-105" : ""
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-4">
        {price}
        <span className="text-sm font-normal">/month</span>
      </p>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="h-5 w-5 text-green-500 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${
          highlighted ? "bg-blue-600 hover:bg-blue-700 text-white" : ""
        }`}
      >
        Choose Plan
      </Button>
    </div>
  );
}
