const DashboardHeader = () => {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Dashboard</p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">Overview</h1>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300">
          New post
        </button>
        <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
          Connect LinkedIn
        </button>
      </div>
    </header>
  )
}

export default DashboardHeader
