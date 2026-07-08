import {
  Cpu,
  TriangleAlert,
  BrainCircuit,
  FileText,
} from "lucide-react";

const cards = [
  {
    title: "Healthy Machines",
    value: "42",
    icon: Cpu,
    color: "text-green-400",
  },
  {
    title: "Critical Alerts",
    value: "5",
    icon: TriangleAlert,
    color: "text-red-400",
  },
  {
    title: "AI Accuracy",
    value: "98%",
    icon: BrainCircuit,
    color: "text-blue-400",
  },
  {
    title: "Reports",
    value: "18",
    icon: FileText,
    color: "text-white",
  },
];

export default function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {

        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className={`mt-3 text-4xl font-black ${card.color}`}>
                  {card.value}
                </h2>

              </div>

              <Icon
                size={34}
                className={card.color}
              />

            </div>

          </div>
        );

      })}

    </div>
  );
}