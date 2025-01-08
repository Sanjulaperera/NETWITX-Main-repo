import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbarSecondary";
import { Toaster } from "@/components/ui/toaster";

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />
      {children}
      <CTA />
      <Footer />
      <Toaster />
    </>
  );
}
