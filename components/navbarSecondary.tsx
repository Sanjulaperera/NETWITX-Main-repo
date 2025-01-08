"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-background border-b">
      <div className="flex items-center">
        <Link href="/">
          <Image
            priority={true}
            src="https://uploadthing.com/f/3avCIVBvIockvnJbGmwCYVxRvriBtUhFA7MK8OW0dylE3Qqg"
            alt="Logo"
            width={120}
            height={80}
          />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Popover open={isNotificationOpen} onOpenChange={setIsNotificationOpen}>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <p className="text-center py-4">No new notifications</p>
          </PopoverContent>
        </Popover>

        <DropdownMenu open={isProfileOpen} onOpenChange={setIsProfileOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Image
                src="https://uploadthing.com/f/3avCIVBvIockVxCDjE6h5qWeFPLtyHlQmMRx1ZjakGbcsK32"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Guest Account</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
