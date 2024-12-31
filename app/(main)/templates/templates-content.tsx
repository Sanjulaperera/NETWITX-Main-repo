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
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const page = parseInt(searchParams.get("page") || "1", 10);

  const filteredTemplates = type
    ? mockTemplates.filter(
        (template) =>
          template.category.toLowerCase().includes(type.toLowerCase()) ||
          template.tags.some((tag) =>
            tag.toLowerCase().includes(type.toLowerCase())
          )
      )
    : mockTemplates;

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          {type ? `${type} Templates` : "All Templates"}
        </h1>
        <Button variant="outline" asChild>
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>
      <TemplatesGrid initialTemplates={filteredTemplates} initialPage={page} />
    </>
  );
}
