"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { Toaster, toast } from "sonner";
import Image from "next/image";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleForgotPassword = async () => {
    const trimmedEmail = email.trim(); // Ensure no leading/trailing spaces
    if (!trimmedEmail) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      // Send password reset email
      await sendPasswordResetEmail(auth, trimmedEmail);
      toast.success(`Password reset email sent to ${trimmedEmail}`);

      setTimeout(() => {
        toast.info("Redirecting to login page...");
      }, 1000);

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error: unknown) {
      console.error("Error sending password reset email:", error);
      const firebaseError = error as { code?: string };
      if (firebaseError.code === "auth/invalid-email") {
        toast.error("Invalid email address.");
      } else if (firebaseError.code === "auth/user-not-found") {
        toast.error("No user found with this email.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="relative h-[40rem] pt-32">
        {/* Logo in the top-left corner */}
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

        <div className="text-center mt-10">
          <h1 className="text-3xl font-bold">Forgot Password</h1>
          <p className="text-base mt-1">
            A link will be sent to your email to reset the password
          </p>
          <div className="grid items-center justify-center mt-10">
            <div className="grid gap-2 z-20">
              <div className="grid gap-10 ">
                <Input
                  disabled
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-white"
                />
              </div>
              <div className="flex gap-5">
                <Button disabled onClick={handleForgotPassword}>
                  Send Password Reset Email
                </Button>
                <Button onClick={goBack} variant="secondary">
                  Go Back
                </Button>
              </div>
            </div>
          </div>
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

export default ForgotPassword;
