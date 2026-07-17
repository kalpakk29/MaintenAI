"use client";

import { useRef } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import UploadZone from "@/components/manuals/UploadZone";
import ManualGrid from "@/components/manuals/ManualGrid";

export default function ManualsPage() {

  const gridRef = useRef<any>(null);

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Maintenance Manuals
          </h1>

          <p className="mt-2 text-slate-400">
            Upload, organize and search equipment manuals.
          </p>

        </div>

        <UploadZone
          onUploadSuccess={() => gridRef.current?.refresh()}
        />

        <ManualGrid
          ref={gridRef}
        />

      </div>

    </DashboardLayout>
  );
}