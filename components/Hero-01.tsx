import Link from "next/link";
import { ArrowDown } from "lucide-react";
import LandingText from "./landing-text";
import { BackgroundBeams } from "./ui/background-beams";
import GetstartedButton from "./ui/Getstarted-button";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <LandingText />
          <p className="lg:text-xl md:text-l text-l text-gray-600 mb-8 mt-6">
            Netwitx provides all-in-one solutions for building, hosting, and
            managing your websites with ease.
          </p>
          <div className="relative z-10 flex justify-center space-x-4 pt-10">
            <Link href="/website-creator" className="py-4">
              <GetstartedButton />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Link href="#features" aria-label="Scroll to features">
          <ArrowDown className="h-8 w-8 text-blue-600 animate-bounce" />
        </Link>
      </div>
      <BackgroundBeams />
    </section>
  );
}
