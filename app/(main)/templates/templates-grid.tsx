'use client'

import { useState, useEffect } from 'react'
import { TemplateCard } from './template-card'
import { Filters } from './filters'
import { Pagination } from './pagination'
import { Template } from './mockData'

interface TemplatesGridProps {
  initialTemplates: Template[]
  initialPage: number
  searchTerm: string
}

export function TemplatesGrid({ initialTemplates, initialPage, searchTerm }: TemplatesGridProps) {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [filters, setFilters] = useState<{ categories: string[]; tags: string[] }>({ categories: [], tags: [] })
  const [templates, setTemplates] = useState(initialTemplates)
  const itemsPerPage = 12

  useEffect(() => {
    setTemplates(initialTemplates)
    setCurrentPage(initialPage)
  }, [initialTemplates, initialPage])

  const filteredTemplates = templates.filter(template => {
    const categoriesMatch = filters.categories.length === 0 || 
      filters.categories.some(category => template.category === category)
    const tagsMatch = filters.tags.length === 0 || 
      filters.tags.every(tag => template.tags.includes(tag))
    return categoriesMatch && tagsMatch
  })

  const totalPages = Math.ceil(filteredTemplates.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const visibleTemplates = filteredTemplates.slice(startIndex, startIndex + itemsPerPage)

  return (
    <>
      <Filters filters={filters} setFilters={setFilters} setCurrentPage={setCurrentPage} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {visibleTemplates.map(template => (
          <TemplateCard key={template.id} template={template} currentPage={currentPage} searchTerm={searchTerm} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </>
  )
}

