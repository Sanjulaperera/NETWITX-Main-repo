"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/app/data/projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { MainNav } from "@/components/mainHeader";
import BoxReveal from "@/components/ui/box-reveal";
import { motion } from "framer-motion";

const WorkPage: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl md:text-8xl font-normal text-center p-12">
          <BoxReveal boxColor={"#dcfce7"} duration={0.5}>
            <span>Our Work</span>
          </BoxReveal>
        </h1>
        <motion.div variants={cardVariants} initial="hidden" animate="visible">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="relative pt-4 pl-4">
                {/* Year Badge */}
                <div className="absolute -top-2 -left-2 z-20">
                  <div className="bg-[#CCFF00] text-black px-6 py-2 rounded-full font-medium">
                    {project.year}
                  </div>
                </div>

                {/* Main Card */}
                <Link
                  href={`/work/${project.id}`}
                  className="group block relative bg-gray-200 rounded-3xl overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Bottom Content */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      {/* Categories */}
                      <div className="flex flex-wrap gap-2">
                        {project.services.slice(0, 3).map((service) => (
                          <span
                            key={service}
                            className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm"
                          >
                            {service}
                          </span>
                        ))}
                      </div>

                      {/* Arrow Button */}
                      <div className="relative w-12 h-12">
                        <div className="absolute inset-0 bg-white rounded-full shadow-lg overflow-hidden">
                          <div className="relative w-full h-full transition-transform duration-300 group-hover:translate-x-1/2 group-hover:-translate-y-1/2">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <ArrowUpRight className="w-5 h-5" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center -translate-x-1/2 translate-y-1/2">
                              <ArrowUpRight className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Title */}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <CTA />
      <Footer />
    </>
  );
};
export default WorkPage;
