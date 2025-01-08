'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { PreviewHeader } from '../preview-header'
import { mockTemplates } from '../mockData'
import Safari from "@/components/ui/safari"


export default function TemplatePreviewer() {
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop')
  const [error, setError] = useState<string | null>(null)
  const params = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const id = params?.id as string
  const template = mockTemplates.find(t => t.id === parseInt(id))
  const currentPage = parseInt(searchParams.get('page') || '1', 10)

  useEffect(() => {
    if (!template) {
      setError('Template not found')
    }
  }, [template])

  if (!template) {
    return <div className="p-4">Template not found</div>
  }

  const handleIframeError = () => {
    setError('Failed to load the template preview. Please try again later.')
  }

  const handleBack = () => {
    router.push(`/templates?page=${currentPage}`)
  }

  return (
    <div className="flex flex-col h-screen">
      <PreviewHeader
        title={template.title}
        onViewChange={setView}
        currentView={view}
        currentPage={currentPage}
        onBack={handleBack}
      />
      <div className="flex-grow overflow-hidden p-4 bg-gray-100">
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className={`relative w-full h-full ${view === 'mobile' ? 'max-w-sm mx-auto' : ''}`}>
            {view === 'desktop' ? (
              <Safari url={`nextwitx.com/templates/${template.title}`} className="w-full h-full">
                <iframe
                  src={template.link}
                  className="w-full h-full border-none"
                  onError={handleIframeError}
                />
              </Safari>
            ) : (
              
                <iframe
                  src={template.link}
                  className="w-full h-full border-none"
                  onError={handleIframeError}
                />
             
            )}
          </div>
        )}
      </div>
    </div>
  )
}

