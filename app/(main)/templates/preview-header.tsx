"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Monitor, Smartphone } from "lucide-react";
import { AnimatedModalDemo } from "./makeYours";


interface PreviewHeaderProps {
  title: string;
  onViewChange: (view: "desktop" | "mobile") => void;
  currentView: "desktop" | "mobile";
  currentPage: number;
  onBack: () => void;
}

export function PreviewHeader({
  title,
  onViewChange,
  currentView,
  onBack,
}: PreviewHeaderProps) {
  return (
    <>

    <header className="flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex border rounded-md shadow-sm">
          <Button
            variant={currentView === "desktop" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => onViewChange("desktop")}
            className="rounded-r-none"
          >
            <Monitor className="h-4 w-4 mr-2" />
            Desktop
          </Button>
          <Button
            variant={currentView === "mobile" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => onViewChange("mobile")}
            className="rounded-l-none"
          >
            <Smartphone className="h-4 w-4 mr-2" />
            Mobile
          </Button>
        </div>
        <AnimatedModalDemo />
      </div>
    </header>
    </>
  );
}
