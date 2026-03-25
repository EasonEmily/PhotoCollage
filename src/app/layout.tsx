import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Photo Collage - AI 合照神器",
  description: "上传单人照，AI 自动合成逼真合照",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {children}
      </body>
    </html>
  );
}
