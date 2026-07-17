"use client";

import { useRef, useState } from "react";
import { Upload } from "lucide-react";

export default function UploadManual() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  async function uploadFile(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    setStatus("");
    setSuccess(false);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/upload-manual",
        {
          method: "POST",
          body: formData,
        }
      );

      const text = await response.text();

      let data: any = {};

      try {
        data = JSON.parse(text);
      } catch {
        data = { detail: text };
      }

      if (!response.ok) {
        setStatus(data.detail ?? "Upload failed.");
        setSuccess(false);
      } else {
        setStatus("Maintenance manual uploaded successfully.");
        setSuccess(true);
      }
    } catch {
      setStatus("Unable to connect to backend.");
      setSuccess(false);
    } finally {
      setUploading(false);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  return (
    <div className="w-full">
      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={uploadFile}
      />

      <button
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="flex h-[70px] w-full items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-5 font-medium text-white transition-all duration-300 hover:border-blue-500 hover:bg-slate-700 hover:shadow-lg hover:shadow-blue-500/10 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Upload size={22} />

        <span>
          {uploading
            ? "Uploading..."
            : "Upload Maintenance Manual"}
        </span>
      </button>

      {status && (
        <p
          className={`mt-3 text-center text-sm ${
            success ? "text-green-400" : "text-red-400"
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
}