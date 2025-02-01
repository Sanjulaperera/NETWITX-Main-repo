"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";
import Hero from "@/components/Hero-02";
import { FeaturesSectionDemo } from "./feature-section";
import WorkShowcase from "./WorkShowcase";

interface SectionProps {
  children: ReactNode;
  backgroundColor: string;
}

const AnimatedSection: React.FC<SectionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -100]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen sticky top-0 overflow-hidden`}
    >
      <motion.div
        style={{ opacity, scale, y, filter: `blur(${blur}px)` }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default function ScrollAnimation() {
  return (
    <div className="flex flex-col">
      <main className="flex-grow relative">
        <AnimatedSection backgroundColor="">
          <Hero />
        </AnimatedSection>
        <AnimatedSection backgroundColor="">
          <WorkShowcase />
        </AnimatedSection>
        <AnimatedSection backgroundColor="">
          <section className="min-h-screen bg-white rounded-md sm:rounded-t-[2rem] md:rounded-t-[5rem]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-20 pt-20">
                Grow your website with powerful features
              </h2>
            </div>
            <FeaturesSectionDemo />
          </section>
        </AnimatedSection>
      </main>
    </div>
  );
}
