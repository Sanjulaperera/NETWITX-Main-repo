'use client'

import { useState } from "react";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import BookaCallButton from "./ui/Bookacall-button";

export default function BookACall() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <BookaCallButton/>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Schedule a Call</DialogTitle>
                </DialogHeader>
                <div className="h-[600px]">
                  <iframe
                    src="https://calendly.com/netwitx/30min"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
    )
}