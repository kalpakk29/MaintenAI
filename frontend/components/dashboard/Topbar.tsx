"use client";

import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Welcome back, Kalpak 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900 px-4 py-3">

          <Search size={18} className="text-slate-500" />

          <input
            placeholder="Search machines..."
            className="ml-3 w-64 bg-transparent outline-none placeholder:text-slate-500"
          />

        </div>

        {/* Notification */}
        <button className="rounded-xl bg-slate-900 p-3 transition hover:bg-slate-800">

          <Bell size={20} className="text-slate-300" />

        </button>

        {/* User */}
        <div className="flex items-center gap-3 rounded-xl bg-slate-900 px-4 py-2">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg font-bold">
            K
          </div>

          <div>

            <p className="font-semibold text-white">
              Kalpak
            </p>

            <p className="text-xs text-slate-400">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}