import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link href="/" className="select-none">
          <h1 className="logo text-4xl leading-none tracking-tight text-white">
            Mainten<span className="text-blue-500">AI</span>
          </h1>

          <p className="mt-1 text-[10px] uppercase tracking-[0.45em] text-slate-500">
            ENTERPRISE PLATFORM
          </p>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-10 text-sm font-medium text-slate-300 lg:flex">

          <Link
            href="/#features"
            className="transition-all duration-300 hover:text-white"
          >
            Features
          </Link>

          <Link
            href="/#solutions"
            className="transition-all duration-300 hover:text-white"
          >
            Solutions
          </Link>

          <Link
            href="/dashboard"
            className="transition-all duration-300 hover:text-white"
          >
            Dashboard
          </Link>

          <Link
            href="/#contact"
            className="transition-all duration-300 hover:text-white"
          >
            Contact
          </Link>

        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">

          <Link
            href="/login"
            className="rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-300 transition hover:border-blue-500 hover:text-white"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
          >
            Create Workspace
          </Link>

        </div>

      </div>
    </nav>
  );
}