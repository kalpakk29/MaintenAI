export default function AITerminal() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-black shadow-2xl">

          <div className="flex items-center gap-2 border-b border-slate-800 px-6 py-4">

            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span className="ml-4 text-sm text-slate-500">
              MaintenAI Terminal
            </span>

          </div>

          <div className="space-y-5 p-8 font-mono text-green-400">

            <p>{">"} Machine Connected...</p>

            <p>{">"} Reading sensor data...</p>

            <p>{">"} AI Diagnosis Complete.</p>

            <p className="text-white">
              Bearing vibration exceeds threshold.
            </p>

            <p>
              Estimated Failure Risk:
              <span className="ml-2 text-red-400">
                12%
              </span>
            </p>

            <p>
              Recommended Action:
            </p>

            <p className="text-blue-400">
              Replace spindle bearing within 7 days.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}