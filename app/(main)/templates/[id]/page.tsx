"use client";

import { useState, useEffect, use } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PreviewHeader } from "../preview-header";
import { mockTemplates } from "../mockData";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function TemplatePreviewer({ params }: PageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [view, setView] = useState<"desktop" | "mobile">("desktop");
  const [error, setError] = useState<string | null>(null);

  // Unwrap the params Promise using React.use()
  const { id } = use(params);
  const template = mockTemplates.find((t) => t.id === parseInt(id));
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    if (!template) {
      setError("Template not found");
    }
  }, [template]);

  if (!template) {
    return <div className="p-4">Template not found</div>;
  }

  const handleIframeError = () => {
    setError("Failed to load the template preview. Please try again later.");
  };

  return (
    <div className="flex flex-col h-screen">
      <PreviewHeader
        title={template.title}
        onBack={() => router.push(`/templates?page=${currentPage}`)}
        onViewChange={setView}
        currentView={view}
        currentPage={currentPage}
      />
      <div className="flex-grow overflow-hidden p-4 bg-gray-100">
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div
            className={`w-full h-full ${
              view === "mobile" ? "max-w-sm mx-auto" : ""
            }`}
          >
            <iframe
              src={template.link}
              className="w-full h-full border-2 border-gray-300 rounded-lg bg-white"
              onError={handleIframeError}
            />
          </div>
        )}
      </div>
    </div>
  );
}
