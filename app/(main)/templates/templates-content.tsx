"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { TemplatesGrid } from "./templates-grid";
import { mockTemplates } from "./mockData";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TemplatesContent() {
  return (
    <Suspense>
      <TemplatesContentInner />
    </Suspense>
  );
}

function TemplatesContentInner() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const page = parseInt(searchParams.get('page') || '1', 10)

  const filteredTemplates = type 
    ? mockTemplates.filter(template => 
        template.category.toLowerCase().includes(type.toLowerCase()) ||
        template.tags.some(tag => tag.toLowerCase().includes(type.toLowerCase())) ||
        template.keywords.some(keyword => keyword.toLowerCase().includes(type.toLowerCase())) ||
        template.title.toLowerCase().includes(type.toLowerCase())
      )
    : mockTemplates

  return (
    <>
      <div className="flex flex-col gap-4 mb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          {type ? `${type} Templates` : "All Templates"}
        </h1>
        <Button variant="outline" asChild>
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>
      {type && (
          <p className="text-gray-600">
            Showing {filteredTemplates.length} result{filteredTemplates.length !== 1 ? 's' : ''} for &quot;{type}&quot;
          </p>
        )}
      </div>
      <TemplatesGrid initialTemplates={filteredTemplates} initialPage={page} searchTerm={type || ''} />
    </>
  );
}
