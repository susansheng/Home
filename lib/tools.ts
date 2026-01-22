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
    id: "ocr-tool",
    name: "字号检测工具",
    description: "专业级UI设计稿字号检测工具，精确检测字号、字重、行高、字间距和颜色",
    longDescription: "基于轮廓检测和水平投影的高精度字号检测工具。引入750px设计基准，检测结果直接对应设计稿标准。支持多维度分析（字号、字重、字体、颜色、行高、字间距），提供PNG标注图和Markdown报告，适用于UI设计验收和规范检查。",
    image: "https://placehold.co/600x400/00ff87/0a0e1a?text=OCR+Font+Detector",
    tags: ["Python", "FastAPI", "OCR", "图像处理", "OpenCV"],
    demoUrl: "http://127.0.0.1:8000",
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
];

export function getToolById(id: string): Tool | undefined {
  return tools.find((tool) => tool.id === id);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((tool) => tool.featured);
}
