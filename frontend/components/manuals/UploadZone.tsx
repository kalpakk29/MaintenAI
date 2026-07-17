"use client";

import { useRef, useState } from "react";
import { UploadCloud, Loader2, CheckCircle } from "lucide-react";
import { uploadManual } from "@/lib/api";

interface UploadZoneProps {
  onUploadSuccess: () => void;
}

export default function UploadZone({
  onUploadSuccess,
}: UploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleFile(file: File) {
    setUploading(true);
    setSuccess("");
    setError("");

    try {
      const data = await uploadManual(file);

      setSuccess(`${data.filename} uploaded successfully!`);

      onUploadSuccess();

    } catch {
      setError("Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="rounded-3xl border-2 border-dashed border-blue-500/40 bg-slate-900 p-10">

      <div className="flex flex-col items-center">

        <div className="rounded-full bg-blue-500/10 p-5">
          <UploadCloud
            size={42}
            className="text-blue-400"
          />
        </div>

        <h2 className="mt-6 text-2xl font-bold">
          Upload Maintenance Manual
        </h2>

        <p className="mt-3 text-center text-slate-400">
          Upload any equipment manual in PDF format.
        </p>

        <input
          ref={inputRef}
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (file) {
              handleFile(file);
            }
          }}
        />

        <button
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500 disabled:opacity-50"
        >
          {uploading ? (
            <span className="flex items-center gap-2">
              <Loader2
                className="animate-spin"
                size={18}
              />
              Uploading...
            </span>
          ) : (
            "Choose PDF"
          )}
        </button>

        {success && (
          <div className="mt-6 flex items-center gap-2 rounded-xl bg-green-500/10 px-4 py-3 text-green-400">
            <CheckCircle size={18} />
            {success}
          </div>
        )}

        {error && (
          <div className="mt-6 rounded-xl bg-red-500/10 px-4 py-3 text-red-400">
            {error}
          </div>
        )}

      </div>

    </div>
  );
}