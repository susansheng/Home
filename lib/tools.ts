export interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  sourceUrl?: string;
  vercelUrl?: string;
  githubUrl?: string;
  localPath?: string;
  featured?: boolean;
}

export const tools: Tool[] = [
  {
    id: "portfolio-website",
    name: "我的工具集网站",
    description: "个人工具展示平台，集中管理和展示所有开发项目的信息和链接",
    longDescription: "基于 Next.js 15 和 TypeScript 构建的现代化工具展示网站。支持响应式布局，提供工具卡片展示和详细清单视图。采用 Tailwind CSS 设计系统，深色主题界面。部署在 Vercel 上，支持自动化部署和更新。",
    image: "https://placehold.co/600x400/00ff87/0a0e1a?text=Portfolio+Website",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    demoUrl: "https://portfolio-website-seven-theta-54.vercel.app",
    sourceUrl: "https://github.com/susansheng/Home",
    githubUrl: "https://github.com/susansheng/Home",
    vercelUrl: "https://portfolio-website-seven-theta-54.vercel.app",
    localPath: "/Users/sxsheng/Documents/代码/汇总/portfolio-website",
    featured: false,
  },
  {
    id: "ocr-tool",
    name: "字号检测工具",
    description: "专业级UI设计稿字号检测工具，精确检测字号、字重、行高、字间距和颜色",
    longDescription: "基于轮廓检测和水平投影的高精度字号检测工具。引入750px设计基准，检测结果直接对应设计稿标准。支持多维度分析（字号、字重、字体、颜色、行高、字间距），提供PNG标注图和Markdown报告，适用于UI设计验收和规范检查。",
    image: "https://placehold.co/600x400/00ff87/0a0e1a?text=OCR+Font+Detector",
    tags: ["Python", "FastAPI", "OCR", "图像处理", "OpenCV"],
    demoUrl: "http://127.0.0.1:8003",
    sourceUrl: "https://github.com/susansheng/ocr-font-size-detection",
    githubUrl: "https://github.com/susansheng/ocr-font-size-detection",
    vercelUrl: "",
    localPath: "/Users/sxsheng/Documents/代码/字号检测工具迭代版本",
    featured: true,
  },
  {
    id: "data-analysis-tool",
    name: "数据分析工具",
    description: "强大的数据分析和可视化工具，支持多种数据格式导入和处理",
    longDescription: "基于Flask构建的数据分析Web应用，提供数据导入、清洗、分析和可视化功能。支持CSV、Excel等多种格式，内置多种统计分析方法和图表展示，适合数据分析师和研究人员使用。",
    image: "https://placehold.co/600x400/00ff87/0a0e1a?text=Data+Analysis",
    tags: ["Python", "Flask", "数据分析", "Pandas", "可视化"],
    demoUrl: "https://data-analysis-sigma-smoky.vercel.app",
    sourceUrl: "https://github.com/susansheng/Data_Analysis",
    githubUrl: "https://github.com/susansheng/Data_Analysis",
    vercelUrl: "https://data-analysis-sigma-smoky.vercel.app",
    localPath: "/Users/sxsheng/Documents/代码/数据分析工具",
    featured: true,
  },
  {
    id: "matting-tool",
    name: "智能抠图工具",
    description: "一键式图像抠图工具，支持人像和物体智能分离",
    longDescription: "基于深度学习的图像抠图工具，能够快速准确地将人像或物体从背景中分离出来。支持批量处理，适合电商、设计等场景。",
    image: "https://placehold.co/600x400/00ff87/0a0e1a?text=Matting+Tool",
    tags: ["Python", "深度学习", "图像处理"],
    demoUrl: "http://127.0.0.1:5002",
    sourceUrl: "https://github.com/susansheng/smart-matting-tool",
    githubUrl: "https://github.com/susansheng/smart-matting-tool",
    vercelUrl: "",
    localPath: "/Users/sxsheng/Documents/代码/抠图工具",
    featured: false,
  },
  {
    id: "ocr-font-recognition",
    name: "OCR字体识别工具",
    description: "智能OCR文字检测与字体识别系统，支持3473种Google Fonts识别",
    longDescription: "基于PaddleOCR和Storia-AI font-classify的完整OCR+字体识别Pipeline。支持多语言文本检测（中英日韩），自动识别字体名称、字号、颜色等属性。提供Web界面和Python API，输出带标注的可视化图片和结构化JSON数据，适用于设计稿分析和字体研究。",
    image: "/images/ocr-font-recognition.png",
    tags: ["Python", "Flask", "PaddleOCR", "深度学习", "字体识别"],
    demoUrl: "http://localhost:5000",
    sourceUrl: "https://github.com/susansheng/ocr-font-recognition",
    githubUrl: "https://github.com/susansheng/ocr-font-recognition",
    vercelUrl: "",
    localPath: "/Users/sxsheng/Documents/代码/其他杂七杂八的",
    featured: true,
  },
  {
    id: "design-qa-tool",
    name: "设计验收对比工具",
    description: "专业的UI设计稿与开发实现像素级对比验收工具，支持三种对比模式和自动化报告生成",
    longDescription: "基于纯前端技术栈的设计验收工具。提供滑块对比、差异高亮、测量标注三种模式，支持像素级精度验收。自动计算验收得分，生成图文报告支持导出为PDF或长图。基于750px设计基准，适用于移动端和响应式界面验收。",
    image: "https://placehold.co/600x400/00ff87/0a0e1a?text=Design+QA+Tool",
    tags: ["HTML5", "Canvas", "Tailwind CSS", "图像处理", "UI验收"],
    demoUrl: "/design-qa-tool.html",
    sourceUrl: "https://github.com/susansheng/Home",
    githubUrl: "https://github.com/susansheng/Home",
    vercelUrl: "https://portfolio-website-seven-theta-54.vercel.app/design-qa-tool.html",
    localPath: "/Users/sxsheng/Documents/代码/验收工具",
    featured: true,
  },
  {
    id: "ui-animation-playground",
    name: "UI 动效 Playground",
    description: "收集和展示市面上常见 UI 动效的灵感库，包含32种精选动效效果",
    longDescription: "基于 React + TypeScript + Vite 构建的 UI 动效灵感库。收录按钮、文字、标签/徽章、卡片等4大类共32种精选动效，支持实时预览和分类筛选。纯 CSS 动画实现，代码简洁高效，帮助设计师和开发者快速找到合适的动效方案，可直接复制代码到项目中使用。",
    image: "https://placehold.co/600x400/00ff87/0a0e1a?text=UI+Animation",
    tags: ["React", "TypeScript", "Vite", "CSS Animations", "UI设计"],
    demoUrl: "https://ui-animation-playground.vercel.app",
    sourceUrl: "https://github.com/susansheng/ui-animation-playground",
    githubUrl: "https://github.com/susansheng/ui-animation-playground",
    vercelUrl: "https://ui-animation-playground.vercel.app",
    localPath: "/Users/sxsheng/Documents/代码/lottie动画",
    featured: true,
  },
];

export function getToolById(id: string): Tool | undefined {
  return tools.find((tool) => tool.id === id);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((tool) => tool.featured);
}
