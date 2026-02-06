import DashboardHeader from './components/DashboardHeader'
import Sidebar from './components/Sidebar'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="grid min-h-screen md:grid-cols-[260px_1fr]">
        <Sidebar />
        <div className="flex flex-col">
          <DashboardHeader />
          <main className="flex-1 px-6 py-8">
            <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Overview</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Welcome back, Awishka</h2>
              <p className="mt-2 text-sm text-slate-500">
                Connect your LinkedIn account to start importing profiles, scheduling posts, and tracking performance.
              </p>
            </section>
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <section className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Linked accounts</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold text-slate-900">No LinkedIn account yet</p>
                      <p className="text-sm text-slate-500">Connect to pull profiles and company pages.</p>
                    </div>
                    <button className="rounded-full bg-emerald-300 px-4 py-2 text-sm font-semibold text-slate-900">
                      Connect
                    </button>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Content pipeline</p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-xl border border-slate-200 p-4">
                      <p className="text-sm font-semibold text-slate-900">Draft: Hiring update</p>
                      <p className="text-xs text-slate-500">Video + copy ready for review.</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 p-4">
                      <p className="text-sm font-semibold text-slate-900">Scheduled: Founder story</p>
                      <p className="text-xs text-slate-500">Publishing Friday at 9:00 AM.</p>
                    </div>
                  </div>
                </div>
              </section>
              <aside className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Insights</p>
                  <div className="mt-4 space-y-3 text-sm text-slate-600">
                    <div className="flex items-center justify-between">
                      <span>Profile views</span>
                      <span className="font-semibold text-slate-900">1,240</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Post engagement</span>
                      <span className="font-semibold text-slate-900">+18%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Video completion</span>
                      <span className="font-semibold text-slate-900">62%</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Next steps</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    <li>Connect a LinkedIn account</li>
                    <li>Import profiles and company pages</li>
                    <li>Schedule your first post</li>
                  </ul>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
