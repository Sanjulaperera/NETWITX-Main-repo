"use client"; // Ensure this component is a Client Component

import { useRouter } from "next/navigation";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function ComingSoonPage() {
  const router = useRouter();
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-green-700 text-white p-4 ${montserrat.className}`}
    >
      <header className="absolute top-0 left-0 right-0 p-6">
        <div className="flex items-center justify-center space-x-2">
          <Link href="/">
            <Image
              src="https://uploadthing.com/f/3avCIVBvIockvnJbGmwCYVxRvriBtUhFA7MK8OW0dylE3Qqg"
              alt="Netwitx Logo"
              width={500}
              height={500}
              className="h-20 w-38 object-contain"
            />
          </Link>
        </div>
      </header>

      <main className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
          We&apos;re crafting something extraordinary, and greatness takes time.
          Your patience will be rewarded. Stay tuned for a revolution in web
          services.
        </p>
        <Button
        onClick={() => router.back()}
          variant="secondary"
          className="relative group flex gap-4 max-w-md mx-auto animate-fade-in-up animation-delay-400"
        >
          <span className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-x-2">
            ←
          </span>
          Go Back
        </Button>
      </main>

      <footer className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <p className="text-sm opacity-75">
          © 2024 Netwitx. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
