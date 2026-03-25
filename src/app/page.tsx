"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📸</span>
            <span className="font-bold text-xl text-gray-800">Photo Collage</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/tutorial" className="text-gray-600 hover:text-primary-600 transition-colors">
              使用教程
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors">
              隐私政策
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                AI 合照神器
                <span className="block text-primary-600 mt-2">打破距离限制</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                上传几张单人照，AI 瞬间合成逼真合照。家人、朋友、团队，无需聚齐，一键生成完美合影。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/upload"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors shadow-lg shadow-primary-200"
                >
                  立即开始
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/tutorial"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-primary-400 transition-colors"
                >
                  了解更多
                </Link>
              </div>
            </div>

            {/* Demo Preview */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-6 space-y-4">
                <div className="flex justify-center gap-4">
                  {/* Single photos */}
                  <div className="w-28 h-36 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-4xl shadow-md">
                    🧑
                  </div>
                  <div className="w-28 h-36 bg-gradient-to-br from-pink-100 to-orange-100 rounded-xl flex items-center justify-center text-4xl shadow-md">
                    👩
                  </div>
                  <div className="w-28 h-36 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl flex items-center justify-center text-4xl shadow-md">
                    👨
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-4xl">⬇️</div>
                </div>
                <div className="flex justify-center">
                  {/* Generated collage */}
                  <div className="w-80 h-48 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center text-6xl shadow-lg">
                    📸
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500">
                  3 张单人照 → 1 张完美合照
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            为什么选择 Photo Collage？
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">快速生成</h3>
              <p className="text-gray-600">30 秒内完成 AI 合成，无需等待太久</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🎨
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">自然逼真</h3>
              <p className="text-gray-600">AI 智能融合，光影肤色自然协调</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🔒
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">隐私安全</h3>
              <p className="text-gray-600">照片 24 小时自动删除，绝不泄露</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            只需 3 步
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="text-5xl mb-4">📤</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">上传照片</h3>
              <p className="text-gray-600">上传 2-6 张单人照，支持 JPG、PNG 格式</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">选择模板</h3>
              <p className="text-gray-600">挑选喜欢的合照场景模板</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">下载分享</h3>
              <p className="text-gray-600">AI 自动合成，一键下载或分享</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            还在等什么？立即体验 AI 合照！
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            完全免费，立即生成你的第一张 AI 合照
          </p>
          <Link
            href="/upload"
            className="inline-flex items-center px-10 py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-xl"
          >
            开始创建
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">
            © 2026 Photo Collage · AI 合照神器 · 隐私保护
          </p>
        </div>
      </footer>
    </div>
  );
}
