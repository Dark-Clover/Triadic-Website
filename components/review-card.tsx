"use client"

import { cn } from "@/lib/utils"
import { User } from "lucide-react"

interface ReviewCardProps {
  name: string
  username: string
  body: string
  img?: string
}

export default function ReviewCard({ name, username, body, img }: ReviewCardProps) {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-2xl border p-4 mx-2",
        "border-gray-800 bg-gray-900 hover:bg-gray-800",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {img ? (
          <img className="rounded-full w-8 h-8" alt={name} src={img || "/placeholder.svg"} />
        ) : (
          <div className="w-8 h-8 rounded-full bg-[var(--primary-color)]/20 flex items-center justify-center">
            <User className="w-4 h-4 text-[var(--accent-color)]" />
          </div>
        )}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">{name}</figcaption>
          <p className="text-xs font-medium text-gray-500">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-300">{body}</blockquote>
    </figure>
  )
}
