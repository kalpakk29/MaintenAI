import { Upload } from "lucide-react";

export default function UploadManual() {
  return (
    <button className="flex items-center gap-3 rounded-xl border border-dashed border-blue-500 p-5 transition hover:bg-slate-900">

      <Upload />

      Upload Maintenance Manual (PDF)

    </button>
  );
}