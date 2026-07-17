export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-800 bg-slate-950 py-12 text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div>
          <h3 className="text-2xl font-bold">
            Mainten<span className="text-blue-500">AI</span>
          </h3>

          <p className="mt-2 max-w-md text-slate-400">
            AI-powered predictive maintenance platform for industrial assets.
          </p>
        </div>

        <div className="text-center md:text-right">
          <h4 className="mb-3 text-lg font-semibold">Contact</h4>

          <a
            href="mailto:kulkarnikalpak51@gmail.com"
            className="block text-slate-400 transition hover:text-blue-400"
          >
            📧 kulkarnikalpak51@gmail.com
          </a>

          <a
            href="tel:+919356695235"
            className="mt-2 block text-slate-400 transition hover:text-blue-400"
          >
            📞 +91 9356695235
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} MaintenAI. All rights reserved.
      </div>
    </footer>
  );
}