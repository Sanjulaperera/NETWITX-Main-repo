"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import BookACall from "./BookaCall";

const productsLinks = [
  {
    title: "Web Design",
    href: "/website/design",
    description: "Design your site with user-friendly and intuitive features.",
  },
  {
    title: "eCommerce",
    href: "https://www.netwitx.com/templates?type=eCommerce#templates",
    description:
      "Build and grow your business with a powerful eCommerce platform.",
  },
  {
    title: "Website Templates",
    href: "./website-creator",
    description: "Choose from a variety of templates to get started.",
  },
  {
    title: "Scheduling Systems",
    href: "#",
    description: "Connect with third-party tools that you're already using.",
  },
  {
    title: "Website Hosting",
    href: "/web-hosting",
    description: "Get secure and reliable hosting for your site.",
  },
  {
    title: "Booking Systems",
    href: "#",
    description: "Connect with third-party tools that you're already using.",
  },
  {
    title: "",
    href: "#",
    description: "",
  },
  {
    title: "Restaurant",
    href: "https://www.netwitx.com/templates?type=restaurant#templates",
    description: "Connect with third-party tools that you're already using.",
  },
  {
    title: "",
    href: "#",
    description: "",
  },
];

const solutionLinks = [
  {
    title: "Payment systems",
    href: "/solutions",
    description: "Accept and manage payments on your site.",
  },
  {
    title: "Web Analytics",
    href: "/solutions",
    description: "Get insights into your site's performance.",
  },
  {
    title: "SEO Tools",
    href: "/solutions",
    description: "Improve your site's visibility on search engines.",
  },
  {
    title: "All Web Features",
    href: "/solutions",
    description: "Explore all the features of our web solutions.",
  },
];

const resourcesLinks = [
  {
    title: "Netwitx Blog",
    href: "/blog",
    description: "Read the latest articles on web development.",
  },
  {
    title: "Help Center",
    href: "/support",
    description: "Find answers to common questions.",
  },
  {
    title: "Contact Us",
    href: "/about/contact",
    description: "Got a problem? Get in touch with our team.",
  },
];

export function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);

      // Calculate scroll progress for the first 100px of scroll
      const progress = Math.min(scrollY / 100, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate dynamic width based on scroll progress
  const navWidth = isScrolled
    ? `${100 - scrollProgress * 15}%` // Gradually reduce to 85% width
    : "100%";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-background"
      }`}
    >
      <div
        style={{ width: navWidth }}
        className={`mx-auto transition-all duration-300 ease-in-out`}
      >
        <div className="flex h-16 items-center px-6">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex w-[300px] flex-col">
              <SheetDescription className="sr-only">
                Navigation menu for mobile devices
              </SheetDescription>
              <Link href="/" className="flex items-center gap-2 font-bold">
                <Image
                  priority={true}
                  src="https://uploadthing.com/f/3avCIVBvIockvnJbGmwCYVxRvriBtUhFA7MK8OW0dylE3Qqg"
                  alt="Netwitx Logo"
                  width={32}
                  height={32}
                />
              </Link>
              <div className="mt-8 flex flex-col gap-4">
                <Link href="/" className="text-lg font-semibold">
                  Home
                </Link>
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold">
                    Product
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <div className="grid gap-2 pl-4">
                      {productsLinks.map((link) => (
                        <Link
                          key={link.title}
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold">
                    Solutions
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <div className="grid gap-2 pl-4">
                      {solutionLinks.map((link) => (
                        <Link
                          key={link.title}
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold">
                    Resources
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <div className="grid gap-2 pl-4">
                      {resourcesLinks.map((link) => (
                        <Link
                          key={link.title}
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <Link href="/plans" className="text-lg font-semibold">
                  Pricing
                </Link>
                <Link href="/about/us" className="text-lg font-semibold">
                  About Us
                </Link>
              </div>
              <div className="mt-auto">
                <Select defaultValue="en">
                  <SelectTrigger className="w-full">
                    <SelectValue>
                      <div className="flex items-center gap-2">
                        <span className="rounded-sm">🇦🇺</span>
                        English
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">
                      <div className="flex items-center gap-2">
                        <span>🇦🇺</span>
                        English
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-center space-x-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Image
              priority={true}
              src="https://uploadthing.com/f/3avCIVBvIockvnJbGmwCYVxRvriBtUhFA7MK8OW0dylE3Qqg"
              alt="Netwitx Logo"
              width={500}
              height={500}
              className="h-10 w-28 object-contain"
            />
          </Link>
          <NavigationMenu className="hidden lg:flex mx-auto">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[850px] grid-cols-3 gap-4 p-6">
                    <div className="col-span-2 grid grid-cols-2 gap-6">
                      {productsLinks.map((link) => (
                        <Link
                          key={link.title}
                          href={link.href}
                          className="group grid gap-1 p-4 hover:bg-muted rounded-lg"
                        >
                          <div className="text-sm font-bold group-hover:underline group-hover:text-primary">
                            {link.title}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {link.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="p-4">
                      <div className="text-lg font-semibold">About Us</div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Empowering businesses with cutting-edge web services and
                        solutions.
                      </p>
                      <Link
                        href="/about/us"
                        className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        Read more about us
                        <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[850px] grid-cols-3 gap-4 p-6">
                    <div className="col-span-2 grid grid-cols-2 gap-6">
                      {solutionLinks.map((link) => (
                        <Link
                          key={link.title}
                          href={link.href}
                          className="group grid gap-1 p-4 hover:bg-muted rounded-lg"
                        >
                          <div className="text-sm font-bold group-hover:underline group-hover:text-primary">
                            {link.title}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {link.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="p-4">
                      <div className="text-lg font-semibold">About Us</div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Empowering businesses with cutting-edge web services and
                        solutions.
                      </p>
                      <Link
                        href="/about/us"
                        className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        Read more about us
                        <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[850px] grid-cols-3 gap-4 p-6">
                    <div className="col-span-2 grid grid-cols-3 gap-6">
                      {resourcesLinks.map((link) => (
                        <Link
                          key={link.title}
                          href={link.href}
                          className="group grid gap-1 p-4 hover:bg-muted rounded-lg"
                        >
                          <div className="text-sm font-bold group-hover:underline group-hover:text-primary">
                            {link.title}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {link.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="p-4">
                      <div className="text-lg font-semibold">About Us</div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Empowering businesses with cutting-edge web services and
                        solutions.
                      </p>
                      <Link
                        href="/about/us"
                        className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        Read more about us
                        <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/plans"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="ml-auto flex items-center gap-4">
            <div className="hidden lg:block">
              <Select defaultValue="en">
                <SelectTrigger className="w-[130px]">
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      <span className="rounded-sm">🇦🇺</span>
                      English
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">
                    <div className="flex items-center gap-2">
                      <span>🇦🇺</span>
                      English
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <BookACall/>
          </div>
        </div>
      </div>
    </header>
  );
}