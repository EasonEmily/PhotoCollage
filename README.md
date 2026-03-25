# AI Photo Collage

> 把多张单人照合成逼真合照 — AI 让合照不再受距离限制

## 项目状态

This repository contains:
- `/web` - Next.js + Tailwind CSS 前端实现（MVP）
- `/AI_Photo_Collage_MVP.md` - 完整需求文档

## web 目录 - 技术栈

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel Ready

## 功能

- 📤 照片上传（支持拖拽、点击上传）
- 🎭 5 种合照模板可选
- ⚙️ AI 合成进度展示
- 📥 预览与下载
- 📖 使用教程页面
- 🔒 隐私政策页面

## 开发（web 目录）

```bash
cd web

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 启动
npm start
```

## 页面结构

- `/` - 首页
- `/upload` - 上传页面
- `/generate` - 生成中页面
- `/result` - 结果页面
- `/tutorial` - 使用教程
- `/privacy` - 隐私政策

## 产品目标

用户上传多张单人照片，AI 自动将人物融合到一张合影图中，生成自然逼真的群体合照。

**核心价值**：解决"想合照但人凑不齐"的场景痛点，让用户轻松获得"完美合照"。

---

*这是 MVP 版本，前端 UI 已完成，AI 合成部分为模拟实现。*
