import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function ManualsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold text-white">
        Maintenance Manuals
      </h1>

      <p className="mt-3 text-slate-400">
        Upload and manage PDF manuals here.
      </p>
    </DashboardLayout>
  );
}