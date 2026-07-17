import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">
        <div className="mb-6 text-6xl">🚧</div>

        <h1 className="text-5xl font-bold">
          Coming Soon
        </h1>

        <p className="mt-5 text-slate-400">
          This feature is currently under development.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}