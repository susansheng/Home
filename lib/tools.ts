export interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export const tools: Tool[] = [
  {
    id: "ocr-tool",
    name: "字号检测工具",
    description: "专业级UI设计稿字号检测工具，精确检测字号、字重、行高、字间距和颜色",
    longDescription: "基于轮廓检测和水平投影的高精度字号检测工具。引入750px设计基准，检测结果直接对应设计稿标准。支持多维度分析（字号、字重、字体、颜色、行高、字间距），提供PNG标注图和Markdown报告，适用于UI设计验收和规范检查。",
    image: "https://placehold.co/600x400/00ff87/0a0e1a?text=OCR+Font+Detector",
    tags: ["Python", "FastAPI", "OCR", "图像处理", "OpenCV"],
    demoUrl: "http://127.0.0.1:8000",
    sourceUrl: "#",
    featured: true,
  },
  {
    id: "data-analysis-tool",
    name: "数据分析工具",
    description: "强大的数据分析和可视化工具，支持多种数据格式导入和处理",
    longDescription: "基于Flask构建的数据分析Web应用，提供数据导入、清洗、分析和可视化功能。支持CSV、Excel等多种格式，内置多种统计分析方法和图表展示，适合数据分析师和研究人员使用。",
    image: "https://placehold.co/600x400/00ff87/0a0e1a?text=Data+Analysis",
    tags: ["Python", "Flask", "数据分析", "Pandas", "可视化"],
    demoUrl: "http://127.0.0.1:5000",
    sourceUrl: "#",
    featured: true,
  },
  {
    id: "matting-tool",
    name: "智能抠图工具",
    description: "一键式图像抠图工具，支持人像和物体智能分离",
    longDescription: "基于深度学习的图像抠图工具，能够快速准确地将人像或物体从背景中分离出来。支持批量处理，适合电商、设计等场景。",
    image: "https://placehold.co/600x400/00ff87/0a0e1a?text=Matting+Tool",
    tags: ["Python", "深度学习", "图像处理"],
    demoUrl: "#",
    sourceUrl: "#",
    featured: false,
  },
];

export function getToolById(id: string): Tool | undefined {
  return tools.find((tool) => tool.id === id);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((tool) => tool.featured);
}
