'use client'

import { useState } from 'react'
import { TemplateCard } from './template-card'
import { Filters } from './filters'
import { Pagination } from './pagination'

interface Template {
  id: number
  title: string
  category: string
  tags: string[]
  imageUrl: string
}

interface TemplatesGridProps {
  initialTemplates: Template[]
}

export function TemplatesGrid({ initialTemplates }: TemplatesGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState<{ category: string; tags: string[] }>({
    category: '',
    tags: [],
  });
  const itemsPerPage = 12

  const filteredTemplates = initialTemplates.filter(template => {
    const categoryMatch = !filters.category || template.category === filters.category
    const tagsMatch = filters.tags.length === 0 || filters.tags.every(tag => template.tags.includes(tag))
    return categoryMatch && tagsMatch
  })

  const totalPages = Math.ceil(filteredTemplates.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const visibleTemplates = filteredTemplates.slice(startIndex, startIndex + itemsPerPage)

  return (
    <>
      <Filters filters={filters} setFilters={setFilters} setCurrentPage={setCurrentPage} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {visibleTemplates.map(template => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </>
  )
}

