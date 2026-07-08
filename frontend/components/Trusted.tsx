export default function Trusted() {
  return (
    <section className="bg-slate-950 py-10">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-10 text-center text-sm uppercase tracking-[0.3em] text-slate-500">
          Trusted Technologies
        </p>

        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-black text-blue-500">12K+</h3>
            <p className="mt-2 text-slate-400">Machines</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-black text-blue-500">98.7%</h3>
            <p className="mt-2 text-slate-400">Accuracy</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-black text-blue-500">24/7</h3>
            <p className="mt-2 text-slate-400">Monitoring</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-black text-blue-500">3 sec</h3>
            <p className="mt-2 text-slate-400">Diagnosis</p>
          </div>

        </div>
      </div>
    </section>
  );
}