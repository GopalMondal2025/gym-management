import React from 'react'
import { Link } from 'react-router-dom'
import Analytics from './Analytics'
// Reusable Card Component using a simple emoji instead of MUI icons
const StatCard = ({ title, value, emoji, gradient, to }) => (
  <Link
    to={to}
    className={`relative overflow-hidden rounded-3xl p-7 text-white shadow-xl ${gradient}`}
  >
    {/* Background Emoji */}
    <div className="absolute top-4 right-5 text-8xl opacity-20">{emoji}</div>

    {/* Main Content */}
    <div className="relative z-10">
      <h2 className="text-6xl font-extrabold drop-shadow">{value}</h2>

      <p className="mt-2 text-lg font-semibold uppercase tracking-widest">{title}</p>

      <div className="mt-10 pt-4 border-t border-white/30 flex justify-between items-center">
        <span className="font-medium">View All</span>

        <span className="text-2xl">→</span>
      </div>
    </div>
  </Link>
)

const Dashboard = () => {
  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Top Navbar */}
      <div className="w-full bg-slate-900 text-white flex p-4 justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
          <span className="text-2xl cursor-pointer hover:text-gray-300">☰</span>
          <h1 className="text-lg font-bold tracking-tight">GYM DASHBOARD</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">
            AD
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Members"
          value="1,250"
          emoji="👥"
          gradient="bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-700"
        />
        <StatCard
          title="Active Members"
          value="45"
          emoji="📅"
          gradient="bg-gradient-to-br from-green-500 via-green-600 to-green-700"
        />
        <StatCard
          title="Inactive Members"
          value="12"
          emoji="⚠️"
          gradient="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700"
        />
        <StatCard
          title="Expiring (3-7 Days)"
          value="24"
          emoji="⏳"
          gradient="bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700"
        />
        <StatCard
          title="Expired"
          value="89"
          emoji="🚫"
          gradient="bg-gradient-to-br from-red-500 via-red-600 to-red-700"
        />
        <StatCard
          title="packages types"
          value="5"
          emoji="💤"
          gradient="bg-gradient-to-br from-violet-500 via-violet-600 to-cyan-700"
        />
        {/* <StatCard title="Equipments" value="5" emoji="💤" gradient="bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-700" /> */}
        {/* <StatCard title="Expenses" value="5" emoji="💤" gradient="bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-700" /> */}
        {/* <StatCard title="Trainers" value="5" emoji="💤" gradient="bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-700" /> */}
        {
          <StatCard
            title="Monthly Revenue"
            value="5"
            emoji="💰"
            gradient="bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700"
          />
        }
        {
          <StatCard
            title="Pending Payments"
            value="₹12,000"
            emoji="💳"
            gradient="bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700"
          />
        }
      </div>
    </div>
  )
}

export default Dashboard
