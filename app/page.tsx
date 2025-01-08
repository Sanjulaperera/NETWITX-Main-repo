import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { MainNav } from "@/components/mainHeader";
import WebsiteHostingPricing from "@/components/Pricing";
import ScrollAnimation from "@/components/scroll-animation";


export default function Home() {
  return (
    <>
    <MainNav/>
    <div className="flex flex-col">
      <main className="flex-grow relative">
        <ScrollAnimation />

        {/* Text reveal*/}
        <section className="relative z-20">
          <WebsiteHostingPricing />
        </section>

        {/* Features Section */}
        <section id="features"></section>
      </main>
    </div>
    <CTA />
    <Footer />
    </>
  );
}