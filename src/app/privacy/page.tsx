import Link from "next/link";

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">隐私政策</h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. 信息收集</h2>
            <p className="text-gray-600 leading-relaxed">
              Photo Collage（「我们」）在您使用我们的服务时，会收集您主动上传的照片信息。
              这些照片仅用于为您提供 AI 合照合成服务。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. 信息使用</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              我们收集的照片将用于：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>执行 AI 人脸检测和图像融合</li>
              <li>生成您请求的合照图像</li>
              <li>提供下载和分享功能</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. 信息存储</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              为了保护您的隐私：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>所有上传的照片将在 <strong>24 小时后自动从服务器删除</strong></li>
              <li>照片仅存储在加密的云服务器上</li>
              <li>生成后的合照由您自行保存，不在我们的服务器上留存</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. 信息共享</h2>
            <p className="text-gray-600 leading-relaxed">
              我们承诺不会向任何第三方出售、交易或转让您的照片和个人信息。
              除非获得您的明确同意，或法律法规要求，否则我们不会与任何外部公司共享您的数据。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Cookie 使用</h2>
            <p className="text-gray-600 leading-relaxed">
              我们使用 Cookie 来记住您的偏好设置和会话信息，以确保您获得最佳的用户体验。
              您可以通过浏览器设置禁用 Cookie，但这可能会影响某些功能。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. 您的权利</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              根据适用的数据保护法律，您拥有以下权利：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>了解我们如何处理您的数据</li>
              <li>请求删除您的数据</li>
              <li>撤回对数据处理的同意</li>
              <li>联系我们了解更多关于您的数据权利</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. 儿童隐私</h2>
            <p className="text-gray-600 leading-relaxed">
              我们的服务不面向 13 岁以下的儿童。我们不会故意收集儿童的个人信息。
              如果您发现我们收集了儿童的信息，请联系我们以便我们删除相关数据。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. 政策更新</h2>
            <p className="text-gray-600 leading-relaxed">
              我们可能会不时更新本隐私政策。任何更新都将在此页面上发布，
              并在重大变更时通过网站公告或电子邮件通知您。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. 联系我们</h2>
            <p className="text-gray-600 leading-relaxed">
              如果您对本隐私政策有任何疑问或担忧，请通过以下方式联系我们：
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <p className="text-gray-700">📧 邮箱：privacy@photocollage.app</p>
              <p className="text-gray-700 mt-2">📅 最后更新日期：2026 年 3 月 25 日</p>
            </div>
          </section>
        </div>

        {/* Back Home */}
        <div className="text-center mt-8">
          <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium">
            ← 返回首页
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
