import { FileText } from "lucide-react";

interface Props {
  name: string;
  size: number;
}

export default function ManualCard({ name, size }: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500">

      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-blue-500/10 p-4">
          <FileText className="text-blue-400" />
        </div>

        <div>

          <h3 className="font-semibold text-white">
            {name}
          </h3>

          <p className="text-sm text-slate-400">
            {size} KB
          </p>

        </div>

      </div>

    </div>
  );
}