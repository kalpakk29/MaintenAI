"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Cpu,
  Bot,
  FileText,
  BookOpen,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Machines",
    href: "/machines",
    icon: Cpu,
  },
  {
    name: "AI Assistant",
    href: "/assistant",
    icon: Bot,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    name: "Manuals",
    href: "/manuals",
    icon: BookOpen,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950">

      {/* Logo */}
      <div className="border-b border-slate-800 px-8 py-7">

        <Link href="/dashboard">
          <h1 className="logo cursor-pointer text-4xl text-white">
            Mainten<span className="text-blue-500">AI</span>
          </h1>
        </Link>

        <p className="mt-1 text-xs uppercase tracking-[0.35em] text-slate-500">
          Enterprise Platform
        </p>

      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 py-8">

        <div className="space-y-2">

          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center gap-4 rounded-xl px-5 py-4 text-slate-400 transition-all duration-300 hover:bg-slate-900 hover:text-white"
              >
                <Icon
                  size={20}
                  className="transition-colors group-hover:text-blue-400"
                />

                <span className="font-medium">
                  {item.name}
                </span>
              </Link>
            );
          })}

        </div>

      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 p-5">

        <button className="flex w-full items-center gap-3 rounded-xl bg-slate-900 px-4 py-4 text-slate-300 transition-all duration-300 hover:bg-red-500/10 hover:text-red-400">

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
}