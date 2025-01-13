'use client'

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function BookMeeting() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className="text-primary p-0 h-auto font-normal">
          Book a meeting
        </Button>
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

