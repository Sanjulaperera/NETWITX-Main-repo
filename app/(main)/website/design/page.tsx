import BookACall from "@/components/BookaCall";
import { MainNav } from "@/components/mainHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckIcon,
  CodeIcon,
  PenToolIcon,
  RefreshCwIcon,
  ArrowRightIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="flex-1">
      <MainNav />
      <div className="min-h-screen w-full bg-gray-50  p-4 md:p-8 lg:p-12">
        <section className="mx-auto flex min-h-[80vh] w-full max-w-[1400px] flex-col items-center justify-center rounded-[2rem] bg-white p-4 py-12 text-center shadow-sm">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl/none">
                  Our all-in-one website <br /> design solution
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-l dark:text-gray-400">
                  We create stunning websites that captivate your audience and
                  drive results. From redesigns to fresh concepts, we bring your
                  vision to life.
                </p>
              </div>
              <div className="space-x-4">
                <BookACall />
              </div>
              <div className="w-full max-w-3xl mt-8">
                <Image
                  src="https://uploadthing.com/f/3avCIVBvIockwLv1WCz9oI0kwXa2BPpbCsMF7Dq8ezdYLhl6"
                  alt="Website Design Hero"
                  width={800}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="px-4 md:px-10">
          <h2 className="text-3xl tracking-tighter sm:text-4xl md:text-7xl text-center mb-8">
            Our Services
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Elevate your online presence with our comprehensive suite of web
            design and development services. We don&apos;t just build websites;
            we craft digital experiences.
          </p>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="relative overflow-hidden group">
              <CardContent className="p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <RefreshCwIcon className="h-12 w-12 mb-4 text-primary relative z-20 group-hover:text-white transition-colors duration-300" />
                <h3 className="text-2xl font-bold mb-2 relative z-20 group-hover:text-white transition-colors duration-300">
                  Website Redesign
                </h3>
                <p className="text-gray-500 dark:text-gray-400 relative z-20 group-hover:text-white transition-colors duration-300">
                  Transform your outdated site into a modern masterpiece. Our
                  redesigns focus on enhancing user experience, improving
                  performance, and aligning with current design trends.
                </p>
                <ul className="mt-4 space-y-2 relative z-20">
                  <li className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                    <CheckIcon className="h-4 w-4 mr-2 text-green-500 group-hover:text-white transition-colors duration-300" />
                    Responsive layouts
                  </li>
                  <li className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                    <CheckIcon className="h-4 w-4 mr-2 text-green-500 group-hover:text-white transition-colors duration-300" />
                    Performance optimization
                  </li>
                  <li className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                    <CheckIcon className="h-4 w-4 mr-2 text-green-500 group-hover:text-white transition-colors duration-300" />
                    SEO enhancements
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden group">
              <CardContent className="p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <PenToolIcon className="h-12 w-12 mb-4 text-primary relative z-20 group-hover:text-white transition-colors duration-300" />
                <h3 className="text-2xl font-bold mb-2 relative z-20 group-hover:text-white transition-colors duration-300">
                  Custom Design
                </h3>
                <p className="text-gray-500 dark:text-gray-400 relative z-20 group-hover:text-white transition-colors duration-300">
                  Bring your unique vision to life with our bespoke design
                  services. We create stunning, one-of-a-kind websites tailored
                  to your brand&apos;s personality and goals.
                </p>
                <ul className="mt-4 space-y-2 relative z-20">
                  <li className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                    <CheckIcon className="h-4 w-4 mr-2 text-green-500 group-hover:text-white transition-colors duration-300" />
                    Brand-aligned aesthetics
                  </li>
                  <li className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                    <CheckIcon className="h-4 w-4 mr-2 text-green-500 group-hover:text-white transition-colors duration-300" />
                    User-centric interfaces
                  </li>
                  <li className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                    <CheckIcon className="h-4 w-4 mr-2 text-green-500 group-hover:text-white transition-colors duration-300" />
                    Interactive elements
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden group">
              <CardContent className="p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <CodeIcon className="h-12 w-12 mb-4 text-primary relative z-20 group-hover:text-white transition-colors duration-300" />
                <h3 className="text-2xl font-bold mb-2 relative z-20 group-hover:text-white transition-colors duration-300">
                  Web Development
                </h3>
                <p className="text-gray-500 dark:text-gray-400 relative z-20 group-hover:text-white transition-colors duration-300">
                  Turn designs into fully functional websites with our expert
                  development services. We use cutting-edge technologies to
                  build robust, scalable web solutions.
                </p>
                <ul className="mt-4 space-y-2 relative z-20">
                  <li className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                    <CheckIcon className="h-4 w-4 mr-2 text-green-500 group-hover:text-white transition-colors duration-300" />
                    Front-end expertise
                  </li>
                  <li className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                    <CheckIcon className="h-4 w-4 mr-2 text-green-500 group-hover:text-white transition-colors duration-300" />
                    Back-end integration
                  </li>
                  <li className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                    <CheckIcon className="h-4 w-4 mr-2 text-green-500 group-hover:text-white transition-colors duration-300" />
                    API development
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Pre-built Components
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Choose from our library of pre-built components to quickly assemble
            your perfect website. Mix and match to create a unique design that
            fits your brand.
          </p>
          <Tabs defaultValue="headers" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="headers">Headers</TabsTrigger>
              <TabsTrigger value="layouts">Hero</TabsTrigger>
              <TabsTrigger value="footers">Footers</TabsTrigger>
            </TabsList>
            <TabsContent value="headers" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Modern Header</h3>
                  </div>
                  <Image
                    src="https://uploadthing.com/f/3avCIVBvIockfKbbrmWGxeAzvRh1lV6Q3bTqW8n4w2MDo0ca"
                    alt="Simple Header Preview"
                    width={400}
                    height={100}
                    className="w-full object-cover rounded-md"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="layouts" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Modern Hero</h3>
                  </div>
                  <Image
                    src="https://uploadthing.com/f/3avCIVBvIockpXtVI68yOGDf05NK4dYyZaBMcqlvQTVmb1p3"
                    alt="Two Column Layout Preview"
                    width={400}
                    height={200}
                    className="w-full object-cover rounded-md"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="footers" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Modern Footer</h3>
                  </div>
                  <Image
                    src="https://uploadthing.com/f/3avCIVBvIockKH5p0n3SQLJhjUOm4sYIyF05tTVfqC6ZdB7u"
                    alt="Simple Footer Preview"
                    width={400}
                    height={100}
                    className="w-full object-cover rounded-md"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <div className="mt-16 text-center">
            <Link href="/website/design/components">
            <Button size="lg" className="group">
              Explore All Components
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            </Link>
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  );
}
