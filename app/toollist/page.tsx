import { tools } from "@/lib/tools";
import { ExternalLink, Github, FolderOpen } from "lucide-react";

export default function ToolList() {
  return (
    <div className="flex flex-col bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 bg-gradient-to-b from-dark-lighter to-dark">
        <div className="container">
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              工具<span className="text-primary">清单</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-[700px]">
              完整的工具列表，包含所有项目的详细信息和链接
            </p>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className="w-full py-8 md:py-12 bg-dark">
        <div className="container">
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto rounded-lg border border-dark-border bg-dark-card">
            <table className="w-full">
              <thead className="bg-dark-lighter border-b border-dark-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    工具名称
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    描述
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    核心功能
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    GitHub
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    Vercel
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                    本地路径
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-border">
                {tools.map((tool) => (
                  <tr
                    key={tool.id}
                    className="hover:bg-dark-lighter/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">{tool.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-400 max-w-xs">
                        {tool.description}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {tool.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                        {tool.tags.length > 3 && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-gray-800 text-gray-400">
                            +{tool.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {(tool.githubUrl || tool.sourceUrl) && (
                        <a
                          href={tool.githubUrl || tool.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          <span className="text-sm">查看</span>
                        </a>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {tool.vercelUrl ? (
                        <a
                          href={tool.vercelUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="text-sm">访问</span>
                        </a>
                      ) : (
                        <span className="text-sm text-gray-600">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {tool.localPath ? (
                        <div className="inline-flex items-center gap-1 text-sm text-gray-400">
                          <FolderOpen className="h-4 w-4" />
                          <code className="text-xs bg-dark-lighter px-2 py-1 rounded">
                            {tool.localPath.split("/").slice(-2).join("/")}
                          </code>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-600">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="rounded-lg border border-dark-border bg-dark-card p-6 space-y-4"
              >
                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-gray-400">{tool.description}</p>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-300 mb-2">
                    核心功能
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  {(tool.githubUrl || tool.sourceUrl) && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">GitHub:</span>
                      <a
                        href={tool.githubUrl || tool.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        <span className="text-sm">查看代码</span>
                      </a>
                    </div>
                  )}

                  {tool.vercelUrl && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Vercel:</span>
                      <a
                        href={tool.vercelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm">访问应用</span>
                      </a>
                    </div>
                  )}

                  {tool.localPath && (
                    <div className="flex items-start justify-between">
                      <span className="text-sm text-gray-400">本地路径:</span>
                      <code className="text-xs bg-dark-lighter px-2 py-1 rounded text-gray-400 max-w-[60%] break-all">
                        {tool.localPath}
                      </code>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {tools.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-gray-400">还没有添加任何工具</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
