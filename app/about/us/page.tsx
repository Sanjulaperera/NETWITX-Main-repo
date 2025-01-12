"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { MainNav } from "@/components/mainHeader";
import SparklesText from "@/components/ui/sparkles-text";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const { ref: overviewRef, inView: overviewInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <MainNav />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl tracking-tight text-gray-900"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <SparklesText text="Where Innovation meets Imagination" />
            </motion.h1>
          </motion.div>
        </section>

        {/* Company Overview Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              ref={overviewRef}
              initial={{ opacity: 0, y: 50 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <motion.h2
                    className="text-3xl font-bold text-gray-900"
                    initial={{ opacity: 0, x: -20 }}
                    animate={overviewInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Our company
                  </motion.h2>
                  <motion.p
                    className="text-lg text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={overviewInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    At NETWITX.com, we create custom websites and provide
                    reliable hosting to help businesses succeed online. Founded
                    in Australia in 2023, we’re dedicated to delivering
                    innovative, user-friendly solutions that bring your vision
                    to life.
                  </motion.p>
                  <motion.p
                    className="text-lg text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={overviewInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    We focus on personalized services, crafting beautiful
                    designs and secure hosting tailored to your needs. At
                    NETWITX.com, your success is our priority. Let’s build
                    something extraordinary together.
                  </motion.p>
                </div>
                <motion.div
                  className="relative h-[400px] rounded-xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={overviewInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <Image
                    src="https://uploadthing.com/f/3avCIVBvIockpXem5MSyOGDf05NK4dYyZaBMcqlvQTVmb1p3"
                    alt="Customer service team"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-blue-50" ref={statsRef}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {statsInView && <CountUp end={10} duration={2.5} suffix="+" />}
              </div>
              <div className="text-xl text-gray-600">Happy customers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {statsInView && (
                  <CountUp end={2023} duration={2.5} useEasing={false} />
                )}
              </div>
              <div className="text-xl text-gray-600">Founded</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {statsInView && <CountUp end={97} duration={2.5} suffix="%" />}
              </div>
              <div className="text-xl text-gray-600">Customer satisfaction</div>
            </motion.div>
          </div>
        </section>

        {/* Values, Photo, and Mission Sections */}
        <div className="relative">
          {/* Values Section */}
          <section className="py-16 px-4 sticky top-0 bg-white z-10">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                className="text-3xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our Values
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
                {["Customer First", "Innovation", "Transparency"].map(
                  (value, index) => (
                    <motion.div
                      key={value}
                      className="bg-white p-6 rounded-lg shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl font-semibold mb-4">{value}</h3>
                      <p className="text-gray-600">
                        We believe in putting our customers&apos; needs at the
                        heart of everything we do, ensuring their success is our
                        success.
                      </p>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </section>

          {/* Full Screen Photo Section */}
          <section className="h-screen sticky top-0 z-20">
            <Image
              src="https://uploadthing.com/f/3avCIVBvIockpXem5MSyOGDf05NK4dYyZaBMcqlvQTVmb1p3"
              alt="Customer service in action"
              fill
              className="object-cover rounded-md sm:rounded-t-[1rem] md:rounded-t-[3rem]"
            />
          </section>

          {/* Mission Section */}
          <section className="min-h-screen flex items-center justify-center relative z-30">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
            <motion.div
              className="max-w-4xl mx-auto text-center relative z-10 p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-7xl font-bold mb-6 text-white">
                Our Mission
              </h2>
              <p className="text-xl text-white mb-8">
                To revolutionize customer service by combining the best of human
                interaction with cutting-edge automation, enabling businesses of
                all sizes to build lasting relationships with their customers.
              </p>
            </motion.div>
          </section>
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
}
