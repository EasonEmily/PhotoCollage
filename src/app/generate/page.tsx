"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const STEPS = [
  { id: 1, name: "上传照片", status: "complete", icon: "✅" },
  { id: 2, name: "人脸检测", status: "complete", icon: "🔍" },
  { id: 3, name: "姿态分析", status: "complete", icon: "📐" },
  { id: 4, name: "智能融合", status: "complete", icon: "✨" },
  { id: 5, name: "光影调整", status: "complete", icon: "🌟" },
  { id: 6, name: "生成完成", status: "complete", icon: "🎉" },
];

export default function GeneratePage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [template, setTemplate] = useState("indoor");
  const [photoCount, setPhotoCount] = useState("2");

  useEffect(() => {
    // Get template info from sessionStorage
    setTemplate(sessionStorage.getItem("selectedTemplate") || "indoor");
    setPhotoCount(sessionStorage.getItem("photoCount") || "2");

    // Simulate AI processing progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Redirect to result page after completion
          setTimeout(() => {
            router.push("/result");
          }, 500);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 200);

    // Update current step based on progress
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < STEPS.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1500);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, [router]);

  const templateName: Record<string, string> = {
    indoor: "室内合影",
    outdoor: "户外风景",
    studio: "摄影棚",
    party: "派对氛围",
    team: "团队站姿",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="max-w-lg w-full mx-4">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          {/* Title */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-bounce">⚙️</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">AI 正在生成合照</h1>
            <p className="text-gray-600">
              使用「{templateName[template]}」模板，融合 {photoCount} 张照片
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>处理进度</span>
              <span>{Math.min(Math.round(progress), 100)}%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(progress, 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-3">
            {STEPS.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                  index <= currentStep
                    ? "bg-primary-50 text-primary-700"
                    : "bg-gray-50 text-gray-400"
                }`}
              >
                <span className="text-xl">{step.icon}</span>
                <span className="font-medium">{step.name}</span>
                {index <= currentStep && progress < 100 && (
                  <div className="ml-auto">
                    <div className="w-4 h-4 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-8 p-4 bg-blue-50 rounded-xl">
            <p className="text-sm text-blue-700">
              💡 小提示：AI 正在分析人脸特征和姿态，请稍候片刻，预计还需要 {Math.max(0, Math.round((100 - progress) * 0.3))} 秒
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
