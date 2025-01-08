"use client";

import { useEffect } from "react";
import BookACall from "./BookaCall";

export default function CTA() {
  useEffect(() => {
    // Add Calendly script to document head
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 mx-auto">
      {/* Get Started Section */}
      <div className="w-full bg-gradient-to-br from-white to-green-100/50 py-16 md:py-24 rounded-3xl">
        <div className="">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-8xl">
                Ready to dive in?
              </h2>

              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed">
                Complete the form, schedule a call, or send us an email to find
                out if we&apos;re the right match!
              </p>
            </div>
            <BookACall />
          </div>
        </div>
      </div>
    </section>
  );
}
