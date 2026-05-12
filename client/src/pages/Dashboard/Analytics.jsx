import React from 'react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts'

const revenueData = [
  { month: 'Jan', revenue: 12000 },
  { month: 'Feb', revenue: 18000 },
  { month: 'Mar', revenue: 15000 },
  { month: 'Apr', revenue: 22000 },
  { month: 'May', revenue: 28000 },
  { month: 'Jun', revenue: 32000 },
]

const memberData = [
  { name: 'Active', value: 85 },
  { name: 'Inactive', value: 15 },
]

const growthData = [
  { month: 'Jan', members: 40 },
  { month: 'Feb', members: 65 },
  { month: 'Mar', members: 90 },
  { month: 'Apr', members: 120 },
  { month: 'May', members: 160 },
  { month: 'Jun', members: 220 },
]

const packageData = [
  { package: 'Basic', users: 45 },
  { package: 'Premium', users: 30 },
  { package: 'VIP', users: 15 },
  { package: 'Couple', users: 10 },
]

const COLORS = ['#22c55e', '#ef4444']

const Analytics = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Gym Analytics Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-3xl shadow-lg p-5">
          <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Line type="monotone" dataKey="revenue" stroke="#06b6d4" strokeWidth={4} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Member Status */}
        <div className="bg-white rounded-3xl shadow-lg p-5">
          <h2 className="text-xl font-semibold mb-4">Member Status</h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={memberData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                {memberData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Membership Growth */}
        <div className="bg-white rounded-3xl shadow-lg p-5">
          <h2 className="text-xl font-semibold mb-4">Membership Growth</h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="members" fill="#8b5cf6" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Package Distribution */}
        <div className="bg-white rounded-3xl shadow-lg p-5">
          <h2 className="text-xl font-semibold mb-4">Package Distribution</h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={packageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="package" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="users" fill="#f59e0b" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Analytics
