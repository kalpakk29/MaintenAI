import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 bg-grid text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[220px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-8 pt-24 pb-12">

        <div className="max-w-3xl">

          <div className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
              Enterprise AI Platform
            </span>
          </div>

          <h1 className="hero-title text-6xl leading-[0.9] tracking-tight lg:text-8xl">
            AI
            <br />
            Maintenance
            <span className="mt-2 block text-blue-500">
              Copilot
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
            Monitor industrial assets, predict failures,
            generate maintenance reports and interact with
            equipment manuals through a single AI-powered platform.
          </p>

          {/* Stats */}
          <div className="mt-16 flex gap-12">

            <div>
              <h3 className="text-4xl font-black text-white">
                12K+
              </h3>
              <p className="mt-2 text-slate-400">
                Machines
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">
                98%
              </h3>
              <p className="mt-2 text-slate-400">
                AI Accuracy
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">
                24/7
              </h3>
              <p className="mt-2 text-slate-400">
                Monitoring
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}