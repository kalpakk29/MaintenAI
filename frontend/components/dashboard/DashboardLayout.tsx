import { ReactNode } from "react";
import Sidebar from "@/components/dashboard/Siderbar";
import Topbar from "@/components/dashboard/Topbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Topbar />

        <main className="flex-1 overflow-y-auto bg-slate-950 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}