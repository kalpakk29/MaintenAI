import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold text-white">
        Settings
      </h1>

      <p className="mt-3 text-slate-400">
        Manage your account and preferences.
      </p>
    </DashboardLayout>
  );
}