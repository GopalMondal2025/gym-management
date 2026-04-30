import React from "react";
import { Link } from "react-router-dom";
// Reusable Card Component using a simple emoji instead of MUI icons
const StatCard = ({ title, value, emoji, colorClass, to }) => (
    <Link
        to={to}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group"
    >
        <div className={`text-3xl p-3 rounded-full transition-transform group-hover:scale-110 ${colorClass}`}>
            {emoji}
        </div>
        <div>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{title}</p>
            <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        </div>
    </Link>
);

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
                    title="Joined Members"
                    value="1,250"
                    emoji="👥"
                    colorClass="bg-blue-50"
                    to="/members"
                />
                <StatCard
                    title="Monthly Joined"
                    value="45"
                    emoji="📅"
                    colorClass="bg-green-50"
                />
                <StatCard
                    title="Expiring (3 Days)"
                    value="12"
                    emoji="⚠️"
                    colorClass="bg-red-50"
                />
                <StatCard
                    title="Expiring (3-7 Days)"
                    value="24"
                    emoji="⏳"
                    colorClass="bg-orange-50"
                />
                <StatCard
                    title="Expired"
                    value="89"
                    emoji="🚫"
                    colorClass="bg-gray-100"
                />
                <StatCard
                    title="Inactive Members"
                    value="5"
                    emoji="💤"
                    colorClass="bg-purple-50"
                />
                <StatCard
                    title="Equipments"
                    value="5"
                    emoji="💤"
                    colorClass="bg-purple-50"
                />
                <StatCard
                    title="Expenses"
                    value="5"
                    emoji="💤"
                    colorClass="bg-purple-50"
                />
                <StatCard
                    title="Trainers"
                    value="5"
                    emoji="💤"
                    colorClass="bg-purple-50"
                />
                <StatCard
                    title="Monthly Revenue"
                    value="5"
                    emoji="💰"
                    colorClass="bg-purple-50"
                />
                <StatCard
                    title="Pending Payments"
                    value="₹12,000"
                    emoji="💳"
                    colorClass="bg-yellow-100"
                />

            </div>
        </div>
    );
};

export default Dashboard;