import Link from "next/link";
import { Underline } from "./Underline";
import BoxReveal from "@/components/ui/box-reveal";
import GetstartedButton from "./ui/Getstarted-button";
import { RainbowButton } from "./ui/rainbow-button";
import {AppearFromBottom} from "./ui/AppearFromBottom";

export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-gray-50 drop-shadow-2xl p-4 md:p-8 lg:p-12">
      <section className="mx-auto flex min-h-[80vh] w-full max-w-[1400px] flex-col items-center justify-center rounded-[2rem] bg-white p-4 py-12 text-center shadow-sm">
        <div className="container max-w-4xl">
          <AppearFromBottom duration={0.8} delay={0.2}>
          <Link href="/website-creator">
            <RainbowButton className="mb-12">
              New templates available
            </RainbowButton>
          </Link>
          </AppearFromBottom>
       

          <h1 className="mb-6 text-4xl text-center font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <BoxReveal boxColor={"#86efac"} duration={0.5}>
              Unlock Your Business&apos;s
            </BoxReveal>
            <BoxReveal boxColor={"#86efac"} duration={0.2}>
              Ultimate{" "}
              <span className="relative">
                Success
                <span className="absolute -bottom-2 left-0 w-full">
                  <Underline className="w-full h-auto text-green-500" />
                </span>
              </span>
            </BoxReveal>
          </h1>

          <AppearFromBottom duration={0.8} delay={0.2}>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Delivers all-in-one solutions for effortlessly building, hosting,
            and managing your websites with Your vision, our creativity!
          </p>
          </AppearFromBottom>

          <AppearFromBottom duration={0.8} delay={0.2}>
          <Link href="/website-creator" className="py-4">
            <GetstartedButton />
          </Link>
          </AppearFromBottom>
        </div>
      </section>
    </div>
  );
}
