"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Check,
  X,
  Globe,
  Server,
  Shield,
  BarChart,
  Headphones,
  HardDrive,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { comparisonTableData, ComparisonItem } from "./comparisonTableData";
import { motion } from "framer-motion";
import BoxReveal from "@/components/ui/box-reveal";
import BookACall from "@/components/BookaCall";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { MainNav } from "@/components/mainHeader";

const PricingPage: React.FC = () => {
  const testVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <MainNav />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
        <main className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <h1 className="text-5xl font-bold tracking-tight mb-6">
                <BoxReveal boxColor={"#dcfce7"} duration={0.5}>
                  Website and Hosting Packages
                </BoxReveal>
              </h1>
              <motion.div
                variants={testVariants}
                initial="hidden"
                animate="visible"
              >
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Choose the perfect package for your online presence. From
                  beginners to enterprises, we&apos;ve got you covered.
                </p>
                <Link href="#compare">
                  <Button className="rounded-full bg-green-600 text-white hover:bg-green-700 px-8 py-3 text-lg font-semibold transition-colors duration-300">
                    Compare Plans
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Pricing Cards */}
            <section id="pricing-cards">
              <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 items-center">
                {/* Starter Package */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Card className="relative overflow-hidden rounded-3xl shadow-xl">
                    <CardContent className="p-8">
                      <div className="mb-8">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
                          Starter
                        </h3>
                        <p className="text-gray-900 mb-6">
                          Perfect for personal websites and small projects.
                        </p>
                        <div className="flex items-baseline">
                          <span className="text-5xl font-extrabold">$9.99</span>
                          <span className="text-gray-600 ml-1">/ month</span>
                        </div>
                      </div>
                      <div className="w-full mb-8">
                        <BookACall />
                      </div>
                      <div className="space-y-4">
                        <p className="text-sm font-medium text-gray-900 mb-4">
                          Package includes:
                        </p>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            1 Page Website
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            Shared Hosting
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            24/7 Customer Support
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            Standard Security
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            2GB Storage
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            Free SSL Certificate
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Growth Package */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <Card className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 transform hover:scale-105 transition-transform duration-300">
                    <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                    <CardContent className="p-8">
                      <div className="mb-8">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-100 mb-2">
                          Growth
                        </h3>
                        <p className="text-white mb-6">
                          Ideal for growing businesses and portfolios.
                        </p>
                        <div className="flex items-baseline">
                          <span className="text-5xl font-extrabold text-white">
                            $24.99
                          </span>
                          <span className="text-blue-100 ml-1">/ month</span>
                        </div>
                      </div>
                      <div className="w-full mb-8">
                        <BookACall />
                      </div>
                      <div className="space-y-4">
                        <p className="text-sm font-medium text-blue-100 mb-4">
                          Package includes:
                        </p>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                          <span className="text-sm text-blue-100">
                            5 Page Website
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                          <span className="text-sm text-blue-100">
                            VPS Server
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                          <span className="text-sm text-blue-100">
                            High Security
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                          <span className="text-sm text-blue-100">
                            Site Analysis Report
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                          <span className="text-sm text-blue-100">
                            10GB Storage
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                          <span className="text-sm text-blue-100">
                            1 Year Free Domain
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Elite Package */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                >
                  <Card className="relative overflow-hidden rounded-3xl shadow-xl">
                    <CardContent className="p-8">
                      <div className="mb-8">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
                          Elite
                        </h3>
                        <p className="text-gray-900 mb-6">
                          For enterprises and high-traffic websites.
                        </p>
                        <div className="flex items-baseline">
                          <span className="text-5xl font-extrabold">
                            $99.99
                          </span>
                          <span className="text-gray-600 ml-1">/ month</span>
                        </div>
                      </div>
                      <div className="w-full mb-8">
                        <BookACall />
                      </div>
                      <div className="space-y-4">
                        <p className="text-sm font-medium text-gray-900 mb-4">
                          Package includes:
                        </p>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            Unlimited Pages
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            Dedicated Server
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            Expert Security
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            Detailed Site Analysis
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            Priority Customer Care
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            100GB Storage
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            3 Years Free Domain
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </section>

            {/* Feature Highlights Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 mb-20 shadow-lg">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Our Hosting?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start space-x-4">
                  <Server className="w-8 h-8 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Reliable Hosting</h3>
                    <p className="text-gray-600 text-sm">
                      From shared to dedicated, we&apos;ve got the perfect
                      hosting solution for your needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Top-Notch Security</h3>
                    <p className="text-gray-600 text-sm">
                      We prioritize your website&apos;s security with advanced
                      protection measures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <BarChart className="w-8 h-8 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Detailed Analytics</h3>
                    <p className="text-gray-600 text-sm">
                      Gain insights into your website&apos;s performance with
                      our analysis tools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Headphones className="w-8 h-8 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">24/7 Support</h3>
                    <p className="text-gray-600 text-sm">
                      Our expert team is always ready to assist you with any
                      issues or questions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <HardDrive className="w-8 h-8 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Ample Storage</h3>
                    <p className="text-gray-600 text-sm">
                      Store all your website files and data with our generous
                      storage options.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="w-8 h-8 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Free Domain</h3>
                    <p className="text-gray-600 text-sm">
                      Get a free domain with our Growth and Elite packages to
                      kickstart your online presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <section id="compare">
              <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Compare Plans
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="py-4 px-6 font-semibold">Feature</th>
                        <th className="py-4 px-6 font-semibold text-center">
                          Starter
                        </th>
                        <th className="py-4 px-6 font-semibold text-center">
                          Growth
                        </th>
                        <th className="py-4 px-6 font-semibold text-center">
                          Elite
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonTableData.map(
                        (item: ComparisonItem, index: number) => (
                          <tr
                            key={index}
                            className={
                              index < comparisonTableData.length - 1
                                ? "border-b"
                                : ""
                            }
                          >
                            <td className="py-4 px-6">{item.feature}</td>
                            <td className="py-4 px-6 text-center">
                              {typeof item.starter === "boolean" ? (
                                item.starter ? (
                                  <Check className="inline-block text-green-500" />
                                ) : (
                                  <X className="inline-block text-red-400" />
                                )
                              ) : (
                                item.starter
                              )}
                            </td>
                            <td className="py-4 px-6 text-center">
                              {typeof item.growth === "boolean" ? (
                                item.growth ? (
                                  <Check className="inline-block text-green-500" />
                                ) : (
                                  <X className="inline-block text-gray-400" />
                                )
                              ) : (
                                item.growth
                              )}
                            </td>
                            <td className="py-4 px-6 text-center">
                              {typeof item.elite === "boolean" ? (
                                item.elite ? (
                                  <Check className="inline-block text-green-500" />
                                ) : (
                                  <X className="inline-block text-gray-400" />
                                )
                              ) : (
                                item.elite
                              )}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 mb-20 shadow-lg">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="item-1"
                  className="border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left">
                    What&apos;s included in the website design?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our website design includes a custom-built responsive
                    website tailored to your needs. We&apos;ll work with you to
                    create a design that reflects your brand and meets your
                    specific requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left">
                    Can I upgrade my plan later?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, you can upgrade your plan at any time. When you
                    upgrade, you&apos;ll be charged the prorated difference for
                    the remainder of your billing cycle. Your new features will
                    be available immediately after upgrading.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left">
                    What kind of customer support do you offer?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer 24/7 customer support for all plans. Our Elite plan
                    includes priority support, which means your queries will be
                    addressed first. Support is available via email, live chat,
                    and phone.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left">
                    How does the free domain offer work?
                  </AccordionTrigger>
                  <AccordionContent>
                    The free domain is included with our Growth (1 year) and
                    Elite (3 years) packages. You can choose any available
                    domain name with a .com, .net, or .org extension. After the
                    free period, standard domain renewal rates will apply.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left">
                    What security measures are in place to protect my website?
                  </AccordionTrigger>
                  <AccordionContent>
                    We take security seriously. All plans include SSL
                    certificates, regular malware scans, and DDoS protection.
                    Our Growth and Elite plans feature advanced security
                    measures including daily backups, two-factor authentication,
                    and a web application firewall.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </main>
      </div>
      <CTA />
      <Footer />
    </>
  );
};

export default PricingPage;
