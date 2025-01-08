"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <Image
          priority={true}
          src="https://uploadthing.com/f/3avCIVBvIockcwVUIHP95r6XeO3i8KQW7jabADyslhkBInpG"
          alt="404 Image"
          width={400}
          height={400}
        />
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-xl mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button onClick={() => router.back()} className="px-6 py-3 text-lg">
          Go Back
        </Button>
      </div>
    </div>
  );
}
