"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Clock,
  HeadphonesIcon,
  ArrowUpCircle,
  Shield,
  Download,
  Check,
} from "lucide-react";
import { Header } from "@/components/header";

export default function WebHostingPage() {
  return (
    <main>
      <section>
        <Header />
      </section>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-500 to-emerald-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Reliable web hosting you can count on.
              </h1>
              <p className="text-xl mb-8">
                Fast, secure, and scalable hosting solutions for developers and
                businesses.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="#features">
                  Get Started
                  <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </Button>
              <div className="mt-12">
                <Image
                  src="https://uploadthing.com/f/3avCIVBvIockyCK1opkMtCyAKSs9bfwRWJkIXZrlULjx6Ymd"
                  alt="Web Hosting Illustration"
                  width={500}
                  height={300}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section (One item per row) */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Hosting</h2>
          <div className="space-y-6">
            {[
              { 
                title: "Lightning Fast",
                icon: Zap,
                subFeatures: [
                  { title: "SSD Storage", description: "Ultra-fast solid-state drives" },
                  { title: "CDN Integration", description: "Global content delivery network" },
                  { title: "Caching", description: "Advanced caching mechanisms" },
                ],
              },
              { 
                title: "99.9% Uptime",
                icon: Clock,
                subFeatures: [
                  { title: "Redundant Systems", description: "Multiple backup systems" },
                  { title: "Load Balancing", description: "Distribute traffic across servers" },
                  { title: "Real-time Monitoring", description: "Constant system surveillance" },
                ],
              },
              { 
                title: "24/7 Support",
                icon: HeadphonesIcon,
                subFeatures: [
                  { title: "Live Chat", description: "Instant support via chat" },
                  { title: "Ticket System", description: "Detailed issue tracking" },
                  { title: "Knowledge Base", description: "Comprehensive guides and FAQs" },
                ],
              },
              { 
                title: "Easy Scalability",
                icon: ArrowUpCircle,
                subFeatures: [
                  { title: "One-Click Upgrades", description: "Easily upgrade your plan" },
                  { title: "Resource Allocation", description: "Flexible CPU and RAM allocation" },
                  { title: "Auto-scaling", description: "Automatic resource adjustment" },
                ],
              },
              { 
                title: "Secure by Default",
                icon: Shield,
                subFeatures: [
                  { title: "Free SSL", description: "Automatic HTTPS encryption" },
                  { title: "Regular Updates", description: "Continuous security patches" },
                  { title: "Firewall Protection", description: "Advanced firewall system" },
                ],
              },
              { 
                title: "One-Click Installs",
                icon: Download,
                subFeatures: [
                  { title: "CMS Installs", description: "Easy setup for popular CMS" },
                  { title: "E-commerce Solutions", description: "Quick deployment of shops" },
                  { title: "Developer Tools", description: "Instant setup of frameworks" },
                ],
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full text-left p-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-green-500"
                  onClick={(e) => {
                    const content = e.currentTarget.nextElementSibling;
                    if (content) {
                      content.classList.toggle('hidden');
                    }
                  }}
                >
                  <span className="flex items-center">
                    <feature.icon className="w-6 h-6 mr-2 text-green-600" />
                    <span className="font-semibold">{feature.title}</span>
                  </span>
                  <ArrowUpCircle className="w-5 h-5 transform transition-transform duration-200" />
                </button>
                <div className="hidden p-4 bg-gray-50">
                  <ul className="space-y-2">
                    {feature.subFeatures.map((subFeature, subIndex) => (
                      <li key={subIndex} className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">{subFeature.title}</h4>
                          <p className="text-sm text-gray-600">{subFeature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Performance Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">
                  Unmatched Performance
                </h2>
                <p className="text-lg mb-6">
                  Experience lightning-fast load times and seamless scalability
                  with our cutting-edge infrastructure.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-green-600" />
                    <span>Optimized server configurations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-green-600" />
                    <span>Global CDN for faster content delivery</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-green-600" />
                    <span>Advanced caching mechanisms</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://uploadthing.com/f/3avCIVBvIock7BjOhHnKiU4RYa6dgKqpkWuEexlJMt7SVf1Q"
                  alt="Performance Graph"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Grid Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Experience the Difference</h2>
          <div className="grid gap-8">
            {/* First row: 2 and 1 */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 relative overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src="https://uploadthing.com/f/3avCIVBvIockoguAAtZ3RNmbYZE7l4LrPQpV9KSWdjcFhzTi"
                  alt="Server Infrastructure"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent group-hover:from-black/70 group-hover:to-black/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-bold">State-of-the-art Infrastructure</h3>
                    <p className="text-white mt-2">Cutting-edge technology for optimal performance</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src="https://uploadthing.com/f/3avCIVBvIockDO9vRU2o0nd4ma9UZBEQJKYvIgOTuAXMoWkt"
                  alt="Security Features"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent group-hover:from-black/70 group-hover:to-black/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-bold">Advanced Security</h3>
                    <p className="text-white mt-2">Protect your data with our robust security measures</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Second row: 1 and 2 */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src="https://uploadthing.com/f/3avCIVBvIockw3leVz9oI0kwXa2BPpbCsMF7Dq8ezdYLhl6n"
                  alt="24/7 Support"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent group-hover:from-black/70 group-hover:to-black/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-bold">24/7 Expert Support</h3>
                    <p className="text-white mt-2">Round-the-clock assistance for your peace of mind</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 relative overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src="https://uploadthing.com/f/3avCIVBvIockoguAAtZ3RNmbYZE7l4LrPQpV9KSWdjcFhzTi"
                  alt="Scalability"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent group-hover:from-black/70 group-hover:to-black/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-bold">Unlimited Scalability</h3>
                    <p className="text-white mt-2">Grow your business without limitations</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Third row: 1, 1, 1 */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src="https://uploadthing.com/f/3avCIVBvIockDO9vRU2o0nd4ma9UZBEQJKYvIgOTuAXMoWkt"
                  alt="One-Click Installs"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent group-hover:from-black/70 group-hover:to-black/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-bold">One-Click Installs</h3>
                    <p className="text-white mt-2">Effortlessly set up your favorite applications</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src="https://uploadthing.com/f/3avCIVBvIockw3leVz9oI0kwXa2BPpbCsMF7Dq8ezdYLhl6n"
                  alt="Global CDN"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent group-hover:from-black/70 group-hover:to-black/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-bold">Global CDN</h3>
                    <p className="text-white mt-2">Lightning-fast content delivery worldwide</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src="https://uploadthing.com/f/3avCIVBvIockoguAAtZ3RNmbYZE7l4LrPQpV9KSWdjcFhzTi"
                  alt="Green Hosting"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent group-hover:from-black/70 group-hover:to-black/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-bold">Green Hosting</h3>
                    <p className="text-white mt-2">Eco-friendly solutions for a sustainable future</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Call to Action Section */}
        <section className="bg-green-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied customers and experience our top-notch
              hosting today.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#features">Explore Features</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
