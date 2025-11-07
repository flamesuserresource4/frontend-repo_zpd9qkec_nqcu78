import { Shield, FileText, CheckCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500 flex items-center justify-center text-white shadow-sm">
            <Shield size={18} />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-zinc-900 dark:text-zinc-100">MOWAERS</p>
            <p className="text-xs text-zinc-500">Multi‑Organ Wearable + ER</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
          <a href="#overview" className="hover:text-indigo-600">Overview</a>
          <a href="#mvp" className="hover:text-indigo-600 flex items-center gap-1"><CheckCircle size={16}/>MVP</a>
          <a href="#structure" className="hover:text-indigo-600">Structure</a>
          <a href="#content" className="hover:text-indigo-600">Content</a>
          <a href="#security" className="hover:text-indigo-600 flex items-center gap-1"><Shield size={16}/>Security</a>
          <a href="#deliverables" className="hover:text-indigo-600 flex items-center gap-1"><FileText size={16}/>Deliverables</a>
        </nav>
        <a href="#demo" className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition-colors">
          View Demo Script
        </a>
      </div>
    </header>
  );
}
