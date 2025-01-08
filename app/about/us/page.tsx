'use client'
import { useInView } from 'react-intersection-observer'
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {MainNav} from "@/components/mainHeader";
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
    <MainNav />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            The complete automated and human customer service solution
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Empowering businesses to deliver exceptional customer experiences
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={ref}
            className={`border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-700 transform ${
              inView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Our company</h2>
                <p className="text-lg text-gray-600">
                  Strong customer relationships are more important than ever. But the
                  scale and nature of online business, combined with rising customer
                  expectations, makes it difficult to build—and keep—those connections.
                </p>
                <p className="text-lg text-gray-600">
                  That&apos;s why we&apos;re here. Customer service and support teams at more
                  than 25 businesses use our complete customer service solution
                  every day to drive faster growth through better relationships.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Customer service team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">25k+</div>
              <div className="text-gray-600">Paying customers</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">2011</div>
              <div className="text-gray-600">Founded</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">7x</div>
              <div className="text-gray-600">Forbes Cloud 100 Honoree</div>
            </CardContent>
          </Card>
        </div>
      </section>
      </div>
      <CTA />
      <Footer />
      </>
      )}