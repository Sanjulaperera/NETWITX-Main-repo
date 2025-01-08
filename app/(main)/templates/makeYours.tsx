"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScriptCopyBtnDemo } from "@/components/templateIdcopy";

import { GlobeLock, Pencil, SearchCheck, MonitorSmartphone, Server, Headset  } from "lucide-react";


export function AnimatedModalDemo() {
  
  const images = [
    "https://uploadthing.com/f/3avCIVBvIockHS4uQcL6aoxm3XU5DeWJriNRbywnfjYV1tIl"
  ];
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-green-600 dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Make it Yours
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            🫵
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              You&apos;re only {" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
              One Click
              </span>{" "}
              away! 🤓
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="template images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <Pencil className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Customizable
                </span>
              </div>
              <div className="flex items-center justify-center">
                <GlobeLock className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Secured by Experts
                </span>
              </div>
              <div className="flex items-center justify-center">
                <SearchCheck className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                SEO Friendly
                </span>
              </div>
              <div className="flex  items-center justify-center">
                <MonitorSmartphone className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Resposive Design  
                </span>
              </div>
              <div className="flex items-center justify-center">
                <Server className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  99.9% Uptime
                </span>
              </div>
              <div className="flex items-center justify-center">
                <Headset className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  24/7 Support
                </span>
              </div>
            </div>
            <div className="">
              <ScriptCopyBtnDemo />
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <Button variant="secondary" className="px-2 py-1 dark:bg-black dark:border-black dark:text-white border rounded-md text-sm w-28">
              Cancel
            </Button>
            <Button variant="default" className="text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border w-28">
              Book Now
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
