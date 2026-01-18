# 我的工具集 - 个人项目展示网站

这是一个使用 Next.js 搭建的现代化个人工具展示网站,用于展示我开发的各种 Web 应用和工具。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **部署**: Vercel (推荐)

## 项目结构

```
portfolio-website/
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页（工具展示）
│   ├── about/             # 关于我页面
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Header.tsx        # 导航栏
│   ├── Footer.tsx        # 页脚
│   └── ToolCard.tsx      # 工具卡片
├── lib/                   # 工具函数和数据
│   ├── tools.ts          # 工具数据
│   └── utils.ts          # 工具函数
└── public/               # 静态资源
    └── images/           # 图片资源
```

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 3. 构建生产版本

```bash
npm run build
npm run start
```

## 自定义内容

### 添加工具

编辑 `lib/tools.ts` 文件,在 `tools` 数组中添加你的工具信息:

```typescript
{
  id: "your-tool-id",
  name: "工具名称",
  description: "简短描述",
  longDescription: "详细描述(可选)",
  image: "/images/your-tool.png", // 或使用 URL
  tags: ["React", "TypeScript"],
  demoUrl: "https://demo.example.com", // 可选
  sourceUrl: "https://github.com/...", // 可选
  featured: true // 可选,是否为精选工具
}
```

### 更新个人信息

1. **关于我页面**: 编辑 `app/about/page.tsx`
2. **联系方式**: 编辑 `components/Footer.tsx` 和 `app/about/page.tsx` 中的邮箱和社交媒体链接
3. **网站标题**: 编辑 `app/layout.tsx` 中的 metadata

### 添加工具截图

将工具截图放到 `public/images/` 目录下,然后在 `lib/tools.ts` 中引用:

```typescript
image: "/images/your-tool.png"
```

## 部署

### Vercel (推荐)

1. 将项目推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. Vercel 会自动检测 Next.js 并进行部署

或使用 Vercel CLI:

```bash
npm i -g vercel
vercel
```

### 其他平台

- **Netlify**: 支持 Next.js 部署
- **GitHub Pages**: 需要导出为静态网站 (`npm run build && npm run export`)
- **自托管**: 使用 `npm run build && npm run start`

## 功能特性

- ✅ 响应式设计,完美适配手机、平板和桌面
- ✅ 现代化的 UI 设计
- ✅ 工具卡片展示
- ✅ 关于我页面
- ✅ 社交媒体链接
- ✅ SEO 优化
- ✅ TypeScript 类型安全
- ✅ Tailwind CSS 样式

## 开发脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run start` - 运行生产版本
- `npm run lint` - 运行 ESLint 检查

## 下一步

1. **替换示例数据**: 在 `lib/tools.ts` 中用你的真实工具信息替换示例数据
2. **添加工具截图**: 将截图放到 `public/images/` 目录
3. **更新个人信息**: 修改关于我页面和联系方式
4. **部署上线**: 将网站部署到 Vercel 或其他平台

## 许可证

MIT

## 联系方式

如有问题,欢迎联系:
- 邮箱: your-email@example.com
- GitHub: github.com/yourusername
