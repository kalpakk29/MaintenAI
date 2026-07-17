import Link from "next/link";
import {
  Bot,
  FileText,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const features = [
  {
    icon: <Bot size={36} />,
    title: "AI Diagnosis",
    description: "Diagnose industrial machine faults in seconds using AI.",
  },
  {
    icon: <FileText size={36} />,
    title: "Manual Assistant",
    description: "Upload equipment manuals and ask questions naturally.",
  },
  {
    icon: <Wrench size={36} />,
    title: "Maintenance Reports",
    description: "Generate professional maintenance reports instantly.",
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "Predictive Insights",
    description: "Predict failures before they become downtime.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Everything You Need
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link
              href="/coming-soon"
              key={feature.title}
              className="relative rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <span className="absolute right-4 top-4 rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-300">
                Coming Soon
              </span>

              <div className="mb-5 text-blue-500">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="text-slate-400">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}