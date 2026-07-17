import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ReportGenerator from "@/components/reports/ReportGenerator";

export default function ReportsPage() {
  return (
    <DashboardLayout>

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-white">
          AI Maintenance Reports
        </h1>

        <p className="mt-3 text-slate-400">
          Generate AI-powered maintenance reports for your equipment.
        </p>

      </div>

      <ReportGenerator />

    </DashboardLayout>
  );
}