"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Photo {
  id: string;
  file: File;
  preview: string;
}

interface Template {
  id: string;
  name: string;
  preview: string;
  emoji: string;
}

const TEMPLATES: Template[] = [
  { id: "indoor", name: "室内合影", preview: "bg-gradient-to-br from-amber-100 to-orange-200", emoji: "🏠" },
  { id: "outdoor", name: "户外风景", preview: "bg-gradient-to-br from-green-200 to-blue-300", emoji: "🌿" },
  { id: "studio", name: "摄影棚", preview: "bg-gradient-to-br from-gray-300 to-gray-500", emoji: "📷" },
  { id: "party", name: "派对氛围", preview: "bg-gradient-to-br from-purple-300 to-pink-400", emoji: "🎉" },
  { id: "team", name: "团队站姿", preview: "bg-gradient-to-br from-blue-400 to-indigo-600", emoji: "👔" },
];

const MAX_FILES = 6;
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

export default function UploadPage() {
  const router = useRouter();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("indoor");
  const [isDragActive, setIsDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  }, []);

  const validateFile = (file: File): string | null => {
    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type)) {
      return `${file.name} 格式不支持，请上传 JPG、PNG 或 WebP`;
    }
    if (file.size > MAX_SIZE) {
      return `${file.name} 超过 10MB 限制`;
    }
    return null;
  };

  const addFiles = (files: FileList) => {
    setError(null);
    const remainingSlots = MAX_FILES - photos.length;
    
    if (files.length > remainingSlots) {
      setError(`最多只能上传 ${MAX_FILES} 张照片`);
      return;
    }

    const newPhotos: Photo[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const error = validateFile(file);
      if (error) {
        setError(error);
        continue;
      }
      newPhotos.push({
        id: `${Date.now()}-${i}`,
        file,
        preview: URL.createObjectURL(file),
      });
    }

    setPhotos((prev) => [...prev, ...newPhotos]);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addFiles(e.dataTransfer.files);
    }
  }, [photos]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      addFiles(e.target.files);
    }
  };

  const removePhoto = (id: string) => {
    setPhotos((prev) => {
      const photo = prev.find((p) => p.id === id);
      if (photo) {
        URL.revokeObjectURL(photo.preview);
      }
      return prev.filter((p) => p.id !== id);
    });
    setError(null);
  };

  const handleGenerate = () => {
    if (photos.length < 2) {
      setError("请至少上传 2 张照片");
      return;
    }
    // Store selected template in sessionStorage for the result page
    sessionStorage.setItem("selectedTemplate", selectedTemplate);
    sessionStorage.setItem("photoCount", photos.length.toString());
    router.push("/generate");
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
          <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
            返回首页
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold">1</div>
            <span className="text-primary-600 font-medium">上传照片</span>
          </div>
          <div className="w-12 h-0.5 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center font-semibold">2</div>
            <span className="text-gray-500">生成中</span>
          </div>
          <div className="w-12 h-0.5 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center font-semibold">3</div>
            <span className="text-gray-500">下载结果</span>
          </div>
        </div>

        {/* Photo Upload Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">上传单人照片</h2>
          <p className="text-gray-600 mb-6">
            上传 2-{MAX_FILES} 张单人照，支持 JPG、PNG、WebP 格式，每张不超过 10MB
          </p>

          {/* Drop Zone */}
          <div
            className={`drop-zone ${isDragActive ? "active" : ""}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="file-input"
              className="hidden"
              accept=".jpg,.jpeg,.png,.webp"
              multiple
              onChange={handleFileInput}
            />
            <label htmlFor="file-input" className="cursor-pointer">
              <div className="text-6xl mb-4">📁</div>
              <p className="text-lg font-medium text-gray-700">
                拖拽照片到这里，或 <span className="text-primary-600 underline">点击选择文件</span>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                最多 {MAX_FILES} 张照片，已上传 {photos.length} 张
              </p>
            </label>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Uploaded Photos */}
          {photos.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">已上传的照片 ({photos.length}/{MAX_FILES})</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {photos.map((photo) => (
                  <div key={photo.id} className="uploaded-photo aspect-[3/4]">
                    <img
                      src={photo.preview}
                      alt="Uploaded"
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => removePhoto(photo.id)}
                      className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Template Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">选择合照模板</h2>
          <p className="text-gray-600 mb-6">选择一个喜欢的合照场景背景</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {TEMPLATES.map((template) => (
              <div
                key={template.id}
                className={`template-card ${selectedTemplate === template.id ? "selected" : ""}`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className={`w-full aspect-[3/4] ${template.preview} flex items-center justify-center`}>
                  <span className="text-4xl">{template.emoji}</span>
                </div>
                <div className="p-2 text-center">
                  <span className="text-sm font-medium text-gray-700">{template.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
          >
            取消
          </Link>
          <button
            onClick={handleGenerate}
            disabled={photos.length < 2}
            className={`px-8 py-4 rounded-full font-semibold text-white transition-all ${
              photos.length < 2
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-200"
            }`}
          >
            生成合照
          </button>
        </div>
      </main>
    </div>
  );
}
