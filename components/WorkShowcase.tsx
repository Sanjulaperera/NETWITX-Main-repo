import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
interface WorkItem {
  title: string
  description: string
  imageUrl: string
  link: string
  className: string
  badge?: {
    text: string
    variant: "pink" | "indigo" | "orange"
  }
}

const workItems: WorkItem[] = [
  {
    title: "E-commerce Platform",
    description: "A modern shopping experience with AI-powered recommendations",
    imageUrl: "https://uploadthing.com/f/3avCIVBvIockNegIW6r3rAsqXcoSxHR8v4yju1ZmMLbfdIOK",
    link: "#",
    className: "col-span-2 row-span-2",
    badge: { text: "New", variant: "orange" },
  },
  {
    title: "Mobile App Design",
    description: "Health & wellness tracking app",
    imageUrl: "https://uploadthing.com/f/3avCIVBvIockbfWzEManHSngtQOCDZPzsbh0xRdlp15Lk7jN",
    link: "#",
    className: "col-span-1 row-span-1",
    badge: { text: "Featured", variant: "pink" },
  },
  {
    title: "Dashboard UI",
    description: "Analytics dashboard redesign",
    imageUrl: "https://uploadthing.com/f/3avCIVBvIock6urdF7Nsp3ZRmOEQAVxFUeInGMdhvKruLHok",
    link: "#",
    className: "col-span-1 row-span-2",
    badge: { text: "Popular", variant: "indigo" },
  },
]

export default function WorkShowcase() {
  return (
    <section className="w-full h-screen bg-gray-100 p-4 py-8 rounded-md sm:rounded-t-[2rem] md:rounded-t-[5rem]">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2">Our Latest Work</h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects and see how we help brands transform their digital presence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-4 flex-1">
          {workItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                "bg-white/80 dark:bg-zinc-900/80",
                "backdrop-blur-xl",
                "border border-zinc-200/50 dark:border-zinc-800/50",
                "shadow-xs",
                "transition-all duration-300",
                "hover:shadow-md",
                "hover:border-zinc-300/50 dark:hover:border-zinc-700/50",
                item.className,
              )}
            >
              <div className="absolute inset-0">
                <Image src={item.imageUrl || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <div className={cn("absolute inset-0", "bg-gradient-to-t from-black/90 via-black/40 to-transparent")} />
              </div>
              {item.badge && (
                <div className="absolute top-3 right-3">
                  <span
                    className={cn(
                      "px-2.5 py-1 rounded-full text-xs font-medium",
                      "bg-white/90 text-zinc-800",
                      "dark:bg-zinc-900/90 dark:text-zinc-200",
                      "backdrop-blur-md",
                      "shadow-xs",
                      "border border-white/20 dark:border-zinc-800/50",
                    )}
                  >
                    {item.badge.text}
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-semibold text-white dark:text-zinc-100 leading-snug">{item.title}</h3>
                    <p className="text-sm text-zinc-200 dark:text-zinc-300 line-clamp-2">{item.description}</p>
                  </div>
                  <div
                    className={cn(
                      "p-2 rounded-full",
                      "bg-white/10 dark:bg-zinc-800/50",
                      "backdrop-blur-md",
                      "group-hover:bg-green-700 dark:group-hover:bg-zinc-700/50",
                      "transition-colors duration-300 group",
                    )}
                  >
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:-rotate-12 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* See More Work Button */}
          <Link
            href="/work"
            className={cn(
              "group relative overflow-hidden rounded-2xl",
              "shadow-xs",
              "transition-all duration-300",
              "hover:shadow-md",
              "flex items-center justify-center",
              "col-span-2 row-span-1",
            )}
          >
            <div className="text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">See More Work</h3>
              <div className="flex items-center justify-center">
                <span className="mr-1 text-xs sm:text-sm">Explore Our Portfolio</span>
                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

