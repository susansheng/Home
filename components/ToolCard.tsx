"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import type { Tool } from "@/lib/tools";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  tool: Tool;
  className?: string;
}

export default function ToolCard({ tool, className }: ToolCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-dark-border bg-dark-card shadow-lg transition-all hover:shadow-glow hover:border-primary/50",
        className
      )}
    >
      {/* Clickable Card Wrapper */}
      <Link href={`/tools/${tool.id}`} className="block">
        {/* Tool Image */}
        <div className="aspect-video w-full overflow-hidden bg-dark-lighter">
          <Image
            src={tool.image}
            alt={tool.name}
            width={400}
            height={225}
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Tool Info */}
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-white group-hover:text-primary transition-colors">
            {tool.name}
          </h3>
          <p className="mb-4 text-sm text-gray-400 line-clamp-2">
            {tool.description}
          </p>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {tool.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-dark-lighter px-4 py-2 text-xs font-medium text-primary border border-primary/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* Links - Outside of main link to prevent nested links */}
      <div className="px-6 pb-6 flex gap-3">
        {tool.demoUrl && (
          <Link
            href={tool.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-light transition-colors"
          >
            在线演示
            <ExternalLink className="h-4 w-4" />
          </Link>
        )}
        {tool.sourceUrl && (
          <Link
            href={tool.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            源代码
            <Github className="h-4 w-4" />
          </Link>
        )}
      </div>

      {/* Featured Badge */}
      {tool.featured && (
        <div className="absolute right-4 top-4">
          <span className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-xs font-bold text-dark shadow-glow">
            精选
          </span>
        </div>
      )}
    </div>
  );
}
