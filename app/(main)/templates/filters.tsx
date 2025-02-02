'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface FiltersProps {
  filters: {
    categories: string[]
    tags: string[]
  }
  setFilters: React.Dispatch<React.SetStateAction<{ categories: string[]; tags: string[] }>>
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export function Filters({ filters, setFilters, setCurrentPage }: FiltersProps) {
  const categories = [
    'All', 'Business', 'Personal', 'Portfolio', 'E-commerce', 'Blog', 'Marketing', 
    'Fashion', 'Interior Design', 'Corporate', 'Food & Beverage', 'Health & Wellness', 
    'Travel', 'Creative', 'Retail', 'Publishing', 'Professional', 'Lifestyle', 
    'Home & Garden', 'Enterprise', 'Restaurant', 'Sports', 'Service'
  ]
  const tags = [
    'Free', 'Premium',
  ]

  const handleCategoryChange = (value: string) => {
    setFilters(prev => ({ 
      ...prev, 
      categories: value === 'All' ? [] : [value]
    }))
    setCurrentPage(1)
  }

  const handleTagChange = (tag: string) => {
    setFilters(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }))
    setCurrentPage(1)
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="w-full md:w-1/3">
        <Select onValueChange={handleCategoryChange} value={filters.categories[0] || 'All'}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="w-full md:w-2/3 flex flex-wrap gap-4">
        {tags.map(tag => (
          <div key={tag} className="flex items-center space-x-2">
            <Checkbox
              id={tag}
              checked={filters.tags.includes(tag)}
              onCheckedChange={() => handleTagChange(tag)}
            />
            <Label htmlFor={tag}>{tag}</Label>
          </div>
        ))}
      </div>
    </div>
  )
}

