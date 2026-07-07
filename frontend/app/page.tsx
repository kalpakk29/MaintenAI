export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
      <h1 className="text-6xl font-bold text-blue-500">
        MaintenAI
      </h1>

      <p className="mt-4 text-xl text-gray-300">
        AI-Powered Maintenance Copilot for Industrial Teams
      </p>

      <button className="mt-10 rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold hover:bg-blue-700 transition">
        Get Started
      </button>
    </main>
  );
}