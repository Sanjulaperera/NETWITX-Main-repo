"use client";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";
import SparklesText from "@/components/ui/sparkles-text";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  images: ImageProps[];
};

export type Header80Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header80 = (props: Header80Props) => {
  const { heading, images } = {
    ...Header80Defaults,
    ...props,
  };

  const transformRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: transformRef });
  const animatedScrollYProgress = useSpring(scrollYProgress, {
    bounce: 0,
  });
  const yFirst = useTransform(
    animatedScrollYProgress,
    [0, 1],
    ["0vh", "-87.5vh"]
  );
  const ySecond = useTransform(
    animatedScrollYProgress,
    [0, 1],
    ["0vh", "-39.6vh"]
  );

  return (
    <section
      ref={transformRef}
      className="relative h-[150vh] px-[5%] md:h-[300vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute bottom-0 left-0 right-auto top-0 z-10">
          <motion.div
            className="flex flex-col gap-[26vw] pt-[70vh]"
            style={{ y: yFirst }}
          >
            {images.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className={clsx("relative h-[35vw] pt-[120%] sm:h-auto", {
                  "w-[30vw] md:w-[28vw] lg:w-[22vw]": index === 0,
                  "left-[52vw] mt-[-46vw] w-[30vw] md:w-[28vw] lg:left-[58vw] lg:w-[22vw]":
                    index === 1,
                  "left-[4vw] mt-[-5vw] w-[28vw] md:w-[26vw] lg:w-[20vw]":
                    index === 2,
                  "left-[64vw] mt-[-45vw] w-[26vw] md:w-[24vw] lg:w-[18vw]":
                    index === 3,
                })}
              >
                <Image
                  src={image.src}
                  width={800}
                  height={800}
                  className="absolute inset-0 size-full object-cover rounded-xl"
                  alt={image.alt || "Image"}
                />
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-0 left-auto right-0 top-0 z-0"
          style={{ y: ySecond }}
        >
          <div className="flex flex-col gap-[26vw] pt-[70vh]">
            {images.slice(4).map((image, index) => (
              <div
                key={index}
                className={clsx(
                  "relative h-[35vw] pt-[120%] opacity-75 sm:h-auto",
                  {
                    "w-[28vw] md:w-[26vw] lg:w-[20vw]": index === 0,
                    "right-[50vw] mt-[-44vw] w-[26vw] md:w-[24vw] lg:right-[54vw] lg:w-[18vw]":
                      index === 1,
                  }
                )}
              >
                <Image
                  src={image.src}
                  width={600}
                  height={400}
                  className="absolute inset-0 size-full object-cover"
                  alt={image.alt || "Image"}
                />
              </div>
            ))}
          </div>
        </motion.div>
        <div className="container relative justify-center flex h-full items-center pb-24 pt-16 text-center md:pt-24 lg:py-28">
          <div>
            <h1 className="mb-5 text-6xl font-thin md:mb-6 md:text-7xl lg:text-8xl">
              <SparklesText text={heading} />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header80Defaults: Props = {
  heading: "Where Innovation meets Imagination",
  images: [
    {
      src: "https://uploadthing.com/f/3avCIVBvIockfc9ERnkWGxeAzvRh1lV6Q3bTqW8n4w2MDo0c",
      alt: "Website template 01",
    },
    {
      src: "https://uploadthing.com/f/3avCIVBvIockmPeDfBcNCtQ1fG2rkcMy0EnXYqPasuiem98A",
      alt: "Relume placeholder image 2",
    },
    {
      src: "https://uploadthing.com/f/3avCIVBvIockkJLtiVX7wqRLJu2leNs5VAGaxrbgHmXhO3Iv",
      alt: "Relume placeholder image 3",
    },
    {
      src: "https://uploadthing.com/f/3avCIVBvIockQNc6oD8xkN7co1ma8FwAqhdSHW54Tyi0ZeEI",
      alt: "Relume placeholder image 4",
    },
    {
      src: "https://uploadthing.com/f/3avCIVBvIockYkGmJkSpHyUGSs6apVMRKrPkvXu2mOg79ilB",
      alt: "Relume placeholder image 5",
    },
    {
      src: "https://uploadthing.com/f/3avCIVBvIockSdDm5b6gbomGwAQJYVnqg1TrL2acH9udD45B",
      alt: "Relume placeholder image 6",
    },
  ],
};
