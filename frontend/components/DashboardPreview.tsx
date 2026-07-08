export default function DashboardPreview() {
  return (
    <div className="relative w-full max-w-md rotate-2 transition-transform duration-500 hover:rotate-0">

      {/* Glow */}
      <div className="absolute -left-12 top-10 -z-10 h-64 w-64 rounded-full bg-blue-500/20 blur-[140px]" />

      {/* Dashboard */}
      <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/80 shadow-[0_30px_80px_rgba(37,99,235,0.25)] backdrop-blur-xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
              MAINTENAI
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight text-white">
              Operations Dashboard
            </h2>
          </div>

          <div className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-400">
            ● Online
          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 p-6">

          <div className="rounded-2xl bg-slate-800 p-5">
            <p className="text-sm text-slate-400">Healthy Machines</p>
            <h3 className="mt-3 text-4xl font-black text-green-400">42</h3>
          </div>

          <div className="rounded-2xl bg-slate-800 p-5">
            <p className="text-sm text-slate-400">Critical Alerts</p>
            <h3 className="mt-3 text-4xl font-black text-red-400">5</h3>
          </div>

          <div className="rounded-2xl bg-slate-800 p-5">
            <p className="text-sm text-slate-400">AI Score</p>
            <h3 className="mt-3 text-4xl font-black text-blue-400">98%</h3>
          </div>

          <div className="rounded-2xl bg-slate-800 p-5">
            <p className="text-sm text-slate-400">Reports Today</p>
            <h3 className="mt-3 text-4xl font-black text-white">18</h3>
          </div>

        </div>

        {/* Chart */}
        <div className="px-6 pb-6">

          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-white">
              Machine Health
            </h3>

            <span className="text-sm text-slate-400">
              Last 7 Days
            </span>

          </div>

          <div className="flex h-28 items-end gap-2">

            <div className="h-[25%] flex-1 rounded-lg bg-blue-500"></div>
            <div className="h-[40%] flex-1 rounded-lg bg-blue-500"></div>
            <div className="h-[55%] flex-1 rounded-lg bg-blue-500"></div>
            <div className="h-[48%] flex-1 rounded-lg bg-blue-500"></div>
            <div className="h-[68%] flex-1 rounded-lg bg-blue-500"></div>
            <div className="h-[82%] flex-1 rounded-lg bg-blue-500"></div>
            <div className="h-[95%] flex-1 rounded-lg bg-green-400"></div>

          </div>

        </div>

      </div>

    </div>
  );
}