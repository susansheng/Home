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
    description: "专业级UI设计稿字号检测工具，多次采样精确测量，支持11种字号的置信度标记",
    longDescription: "基于轮廓检测和水平投影的高精度字号检测工具。采用多参数采样取中位数、间隙感知边界检测、OCR高度约束等策略，精准还原设计稿字号。引入750px设计基准，支持20-40号共11种字号，每个检测结果附带匹配置信度（high/medium/low/uncertain）。提供PNG标注图和Markdown报告，结果页展示置信度条、字号分布柱状图和检测明细表。",
    image: "https://placehold.co/600x400/00ff87/0a0e1a?text=OCR+Font+Detector",
    tags: ["Python", "FastAPI", "EasyOCR", "OpenCV", "图像处理"],
    demoUrl: "http://127.0.0.1:8003",
    sourceUrl: "https://github.com/susansheng/Ocr_Font",
    githubUrl: "https://github.com/susansheng/Ocr_Font",
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
    name: "批量抠图工具",
    description: "基于 rembg 的批量抠图工具，支持多模型选择、投影保留和批量打包下载",
    longDescription: "基于 rembg (U2-Net) 的本地批量抠图工具，纯本地运行无数据泄露风险。支持 4 种模型切换（u2netp/u2net/silueta/isnet），提供投影保留功能（alpha matting 可调参数），批量上传自动处理并打包 ZIP 下载。Streamlit Web 界面，操作简单直观。",
    image: "https://placehold.co/600x400/00ff87/0a0e1a?text=Batch+Matting",
    tags: ["Python", "Streamlit", "rembg", "图像处理", "U2-Net"],
    demoUrl: "http://localhost:8501",
    sourceUrl: "https://github.com/susansheng/Matting-Tool",
    githubUrl: "https://github.com/susansheng/Matting-Tool",
    vercelUrl: "",
    localPath: "/Users/sxsheng/Documents/代码/汇总/抠图工具",
    featured: true,
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
  {
    id: "image-boundary-checker",
    name: "图片边界验收工具",
    description: "自动检测图片是否符合边界规范，支持智能缩放和可视化边框叠加",
    longDescription: "基于Python Flask和Pillow构建的图片规范检测工具。自动将任意尺寸图片缩放到300×200进行检测，逐像素检查是否在安全区域内。提供红色边框和绿色边界线的可视化叠加，直观显示超出边界的部分。支持拖拽上传，实时预览检测结果。",
    image: "https://placehold.co/600x400/00ff87/0a0e1a?text=Image+Boundary+Checker",
    tags: ["Python", "Flask", "Pillow", "图像处理", "Vercel"],
    demoUrl: "https://image-boundary-checker.vercel.app",
    sourceUrl: "https://github.com/susansheng/image-boundary-checker",
    githubUrl: "https://github.com/susansheng/image-boundary-checker",
    vercelUrl: "https://image-boundary-checker.vercel.app",
    localPath: "/Users/sxsheng/Documents/代码/图片边界验收工具",
    featured: true,
  },
];

export function getToolById(id: string): Tool | undefined {
  return tools.find((tool) => tool.id === id);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((tool) => tool.featured);
}
