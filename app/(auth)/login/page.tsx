"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster, toast } from "sonner";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase/config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!email || !password) {
      toast.error("Please fill in both email and password.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
    } catch (error: unknown) {
      console.error("Error logging in:", error);
      // Provide error-specific feedback based on Firebase error codes
      const firebaseError = error as { code: string };
      switch (firebaseError.code) {
        case "auth/invalid-email":
          toast.error("Invalid email format.");
          break;
        case "auth/user-not-found":
          toast.error("No user found with this email.");
          break;
        case "auth/wrong-password":
          toast.error("Incorrect password.");
          break;
        default:
          toast.error("Failed to log in. Please try again.");
      }
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[600px]">
      <div className="flex items-center justify-center py-12">
      <Toaster richColors position="top-center" />
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
        <div className="mx-auto grid w-[350px] gap-6">
          <Alert className="mt-20">
            <TriangleAlert className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              Website is still under development. Apologize for any inconvenience.
            </AlertDescription>
          </Alert>

          <div className="grid gap-2 text-center mt-10">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to log in to your account
            </p>
          </div>
          <form onSubmit={handleLogin} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgetPassword"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
          <div className="pt-10 text-center text-[11px] text-muted-foreground ">
            <Link
              href="#"
              target="_blank"
              className="underline hover:text-green-500"
            >
              {" "}
              Terms of Use{" "}
            </Link>{" "}
            |{" "}
            <Link
              href="#"
              target="_blank"
              className="underline hover:text-green-500"
            >
              Privacy Policy
            </Link>
            . <br />
            Google&apos;s
            <Link
              href="https://policies.google.com/privacy"
              target="_blank"
              className="underline hover:text-green-500"
            >
              {" "}
              Privacy Policy and Terms{" "}
            </Link>{" "}
            of Service apply.
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block m-4">
        <Image
          src="https://uploadthing.com/f/3avCIVBvIockbPTz3GnHSngtQOCDZPzsbh0xRdlp15Lk7jNE"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default Login;
