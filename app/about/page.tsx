import { Mail, Github, Twitter, Code2, Cpu, Database } from "lucide-react";

export default function AboutPage() {
  const skills = [
    { icon: Code2, name: "前端开发", description: "React, Next.js, TypeScript" },
    { icon: Cpu, name: "后端开发", description: "Python, Node.js" },
    { icon: Database, name: "数据处理", description: "图像处理, OCR, 机器学习" },
  ];

  return (
    <div className="flex flex-col bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter to-dark opacity-50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                关于 <span className="text-primary">我</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 text-lg md:text-xl">
                热爱编程,专注于开发实用的工具和应用
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="w-full py-12 md:py-24 bg-dark">
        <div className="container max-w-4xl">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">
              简<span className="text-primary">介</span>
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-400 leading-relaxed mb-4 text-lg">
                我是一名全栈开发者,对技术充满热情。我喜欢将想法转化为实用的工具,帮助解决实际问题。
              </p>
              <p className="text-gray-400 leading-relaxed mb-4 text-lg">
                我的工作涉及 Web 开发、图像处理、机器学习等多个领域。我相信技术应该服务于生活,让复杂的事情变得简单。
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                在这个网站上,你可以看到我开发的各种工具和项目。如果你有任何问题或建议,欢迎随时联系我!
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white">
              技能<span className="text-primary">专长</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center text-center p-8 rounded-3xl border border-dark-border bg-dark-card hover:border-primary/50 hover:shadow-glow transition-all"
                  >
                    <div className="mb-4 rounded-full bg-primary/10 p-4 border border-primary/30">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-white mb-2 text-lg">{skill.name}</h3>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">
              联系<span className="text-primary">方式</span>
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-gray-400 hover:text-primary transition-colors group">
                <div className="rounded-full bg-dark-lighter p-3 border border-dark-border group-hover:border-primary/50 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <a
                  href="mailto:your-email@example.com"
                  className="text-lg"
                >
                  your-email@example.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-400 hover:text-primary transition-colors group">
                <div className="rounded-full bg-dark-lighter p-3 border border-dark-border group-hover:border-primary/50 transition-colors">
                  <Github className="h-5 w-5" />
                </div>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg"
                >
                  github.com/yourusername
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-400 hover:text-primary transition-colors group">
                <div className="rounded-full bg-dark-lighter p-3 border border-dark-border group-hover:border-primary/50 transition-colors">
                  <Twitter className="h-5 w-5" />
                </div>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg"
                >
                  twitter.com/yourusername
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
