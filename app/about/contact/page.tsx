"use client";

import { MessageCircle, HeadphonesIcon, Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { ContactCard } from "./contact-card";
import { MainNav } from "@/components/mainHeader";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { SocialSection } from "./social-section";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const contactMethods = [
    {
      title: "Chat to founder",
      description: "Speak with Founder.",
      icon: MessageCircle,
      link: {
        href: "mailto:sanjula.perera@netwitx.com",
        label: "founder@netwitx.com",
      },
    },
    {
      title: "Chat to support",
      description: "We're here to help.",
      icon: HeadphonesIcon,
      link: {
        href: "mailto:contact@netwitx.com",
        label: "contact@netwitx.com",
      },
    },
    {
      title: "Virtual meeting",
      description: "Schedule a virtual call.",
      icon: Calendar,
      link: {
        href: "#",
        label: "Book a meeting",
      },
    },
    {
      title: "Call us",
      description: "Mon-Fri | 8am to 5pm.",
      icon: Phone,
      link: {
        href: "tel:+61475426888",
        label: "+61 475 426 888",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main>
        <motion.div
          className="container mx-auto px-4 py-16 md:py-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto max-w-[58rem] text-center">
            <motion.h1
              className="mb-4 text-6xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Contact our friendly team
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Let us know how we can help.
            </motion.p>
          </div>
          <motion.div
            className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {contactMethods.map((method) => (
              <motion.div
                key={method.title}
                className="z-10"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <ContactCard {...method} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [17, 10],
            [10, 15],
            [12, 11],
            [7, 9],
            [18, 13],
          ]}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-20%] h-[60rem] skew-y-12"
          )}
        />
        <SocialSection />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
