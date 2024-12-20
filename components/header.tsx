"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  ChevronDown,
  Layers,
  CreditCard,
  HelpCircle,
  PanelsTopLeft,
  Server,
  Code,
  Users,
  HandCoins,
} from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://uploadthing.com/f/3avCIVBvIockvnJbGmwCYVxRvriBtUhFA7MK8OW0dylE3Qqg"
                alt="Netwitx Logo"
                width={500}
                height={500}
                className="h-10 w-28 object-contain"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>Products</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/website-builder" className="flex items-center">
                    <Code className="mr-2 h-4 w-4" />
                    <span>Website Builder</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/templates" className="flex items-center">
                    <PanelsTopLeft className="mr-2 h-4 w-4" />
                    <span>Website Templates</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/web-hosting" className="flex items-center">
                    <Server className="mr-2 h-4 w-4" />
                    <span>Hosting</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>Solution</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/comingsoon" className="flex items-center">
                    <HandCoins className="mr-2 h-4 w-4" />
                    <span>Payment Solution</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/comingsoon" className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>SEO Tools</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/comingsoon" className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    <span>All Web features</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <Link href="#pricing">
                    <span>Pricing</span>
                  </Link>
                </Button>
              </DropdownMenuTrigger>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>Support</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="#contact" className="flex items-center">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>Contact Us</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/comingsoon" className="flex items-center">
                    <Layers className="mr-2 h-4 w-4" />
                    <span>FAQ</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/comingsoon" className="flex items-center">
                    <Code className="mr-2 h-4 w-4" />
                    <span>Documentation</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex">
              Log in
            </Button>
            <Button>Sign up</Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6 text-gray-700" />
                  <span className="sr-only">Toggle mobile menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-6">
                  <div>
                    <h3 className="font-semibold mb-2">Products</h3>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/website-builder"
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <Code className="mr-2 h-4 w-4" />
                        <span>Website Builder</span>
                      </Link>
                      <Link
                        href="/templates"
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <PanelsTopLeft className="mr-2 h-4 w-4" />
                        <span>Website Templates</span>
                      </Link>
                      <Link
                        href="/web-hosting"
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <Server className="mr-2 h-4 w-4" />
                        <span>Hosting</span>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Solutions</h3>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/comingsoon"
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <Layers className="mr-2 h-4 w-4" />
                        <span>Payment Solution</span>
                      </Link>
                      <Link
                        href="/comingsoon"
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>SEO tools</span>
                      </Link>
                      <Link
                        href="/comingsoon"
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <Users className="mr-2 h-4 w-4" />
                        <span>All Web features</span>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Pricing</h3>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Support</h3>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/comingsoon"
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <HelpCircle className="mr-2 h-4 w-4" />
                        <span>Contact Us</span>
                      </Link>
                      <Link
                        href="/comingsoon"
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <Layers className="mr-2 h-4 w-4" />
                        <span>FAQ</span>
                      </Link>
                      <Link
                        href="/comingsoon"
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <Code className="mr-2 h-4 w-4" />
                        <span>Documentation</span>
                      </Link>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Log in
                  </Button>
                  <Button className="w-full">Sign up</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
