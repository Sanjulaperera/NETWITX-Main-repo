'use client'

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MainNav } from "@/components/mainHeader"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <>
    <MainNav />
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
            <p className="text-gray-500">
              Please reach out to us and we will get back to you at the speed of light.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                required
                className="bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                placeholder="hello@johndoe.com"
                type="email"
                required
                className="bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                placeholder="Netwitx.com"
                className="bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message here"
                required
                className="min-h-[150px] bg-white"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-black/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
        <div className="lg:sticky lg:top-8 space-y-6 lg:flex lg:flex-col lg:justify-center lg:items-center lg:min-h-[calc(100vh-8rem)]">
          <div className="flex -space-x-2 overflow-hidden justify-center">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="inline-block h-12 w-12 rounded-full ring-4 ring-white"
              >
                <Image
                  src={`/placeholder.svg?height=48&width=48`}
                  alt={`User ${i + 1}`}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
            ))}
          </div>
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">
              Every AI is used by thousands of users
            </h2>
            <p className="text-gray-500">
              With lots of AI applications around, Everything AI stands out with its state of
              the art Shitposting capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
    <CTA />
    <Footer />
    </>
  )
}

