import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/70 p-10 shadow-2xl backdrop-blur-xl">

        {/* Logo */}
        <Link href="/">
          <h1 className="logo cursor-pointer text-4xl text-white">
            Mainten<span className="text-blue-500">AI</span>
          </h1>
        </Link>

        <p className="mt-2 text-slate-400">
          Build your AI maintenance workspace
        </p>

        <h2 className="mt-8 text-4xl font-bold">
          Create Workspace
        </h2>

        <div className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Company Name"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-4 outline-none transition focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-4 outline-none transition focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Work Email"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-4 outline-none transition focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-4 outline-none transition focus:border-blue-500"
          />

          <button className="w-full rounded-xl bg-blue-600 py-4 font-semibold transition hover:bg-blue-500">
            Create Workspace
          </button>

        </div>

        <p className="mt-8 text-center text-slate-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            Sign In
          </Link>
        </p>

      </div>

    </main>
  );
}