import { Link } from "react-router-dom";
import { useState } from "react";
import AddMembership from "./AddMembership";
const Members = () => {
    const [addMember, setAddMember] = useState(false);
    const addMembbership = () => {
        setAddMember(prev=>!prev);
    }
    return (
        <div className="flex-1 bg-gray-50 min-h-screen">
            {/* Top Navbar */}
            <div className="w-full bg-slate-900 text-white flex p-4 justify-between items-center shadow-md">
                <div className="flex items-center gap-4">
                    <span className="text-2xl cursor-pointer hover:text-gray-300">☰</span>
                    <h1 className="text-lg font-bold tracking-tight uppercase">Member Management</h1>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">
                    AD
                </div>
            </div>

            {/* Main Content Area */}
            <div className="p-6 space-y-6">

                <div className="flex items-center justify-between">
                    <Link to="/dashboard" className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium">
                        Back to Dashboard
                    </Link>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-700 transition"
                        onClick={() => addMembbership()}
                    >
                        + Add New Member
                    </button>
                </div>

                {/* Search & Filters */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex flex-1 max-w-md gap-2">
                        <input
                            type="text"
                            placeholder="Search by name or mobile..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                            Search
                        </button>
                    </div>

                    <div className="text-sm text-gray-500 font-medium">
                        Total Members: <span className="text-slate-900 font-bold">75</span>
                    </div>
                </div>

                {/* Members Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Profile</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Name</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Mobile</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Payment</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Next Bill date</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {/* row data for members */}
                            <tr className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                                    <div className="flex items-center justify-center relative w-8 h-8">
                                        <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                                        <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-green-500 border border-white"></div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-800">Abcd</td>
                                <td className="px-6 py-4 text-gray-600">0000000</td>
                                <td className="px-6 py-4 text-gray-600">Due</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 text-xs font-bold bg-green-100 text-green-700 rounded-full">Active</span>
                                </td>
                                <td className="px-6 py-4 text-gray-600">10-12-2025</td>
                                <td className="px-6 py-4 text-blue-600 cursor-pointer hover:underline text-sm font-bold" ><Link to="/members/:id">View Profile</Link></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-gray-50">
                        <span className="text-sm text-gray-500 font-medium">Showing 1-10 of 75</span>
                        <div className="flex gap-2">
                            <button className="px-4 py-1 border border-gray-300 rounded bg-white text-sm hover:bg-gray-50 disabled:opacity-50">Prev</button>
                            <button className="px-4 py-1 border border-gray-300 rounded bg-white text-sm hover:bg-gray-50 font-bold">Next</button>
                        </div>
                    </div>
                </div>
            </div>
            <AddMembership open={addMember} onClose={() => setAddMember(false)} />
        </div>
    );
}

export default Members;