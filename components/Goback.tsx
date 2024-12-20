"use client"; // Ensure this component is a Client Component

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      variant="default"
      className="text-lg px-8 py-4 relative group"
    >
      <span className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-x-2">
        ←
      </span>
      Go Back
    </Button>
  );
};

export default GoBackButton;
