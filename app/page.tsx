import ToolCard from "@/components/ToolCard";
import { tools } from "@/lib/tools";

export default function Home() {
  return (
    <div className="flex flex-col bg-dark">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-32 lg:py-40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter to-dark opacity-50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                欢迎来到我的
                <span className="block mt-2 text-primary">工具集</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 text-lg md:text-xl leading-relaxed">
                这里展示了我开发的各种 Web 应用和工具
                <br />
                涵盖图像处理、文字识别等多个领域
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="w-full py-12 md:py-24 bg-dark">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3 text-white">
              我的 <span className="text-primary">工具</span>
            </h2>
            <p className="text-gray-400 md:text-lg">
              浏览我开发的所有项目和工具
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
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
