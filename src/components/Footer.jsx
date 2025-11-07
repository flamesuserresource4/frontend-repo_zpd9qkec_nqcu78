export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-zinc-600 dark:text-zinc-300">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="">© {new Date().getFullYear()} MOWAERS. For demo only — not for diagnosis.</p>
          <nav className="flex items-center gap-4">
            <a href="#help" className="hover:text-indigo-600">Help/Docs</a>
            <a href="#privacy" className="hover:text-indigo-600">Privacy</a>
            <a href="#terms" className="hover:text-indigo-600">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
