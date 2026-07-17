import {
  Settings,
  User,
  Bell,
  Shield,
  Palette,
  KeyRound,
  Sparkles,
} from "lucide-react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

const upcomingFeatures = [
  {
    icon: User,
    title: "Profile Management",
    description: "Update account information and organization details.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Configure email alerts and maintenance reminders.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Password management, two-factor authentication and login history.",
  },
  {
    icon: KeyRound,
    title: "API Keys",
    description: "Generate and manage secure API access for integrations.",
  },
  {
    icon: Palette,
    title: "Appearance",
    description: "Customize themes and dashboard preferences.",
  },
  {
    icon: Sparkles,
    title: "AI Preferences",
    description: "Configure AI behaviour, response style and maintenance rules.",
  },
];

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          Settings
        </h1>

        <p className="mt-3 text-slate-400">
          Personalize your MaintenAI workspace and account.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

        <div className="flex flex-col items-center text-center">

          <div className="rounded-full bg-blue-500/10 p-5">
            <Settings
              size={42}
              className="text-blue-400"
            />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-white">
            Settings Coming Soon
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            We're currently focused on delivering the core AI-powered
            maintenance experience. Additional personalization and account
            management features will be available in a future update.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {upcomingFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500"
              >
                <Icon
                  size={28}
                  className="text-blue-400"
                />

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </DashboardLayout>
  );
}