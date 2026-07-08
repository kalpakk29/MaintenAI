"use client";

import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/70 p-10 shadow-2xl backdrop-blur-xl">

      {/* Logo */}
      <Link href="/" className="inline-block">
        <h1 className="logo text-4xl text-white">
          Mainten<span className="text-blue-500">AI</span>
        </h1>
      </Link>

      <p className="mt-2 text-slate-400">
        Welcome back
      </p>

      <h2 className="mt-8 text-4xl font-bold text-white">
        Sign In
      </h2>

      <p className="mt-3 text-slate-400">
        Access your enterprise workspace.
      </p>

      {/* Email */}

      <div className="mt-8">

        <label className="mb-2 block text-sm text-slate-300">
          Work Email
        </label>

        <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4">

          <Mail size={18} className="text-slate-500" />

          <input
            type="email"
            placeholder="john@company.com"
            className="w-full bg-transparent px-3 py-4 outline-none"
          />

        </div>

      </div>

      {/* Password */}

      <div className="mt-6">

        <label className="mb-2 block text-sm text-slate-300">
          Password
        </label>

        <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4">

          <Lock size={18} className="text-slate-500" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="w-full bg-transparent px-3 py-4 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff
                size={18}
                className="text-slate-500 hover:text-white"
              />
            ) : (
              <Eye
                size={18}
                className="text-slate-500 hover:text-white"
              />
            )}
          </button>

        </div>

      </div>

      {/* Remember */}

      <div className="mt-6 flex items-center justify-between text-sm">

        <label className="flex items-center gap-2 text-slate-400">

          <input type="checkbox" />

          Remember me

        </label>

        <button className="text-blue-400 hover:text-blue-300">
          Forgot password?
        </button>

      </div>

      {/* Login */}

      <button className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold transition hover:bg-blue-500">
        Sign In
      </button>

      {/* Google */}

      <button className="mt-4 w-full rounded-xl border border-slate-700 py-4 font-semibold transition hover:bg-slate-800">
        Continue with Google
      </button>

      {/* Signup */}

      <p className="mt-8 text-center text-slate-400">

        Don't have a workspace?{" "}

        <Link
          href="/signup"
          className="font-semibold text-blue-400 hover:text-blue-300"
        >
          Create one
        </Link>

      </p>

    </div>
  );
}