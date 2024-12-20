import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import Footer from "@/components/Footer";
import { Header } from "@/components/header";
import GoBackButton from "@/components/Goback";

export default function SpotlightPreview() {
  return (
    <main>
      <section className="hidden md:block">
      <Header />
      </section>
    <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-green-50 to-green-400 bg-opacity-50">
          Coming Soon..
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          We&apos;re working on something amazing for you. It will be the best
          if not the best editor you&apos;ve ever see. Stay tuned!
        </p>
        <div className="mt-8 flex justify-center">
          <GoBackButton />
        </div>
      </div>
    </div>
    <Footer />
    </main>
    
  );
}
