"use client";

import { useState } from "react";
import Link from "next/link";

export default function ResultPage() {
  const [isDownloading, setIsDownloading] = useState(false);

  const templateName: Record<string, string> = {
    indoor: "室内合影",
    outdoor: "户外风景",
    studio: "摄影棚",
    party: "派对氛围",
    team: "团队站姿",
  };

  const template = typeof window !== "undefined" 
    ? sessionStorage.getItem("selectedTemplate") || "indoor"
    : "indoor";
  const photoCount = typeof window !== "undefined"
    ? sessionStorage.getItem("photoCount") || "2"
    : "2";

  const templateBg: Record<string, string> = {
    indoor: "from-amber-200 via-orange-300 to-yellow-200",
    outdoor: "from-green-200 via-teal-300 to-blue-300",
    studio: "from-gray-300 via-gray-400 to-gray-500",
    party: "from-purple-300 via-pink-400 to-red-300",
    team: "from-blue-400 via-indigo-500 to-purple-600",
  };

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download
    setTimeout(() => {
      setIsDownloading(false);
      alert("下载成功！照片已保存到您的设备。");
    }, 1500);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "我的 AI 合照",
        text: "用 Photo Collage AI 合照神器生成的合影，太棒了！",
        url: window.location.origin,
      });
    } else {
      navigator.clipboard.writeText(window.location.origin);
      alert("链接已复制到剪贴板！");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">📸</span>
            <span className="font-bold text-xl text-gray-800">Photo Collage</span>
          </Link>
          <Link href="/upload" className="text-primary-600 hover:text-primary-700 font-medium">
            创建新合照
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-12">
        {/* Success Banner */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">合照生成成功！</h1>
          <p className="text-gray-600">
            你的 {photoCount} 张单人照已完美融合为一张合影
          </p>
        </div>

        {/* Result Preview */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          {/* Generated Image */}
          <div className={`aspect-[4/3] bg-gradient-to-br ${templateBg[template]} flex items-center justify-center relative`}>
            {/* Mock generated collage */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Simulated group photo */}
                <div className="flex gap-2">
                  {Array.from({ length: Math.min(parseInt(photoCount), 4) }).map((_, i) => (
                    <div
                      key={i}
                      className="w-20 h-24 bg-white/90 rounded-xl shadow-lg flex items-center justify-center text-3xl backdrop-blur-sm"
                    >
                      {["🧑", "👩", "👨", "👴"][i]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Watermark */}
            <div className="absolute bottom-3 right-3 text-xs text-white/60 bg-black/30 px-2 py-1 rounded">
              PhotoCollage AI
            </div>
          </div>

          {/* Actions */}
          <div className="p-6">
            <div className="flex gap-4">
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors disabled:bg-gray-400"
              >
                {isDownloading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    下载中...
                  </>
                ) : (
                  <>
                    📥 下载照片
                  </>
                )}
              </button>
              <button
                onClick={handleShare}
                className="px-6 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
              >
                🔗 分享
              </button>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">📋 照片信息</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">模板</span>
              <span className="font-medium">{templateName[template]}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">融合照片数</span>
              <span className="font-medium">{photoCount} 张</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">生成时间</span>
              <span className="font-medium">2026-03-25</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">分辨率</span>
              <span className="font-medium">1920 × 1440 (4:3)</span>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
          <h3 className="font-semibold text-amber-800 mb-2">💡 温馨提示</h3>
          <ul className="text-sm text-amber-700 space-y-1">
            <li>• 照片将在 24 小时后自动删除</li>
            <li>• 下载后可自行保存，不会再被系统删除</li>
            <li>• 如需更高清分辨率，可升级为付费会员</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">觉得好用吗？分享给朋友吧！</p>
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
          >
            🚀 再创建一张
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
