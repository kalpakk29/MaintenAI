import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  preview: ReactNode;
}

export default function AuthLayout({
  children,
  preview,
}: AuthLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[220px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">

        {/* Form */}
        <div className="w-full max-w-md">
          {children}
        </div>

        {/* Dashboard Preview (desktop only) */}
        <div className="hidden xl:flex xl:ml-24">
          {preview}
        </div>

      </div>

    </main>
  );
}