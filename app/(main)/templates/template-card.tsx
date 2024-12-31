'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Template } from './mockData'
import { useRouter } from 'next/navigation'
import { useToast } from "@/hooks/use-toast"

interface TemplateCardProps {
  template: Template
  currentPage: number
}

export function TemplateCard({ template, currentPage }: TemplateCardProps) {
  const router = useRouter()
  const { toast } = useToast()

  const handleEditClick = () => {
    toast({
      title: "Feature not available",
      description: "The edit functionality is currently not available.",
      variant: "destructive",
    })
  }

  return (
    <Card className="group relative overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={template.imageUrl}
            alt={template.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button variant="secondary" className="mr-2" onClick={handleEditClick}>
              Edit
            </Button>
            <Button 
              variant="default" 
              onClick={() => router.push(`/templates/${template.id}?page=${currentPage}`)}
            >
              View
            </Button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{template.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{template.category}</p>
          <div className="flex flex-wrap gap-2">
            {template.tags.map(tag => (
              <span key={tag} className="text-xs bg-gray-200 rounded-full px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

