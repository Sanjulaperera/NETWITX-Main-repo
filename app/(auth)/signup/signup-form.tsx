"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";
import { AlertCircle, CheckCircle2, TriangleAlert } from "lucide-react";

export default function SignUpForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const promise = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ name: "Sonner" }), 2000)
    );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      toast.error("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      const result = await signUp(email, password);
      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Account created successfully.");
        setTimeout(
          () =>
            toast.promise(promise, {
              loading: " Redirecting to login...",
              success: (data) => {
                const typedData = data as { name: string };
                return `${typedData.name} toast has been added`;
              },
              error: "Error",
            }),
          1000
        );
        setTimeout(() => router.push("/login"), 2000);
      }
    } catch {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-20">
      <div className="mx-auto max-w-sm">
        <Alert className="mt-24">
          <TriangleAlert className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            Website is still under development. Unable to Sign up, Apologize for any inconvenience.
          </AlertDescription>
        </Alert>
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-balance text-muted-foreground">
            Enter your information to create an account
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
              disabled
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="bg-white"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
              disabled
                id="password"
                type="password"
                name="password"
                placeholder="Create a password"
                required
                minLength={6}
                className="bg-white"
              />
            </div>
            <Button
              type="submit"
              disabled
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </Button>
            {error && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-100 p-3 rounded-md">
                <AlertCircle size={20} />
                <span>{error}</span>
              </div>
            )}
            {success && (
              <div className="flex items-center space-x-2 text-green-600 bg-green-100 p-3 rounded-md">
                <CheckCircle2 size={20} />
                <span>{success}</span>
              </div>
            )}
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Log In
            </Link>
          </div>
          <div className="pt-10">
            <p className="text-center text-[11px] text-muted-foreground">
              * By signing up, you agree to our{" "}
              <Link
                href="#"
                target="_blank"
                className="underline hover:text-green-500"
              >
                {" "}
                Terms of Use{" "}
              </Link>{" "}
              and acknowledge you&apos;ve read our{" "}
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
