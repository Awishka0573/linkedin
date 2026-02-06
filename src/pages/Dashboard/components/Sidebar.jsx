const Sidebar = () => {
  return (
    <aside className="flex h-full w-full flex-col gap-6 border-r border-slate-200 bg-white px-6 py-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Workspace</p>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">LinkedIn Hub</h2>
      </div>
      <nav className="flex flex-col gap-3 text-sm font-medium text-slate-600">
        <button className="rounded-lg bg-slate-900/5 px-3 py-2 text-left text-slate-900">Overview</button>
        <button className="rounded-lg px-3 py-2 text-left transition hover:bg-slate-100">Profiles</button>
        <button className="rounded-lg px-3 py-2 text-left transition hover:bg-slate-100">Posts & Videos</button>
        <button className="rounded-lg px-3 py-2 text-left transition hover:bg-slate-100">Scheduler</button>
        <button className="rounded-lg px-3 py-2 text-left transition hover:bg-slate-100">Analytics</button>
      </nav>
      <div className="mt-auto rounded-2xl border border-emerald-200/60 bg-emerald-50 p-4 text-xs text-emerald-900">
        <p className="text-sm font-semibold">Connect LinkedIn</p>
        <p className="mt-2 text-emerald-800/80">Unlock profile import and publishing with API access.</p>
        <button className="mt-3 w-full rounded-full bg-emerald-300 px-4 py-2 text-xs font-semibold text-slate-900">
          Request access
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
