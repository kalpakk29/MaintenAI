import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold text-white">
        AI Reports
      </h1>

      <p className="mt-3 text-slate-400">
        View generated maintenance reports.
      </p>
    </DashboardLayout>
  );
}