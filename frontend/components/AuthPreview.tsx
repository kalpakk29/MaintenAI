export default function AuthPreview() {
  return (
    <div className="relative w-full max-w-lg">

      {/* Glow */}
      <div className="absolute -left-10 top-10 -z-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[150px]" />

      {/* Dashboard */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl backdrop-blur-xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              LIVE DASHBOARD
            </p>

            <h2 className="mt-1 text-2xl font-bold text-white">
              Factory Alpha
            </h2>
          </div>

          <div className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-400">
            ● Online
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 p-6">

          <div className="rounded-2xl bg-slate-800 p-5">
            <p className="text-sm text-slate-400">
              Healthy
            </p>

            <h3 className="mt-3 text-4xl font-black text-green-400">
              42
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-800 p-5">
            <p className="text-sm text-slate-400">
              Alerts
            </p>

            <h3 className="mt-3 text-4xl font-black text-red-400">
              5
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-800 p-5">
            <p className="text-sm text-slate-400">
              AI Score
            </p>

            <h3 className="mt-3 text-4xl font-black text-blue-400">
              98%
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-800 p-5">
            <p className="text-sm text-slate-400">
              Reports
            </p>

            <h3 className="mt-3 text-4xl font-black text-white">
              18
            </h3>
          </div>

        </div>

        {/* Activity */}
        <div className="border-t border-slate-800 p-6">

          <h3 className="mb-4 text-lg font-semibold text-white">
            Recent Activity
          </h3>

          <div className="space-y-3">

            <div className="flex items-center justify-between rounded-xl bg-slate-800 px-4 py-3">
              <span className="text-slate-300">
                CNC Machine #12
              </span>

              <span className="text-green-400">
                Healthy
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-800 px-4 py-3">
              <span className="text-slate-300">
                Conveyor Belt
              </span>

              <span className="text-yellow-400">
                Warning
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-800 px-4 py-3">
              <span className="text-slate-300">
                Hydraulic Pump
              </span>

              <span className="text-red-400">
                Critical
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}