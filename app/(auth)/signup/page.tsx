"use client";
import Image from "next/image";
import SignUpForm from "./signup-form";
import { useRouter } from "next/navigation"; // Updated import
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const SignUpPage = () => {
  const router = useRouter();

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="relative h-[40rem] flex items-center justify-center p-4">
        <div className="absolute top-5 left-5">
          <Image
            src="https://uploadthing.com/f/3avCIVBvIockvnJbGmwCYVxRvriBtUhFA7MK8OW0dylE3Qqg" // Replace with the actual path to your logo
            alt="Logo"
            width={200} // Adjust size as needed
            height={200}
            className="cursor-pointer"
            onClick={() => router.push("/")} // Navigate to the homepage on logo click
          />
        </div>
        <div className="max-w-md w-full z-10">
          <SignUpForm />
        </div>
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [17, 10],
            [10, 15],
            [12, 11],
            [7, 9],
            [18, 13],
          ]}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-20%] h-[60rem] skew-y-12"
          )}
        />
      </div>
    </>
  );
};

export default SignUpPage;
