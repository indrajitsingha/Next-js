import { CalendarDays, Clock, User } from "lucide-react"
import Link from "next/link"

export function BlogCard({ itemsDetails }) {
  return (
    <div className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white rounded-lg border border-gray-200">
      <Link href={`/blog/${itemsDetails?.id}`} className="block">
        {itemsDetails?.imageUrl && (
          <div className="aspect-video overflow-hidden">
            <img
              src={itemsDetails?.imageUrl || "/placeholder.svg"}
              alt={itemsDetails?.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6 space-y-2">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium  text-white"  style={{ background: "var(--color-primary)" }}>
              {itemsDetails?.category}
            </span>
          </div>
          <h3 className="text-xl font-semibold leading-tight group-hover:text-blue-600 transition-colors">
            {itemsDetails?.title}
          </h3>
        </div>
        <div className="px-6 pb-4">
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {itemsDetails?.content?.slice(0, 200)} more ...
          </p>
        </div>
        <div className="px-6 pb-6 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{itemsDetails?.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="h-3 w-3" />
              <span>{itemsDetails?.publishedAt}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{itemsDetails?.readTime}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
