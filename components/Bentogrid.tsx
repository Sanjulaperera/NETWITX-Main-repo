import React from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] gap-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={
            item.imageUrl ? (
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  priority
                />
              </div>
            ) : (
              item.header
            )
          }
          className={cn(
            "p-4 rounded-xl shadow-md border border-neutral-200 dark:border-neutral-700",
            item.className
          )}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 dark:bg-gradient-to-r dark:from-green-800 dark:via-blue-800 dark:to-purple-800 shadow-lg"></div>
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    imageUrl: "https://uploadthing.com/f/3avCIVBvIockwOpbWxz9oI0kwXa2BPpbCsMF7Dq8ezdYLhl6", // Replace with your Uploadthing image URL
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    imageUrl: "https://uploadthing.com/f/3avCIVBvIockw7KLpI7z9oI0kwXa2BPpbCsMF7Dq8ezdYLhl", // Replace with your Uploadthing image URL
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    imageUrl: "https://uploadthing.com/f/3avCIVBvIockcwrCvl095r6XeO3i8KQW7jabADyslhkBInpG", // Replace with your Uploadthing image URL
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    imageUrl: "https://uploadthing.com/f/3avCIVBvIockmBbuT9cNCtQ1fG2rkcMy0EnXYqPasuiem98A", // Replace with your Uploadthing image URL
  },
];
