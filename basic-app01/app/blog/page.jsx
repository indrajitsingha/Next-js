import { BlogCard } from '@/components/BlogCard'
import React from 'react'
import { blogData } from '../data'

export const metadata={
  title:"Blog || BlogSpace🚀"
}
const blog = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-balance mb-4">Latest Blog Posts</h1>
        <p className="text-muted-foreground text-lg">Discover insights, tutorials, and updates from our team</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {blogData?.map((itemsDetails, index) => <BlogCard itemsDetails={itemsDetails} key={itemsDetails?.id} />)}
      </div>
    </main >
  )
}

export default blog