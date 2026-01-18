import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getToolById } from "@/lib/tools";

interface ToolPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { id } = await params;
  const tool = getToolById(id);

  if (!tool) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-dark">
      {/* Back Button */}
      <div className="container py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          返回首页
        </Link>
      </div>

      {/* Tool Detail */}
      <div className="container pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Tool Image */}
          <div className="aspect-video w-full overflow-hidden rounded-3xl mb-10 border border-dark-border bg-dark-card">
            <Image
              src={tool.image}
              alt={tool.name}
              width={1200}
              height={675}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Tool Info */}
          <div className="space-y-8">
            {/* Title and Featured Badge */}
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                {tool.name}
              </h1>
              {tool.featured && (
                <span className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-bold text-dark shadow-glow">
                  精选
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-xl text-gray-400 leading-relaxed">
              {tool.description}
            </p>

            {/* Long Description */}
            {tool.longDescription && (
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  详细<span className="text-primary">介绍</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {tool.longDescription}
                </p>
              </div>
            )}

            {/* Tags */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">
                技术<span className="text-primary">栈</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-dark-lighter px-4 py-2 text-sm font-medium text-primary border border-primary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-6">
              {tool.demoUrl && (
                <Link
                  href={tool.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-dark hover:shadow-glow transition-all"
                >
                  在线演示
                  <ExternalLink className="h-5 w-5" />
                </Link>
              )}
              {tool.sourceUrl && (
                <Link
                  href={tool.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border-2 border-dark-border bg-dark-card px-8 py-4 text-base font-bold text-white hover:border-primary/50 hover:shadow-glow transition-all"
                >
                  查看源码
                  <Github className="h-5 w-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
