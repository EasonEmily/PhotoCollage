"use client";

import Link from "next/link";

const FAQS = [
  {
    q: "Photo Collage 支持哪些图片格式？",
    a: "支持 JPG、JPEG、PNG 和 WebP 格式。",
  },
  {
    q: "一次可以上传多少张照片？",
    a: "每次最多上传 6 张单人照，最少需要 2 张。",
  },
  {
    q: "上传的照片会一直被保存吗？",
    a: "不会。为了保护您的隐私，所有上传的照片会在 24 小时后自动从服务器删除。",
  },
  {
    q: "合成一张合照需要多长时间？",
    a: "一般情况下，30 秒内即可完成。具体时间取决于照片数量和服务器负载。",
  },
  {
    q: "我可以自定义合照的背景吗？",
    a: "目前 MVP 版本提供 5 种预设模板。自定义背景功能将在后续版本中推出。",
  },
  {
    q: "生成的合照可以商用吗？",
    a: "可以。生成的合照版权归您所有，可用于个人或商业用途。",
  },
  {
    q: "为什么我的照片合成效果不理想？",
    a: "效果可能受照片质量、人脸遮挡、角度等因素影响。建议使用正面、清晰、无遮挡的照片以获得最佳效果。",
  },
];

export default function TutorialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">📸</span>
            <span className="font-bold text-xl text-gray-800">Photo Collage</span>
          </Link>
          <Link href="/upload" className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors">
            立即使用
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">使用教程</h1>
          <p className="text-xl text-gray-600">只需简单 3 步，即可生成完美合照</p>
        </div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex gap-6 items-start">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">进入上传页面</h3>
              <p className="text-gray-600 mb-4">
                点击「立即开始」或导航栏的「上传」按钮，进入照片上传页面。
              </p>
              <div className="bg-gray-50 rounded-xl p-4">
                <img
                  src="/tutorial-step1.png"
                  alt="步骤1示意图"
                  className="w-full max-w-md mx-auto rounded-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <p className="text-center text-sm text-gray-500 mt-2">
                  点击首页的「立即开始」按钮
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 flex gap-6 items-start">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">上传照片 & 选择模板</h3>
              <p className="text-gray-600 mb-4">
                将您的单人照片拖拽或点击上传（2-6张），然后从 5 种模板中选择喜欢的合照场景。
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  支持拖拽上传或点击选择文件
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  支持 JPG、PNG、WebP 格式
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  每张照片最大 10MB
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  点击模板卡片即可选中
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 flex gap-6 items-start">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">等待生成 & 下载</h3>
              <p className="text-gray-600 mb-4">
                点击「生成合照」，AI 会在 30 秒内完成合成。生成后可预览、下载或分享您的合照。
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-amber-800 text-sm">
                  💡 <strong>提示：</strong>生成过程中请保持页面打开，不要关闭浏览器。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 mb-16 text-white">
          <h2 className="text-2xl font-bold mb-6">📸 拍摄建议</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-4">
              <h3 className="font-semibold mb-2">✓ 推荐</h3>
              <ul className="text-sm space-y-1 text-white/90">
                <li>• 正面、清晰的单人照</li>
                <li>• 光线充足、面部无阴影</li>
                <li>• 面部无遮挡（无墨镜、口罩等）</li>
                <li>• 表情自然、双眼睁开</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h3 className="font-semibold mb-2">✗ 避免</h3>
              <ul className="text-sm space-y-1 text-white/90">
                <li>• 侧脸或背面照片</li>
                <li>• 脸部过小或模糊</li>
                <li>• 多人合照（请分别上传单人照）</li>
                <li>• 过度美颜导致失真</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">常见问题</h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <span className="font-semibold text-gray-900">{faq.q}</span>
                    <span className="text-primary-600 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">准备好创建你的合照了吗？</h2>
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 transition-colors shadow-lg shadow-primary-200"
          >
            立即开始
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">
            © 2026 Photo Collage · AI 合照神器 · 隐私保护
          </p>
        </div>
      </footer>
    </div>
  );
}
