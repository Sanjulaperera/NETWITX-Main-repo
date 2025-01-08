import { Suspense } from "react";
import { TemplatesContent } from "./templates-content";
import { Skeleton } from "@/components/ui/skeleton";
import { HeroParallaxDemo } from "@/components/templates-hero";


export default function TemplatesPage() {
  return (
    <>
      <section id="hero">
        <HeroParallaxDemo />
      </section>
      <section id="templates">
        <div className="container mx-auto px-4 py-8">
          <Suspense fallback={<TemplatesLoadingSkeleton />}>
            <TemplatesContent />
          </Suspense>
        </div>
      </section>
    </>
  );
}

function TemplatesLoadingSkeleton() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-10 w-32" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
      </div>
    </div>
  );
}
