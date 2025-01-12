'use client'

import { useState } from "react";
import { Mail, Phone, Calendar } from "lucide-react";
import {Button} from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import BookaCallButton from "./ui/Bookacall-button";

export default function BookACall() {
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleEmailClick = () => {
    window.location.href = "mailto:contact@netwitx.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+61475426888";
  };
    return (
      <Dialog open={isMainOpen} onOpenChange={setIsMainOpen}>
      <DialogTrigger asChild>
        <BookaCallButton />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Choose a Contact Method</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button onClick={handleEmailClick} className="flex items-center justify-start gap-2">
            <Mail className="h-4 w-4" /> Email Us
          </Button>
          <Button onClick={handlePhoneClick} className="flex items-center justify-start gap-2">
            <Phone className="h-4 w-4" /> Call Us
          </Button>
          <Dialog open={isCalendlyOpen} onOpenChange={setIsCalendlyOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center justify-start gap-2">
                <Calendar className="h-4 w-4" /> Schedule Meeting
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
        </div>
      </DialogContent>
    </Dialog>
    )
}