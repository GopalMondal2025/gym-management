import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [greet, setGreet] = useState("");
  const [openSection, setOpenSection] = useState("Main"); // default open

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) setGreet("Good Morning ☀️");
    else if (currentHour < 18) setGreet("Good Afternoon 🌤️");
    else setGreet("Good Evening 🌙");
  }, []);

  const toggleSection = (title) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  const navSections = [
    {
      title: "Main",
      items: [{ name: "Dashboard", path: "/dashboard" }],
    },
    {
      title: "Members",
      items: [
        { name: "All Members", path: "/dashboard/members" },
        { name: "Add Member", path: "/dashboard/members/add" },
        { name: "Active Members", path: "/dashboard/members/active" },
        { name: "Inactive Members", path: "/dashboard/members/inactive" },
        { name: "Packages / Plans", path: "/dashboard/members/packages" },
      ],
    },
    {
      title: "Payments",
      items: [
        { name: "All Payments", path: "/dashboard/payments" },
        { name: "Debit List", path: "/dashboard/payments/debits" },
        { name: "Pending Payments", path: "/dashboard/payments/pending" },
        { name: "Active Member Dues", path: "/dashboard/payments/pending-active" },
        { name: "Inactive Member Dues", path: "/dashboard/payments/pending-inactive" },
      ],
    },
    {
      title: "Staff",
      items: [
        { name: "All Staff", path: "/dashboard/staff" },
        { name: "Add Staff", path: "/dashboard/staff/add" },
        { name: "Trainers", path: "/dashboard/staff/trainers" },
        { name: "Attendance", path: "/dashboard/staff/attendance" },
      ],
    },
    {
      title: "Plans",
      items: [
        { name: "All Plans", path: "/dashboard/plans" },
        { name: "Add Plan", path: "/dashboard/plans/add" },
      ],
    },
    {
      title: "Settings",
      items: [
        { name: "Profile Settings", path: "/dashboard/settings/profile" },
        { name: "Gym / Store Info", path: "/dashboard/settings/store" },
        { name: "Billing Settings", path: "/dashboard/settings/billing" },
        { name: "Password & Security", path: "/dashboard/settings/security" },
        { name: "Notifications", path: "/dashboard/settings/notifications" },
      ],
    },
    {
      title: "Account",
      items: [{ name: "Logout", path: "/logout" }],
    },
  ];

  return (
    <div className="w-64 min-h-screen border-r bg-white flex flex-col">
      
      {/* Greeting */}
      <div className="p-6 border-b border-gray-50">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          {greet}
        </p>
        <h2 className="text-2xl font-black text-slate-900 mt-1">
          AdminPanel
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        {navSections.map((section, idx) => (
          <div key={idx} className="mb-4">

            {/* Section Header (Clickable) */}
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-gray-500 uppercase hover:bg-gray-100 rounded-lg transition"
            >
              {section.title}
              <span className="text-sm">
                {openSection === section.title ? "−" : "+"}
              </span>
            </button>

            {/* Items (Collapsible) */}
            {openSection === section.title && (
              <div className="mt-2 space-y-1">
                {section.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/dashboard"}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-lg text-sm transition ${
                        isActive
                          ? "bg-slate-900 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        <p className="text-xs text-gray-400 text-center">
          v1.0.4 Build
        </p>
      </div>
    </div>
  );
};

export default Sidebar;