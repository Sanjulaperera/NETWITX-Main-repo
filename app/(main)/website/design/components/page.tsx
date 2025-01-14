"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  AppWindowIcon,
  BadgeDollarSignIcon,
  BicepsFlexedIcon,
  ContactIcon,
  BoxesIcon,
  FootprintsIcon,
  ImagesIcon,
  NavigationIcon,
  ShieldQuestionIcon,
  CreditCardIcon,
  HexagonIcon,
  MousePointerIcon,
  ChevronLeftIcon,
} from "lucide-react";

const components = [
  {
    name: "Navbar",
    icon: NavigationIcon,
    figmaUrl:
      "https://embed.figma.com/design/J94tvsinGSyjlMKFBSid4I/Relume-Figma-Kit-(v2.9)-(Community)?node-id=129-13658&embed-host=share",
  },
  {
    name: "Footer",
    icon: FootprintsIcon,
    figmaUrl:
      "https://embed.figma.com/design/J94tvsinGSyjlMKFBSid4I/Relume-Figma-Kit-(v2.9)-(Community)?node-id=136-5239&embed-host=share",
  },
  {
    name: "Hero",
    icon: BicepsFlexedIcon,
    figmaUrl:
      "https://embed.figma.com/design/J94tvsinGSyjlMKFBSid4I/Relume-Figma-Kit-(v2.9)-(Community)?node-id=519-5759&embed-host=share",
  },
  {
    name: "Headers",
    icon: CreditCardIcon,
    figmaUrl:
      "https://embed.figma.com/design/J94tvsinGSyjlMKFBSid4I/Relume-Figma-Kit-(v2.9)-(Community)?node-id=519-5701&embed-host=share",
  },
  {
    name: "Features",
    icon: AppWindowIcon,
    figmaUrl:
      "https://embed.figma.com/design/J94tvsinGSyjlMKFBSid4I/Relume-Figma-Kit-(v2.9)-(Community)?node-id=507-5360&embed-host=share",
  },
  {
    name: "Products",
    icon: BoxesIcon,
    figmaUrl:
      "https://embed.figma.com/design/J94tvsinGSyjlMKFBSid4I/Relume-Figma-Kit-(v2.9)-(Community)?node-id=2004-6&embed-host=share",
  },
  {
    name: "Gallery",
    icon: ImagesIcon,
    figmaUrl:
      "https://embed.figma.com/design/J94tvsinGSyjlMKFBSid4I/Relume-Figma-Kit-(v2.9)-(Community)?node-id=1161-5816&embed-host=share",
  },
  {
    name: "Contact",
    icon: ContactIcon,
    figmaUrl:
      "https://embed.figma.com/design/J94tvsinGSyjlMKFBSid4I/Relume-Figma-Kit-(v2.9)-(Community)?node-id=509-5386&embed-host=share",
  },
  {
    name: "FAQ",
    icon: ShieldQuestionIcon,
    figmaUrl:
      "https://embed.figma.com/design/J94tvsinGSyjlMKFBSid4I/Netwitx-Components?node-id=513-5486&embed-host=share",
  },
  {
    name: "Pricing",
    icon: BadgeDollarSignIcon,
    figmaUrl:
      "https://embed.figma.com/design/J94tvsinGSyjlMKFBSid4I/Netwitx-Components?node-id=515-5518&embed-host=share",
  },
  {
    name: "Logos",
    icon: HexagonIcon,
    figmaUrl:
      "https://embed.figma.com/design/J94tvsinGSyjlMKFBSid4I/Netwitx-Components?node-id=518-5640&embed-host=share",
  },
  {
    name: "CTA",
    icon: MousePointerIcon,
    figmaUrl:
      "https://embed.figma.com/design/J94tvsinGSyjlMKFBSid4I/Netwitx-Components?node-id=509-5308&embed-host=share",
  },
];

export default function ComponentShowcase() {
  const [selectedComponentIndex, setSelectedComponentIndex] = useState(0)
  const selectedComponent = components[selectedComponentIndex]
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar className="w-64 border-r">
          <SidebarHeader className="p-4 border-b">
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Components</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <ScrollArea className="h-[calc(100vh-5rem)]">
              <SidebarMenu>
                {components.map((component) => (
                  <SidebarMenuItem key={component.name}>
                    <SidebarMenuButton
                      onClick={() => setSelectedComponentIndex(components.indexOf(component))}
                      isActive={selectedComponent.name === component.name}
                    >
                      <component.icon className="h-4 w-4 mr-2" />
                      {component.name}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </ScrollArea>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-6">
        <Button
            onClick={goBack}
            variant="outline"
            size="sm"
            className="mb-4"
          >
            <ChevronLeftIcon className="h-4 w-4 mr-2" />
            Go Back
          </Button>
          <div className="mb-6">
            <h1 className="text-2xl font-bold">{selectedComponent.name}</h1>
            <p className="text-gray-500">Figma design for {selectedComponent.name} component</p>
          </div>
          <div className="w-full h-[calc(100vh-12rem)] border rounded-lg overflow-hidden">
            <iframe
              src={selectedComponent.figmaUrl}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
