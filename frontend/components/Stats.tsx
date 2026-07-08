const stats = [
  {
    number: "12,000+",
    label: "Machines Supported",
  },
  {
    number: "98.7%",
    label: "AI Accuracy",
  },
  {
    number: "3 sec",
    label: "Average Diagnosis",
  },
  {
    number: "24/7",
    label: "AI Availability",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <h2 className="text-5xl font-black text-blue-500">
                {stat.number}
              </h2>

              <p className="mt-4 text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}