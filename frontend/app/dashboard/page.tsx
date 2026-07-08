import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCards from "@/components/dashboard/StatsCards";
import HealthChart from "@/components/dashboard/HealthChart";
import Alerts from "@/components/dashboard/Alerts";
import MachineTable from "@/components/dashboard/MachineTable";
import AIChatCard from "@/components/dashboard/AIChatCard";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <DashboardLayout>

      {/* Stats */}
      <StatsCards />

      {/* Charts + AI */}
      <div className="mt-8 grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <HealthChart />
        </div>

        <AIChatCard />

      </div>

      {/* Table + Alerts */}
      <div className="mt-8 grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <MachineTable />
        </div>

        <Alerts />

      </div>

      {/* Activity */}
      <div className="mt-8">
        <RecentActivity />
      </div>

    </DashboardLayout>
  );
}