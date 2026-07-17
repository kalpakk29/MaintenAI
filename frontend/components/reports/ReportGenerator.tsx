"use client";

import { useRef, useState } from "react";
import { FileText, Download } from "lucide-react";
import { useMachines } from "@/context/MachineContext";

import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

export default function ReportGenerator() {
  const { machines } = useMachines();

  const reportRef = useRef<HTMLDivElement>(null);

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [reportGenerated, setReportGenerated] = useState(false);

  const selectedMachine = machines.find(
    (m) => m.id === selectedId
  );

  function generateReport() {
    if (!selectedMachine) return;

    setReportGenerated(true);
  }

  async function downloadPDF() {
    if (!reportRef.current || !selectedMachine) return;

    const canvas = await html2canvas(reportRef.current, {
      scale: 2,
      backgroundColor: "#0f172a",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight =
      (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeight
    );

    pdf.save(
      `${selectedMachine.name.replace(/\s+/g, "_")}_Report.pdf`
    );
  }

  function getStatusColor(status: string) {
    switch (status.toLowerCase()) {
      case "healthy":
        return "bg-green-500 text-white";

      case "warning":
        return "bg-yellow-500 text-black";

      case "critical":
        return "bg-red-500 text-white";

      default:
        return "bg-slate-600 text-white";
    }
  }

  return (
    <div className="space-y-8">

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
          <FileText className="text-blue-400" />
          Generate Maintenance Report
        </h2>

        <div className="flex flex-col gap-4 md:flex-row">

          <select
            value={selectedId ?? ""}
            onChange={(e) =>
              setSelectedId(Number(e.target.value))
            }
            className="flex-1 rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
          >

            <option value="">
              Select Machine
            </option>

            {machines.map((machine) => (
              <option
                key={machine.id}
                value={machine.id}
              >
                {machine.name}
              </option>
            ))}

          </select>

          <button
            onClick={generateReport}
            disabled={!selectedMachine}
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500 disabled:bg-slate-700"
          >
            Generate Report
          </button>

        </div>

      </div>

      {reportGenerated && selectedMachine && (

        <div
          ref={reportRef}
          id="report"
          className="rounded-3xl border border-slate-800 bg-slate-900 p-10"
        >

          <div className="flex items-center justify-between">

            <div>

              <h1 className="text-4xl font-bold text-white">
                MaintenAI
              </h1>

              <p className="mt-2 text-slate-400">
                AI Predictive Maintenance Report
              </p>

            </div>

            <button
              onClick={downloadPDF}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              <Download size={18} />
              Download PDF
            </button>

          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">

            <div>

              <p className="text-slate-500">
                Report ID
              </p>

              <p className="font-semibold text-white">
                MT-{selectedMachine.id.toString().padStart(4, "0")}
              </p>

            </div>

            <div>

              <p className="text-slate-500">
                Generated
              </p>

              <p className="font-semibold text-white">
                {new Date().toLocaleString()}
              </p>

            </div>

          </div>

          <hr className="my-8 border-slate-800" />

          <h2 className="mb-5 text-2xl font-bold text-white">
            Machine Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <p><strong>Name:</strong> {selectedMachine.name}</p>

            <p><strong>Manufacturer:</strong> {selectedMachine.manufacturer}</p>

            <p><strong>Model:</strong> {selectedMachine.model}</p>

            <p><strong>Serial:</strong> {selectedMachine.serial_number}</p>

            <p><strong>Location:</strong> {selectedMachine.location}</p>

            <p><strong>Manual:</strong> {selectedMachine.manual}</p>

          </div>

          <hr className="my-8 border-slate-800" />

          <h2 className="mb-5 text-2xl font-bold text-white">
            AI Analysis
          </h2>

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500">
                Status
              </p>

              <span
                className={`mt-2 inline-block rounded-full px-4 py-2 font-semibold ${getStatusColor(selectedMachine.ai_status)}`}
              >
                {selectedMachine.ai_status}
              </span>

            </div>

            <div>

              <p className="text-slate-500">
                Health Score
              </p>

              <p className="text-4xl font-bold text-green-400">
                {selectedMachine.health_score}%
              </p>

            </div>

          </div>

          <div className="mt-8">

            <div className="h-5 overflow-hidden rounded-full bg-slate-700">

              <div
                className="h-full rounded-full bg-green-500"
                style={{
                  width: `${selectedMachine.health_score}%`,
                }}
              />

            </div>

          </div>

          <hr className="my-8 border-slate-800" />

          <h2 className="mb-4 text-2xl font-bold text-white">
            Diagnosis
          </h2>

          <div className="rounded-xl bg-slate-950 p-6 leading-8 text-slate-300">
            {selectedMachine.diagnosis}
          </div>

          <h2 className="mt-10 mb-4 text-2xl font-bold text-white">
            Recommendation
          </h2>

          <div className="rounded-xl bg-slate-950 p-6 leading-8 text-slate-300">
            {selectedMachine.recommendation}
          </div>

          <div className="mt-10 border-t border-slate-800 pt-6 text-center text-slate-500">
            Generated by MaintenAI AI Copilot
          </div>

        </div>

      )}

    </div>
  );
}