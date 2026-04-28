import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const linkClass =
    "block px-4 py-2 rounded hover:bg-gray-200 transition";

  const activeClass =
    "bg-gray-300 font-semibold";

  const [greet, setGreet] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreet("Good Morning ☀️");
    } else if (currentHour < 18) {
      setGreet("Good Afternoon 🌤️");
    } else {
      setGreet("Good Evening 🌙");
    }
  }, []);

  return (
    <div className="w-64 min-h-screen border-r bg-white p-4">
      
      {/* Greeting */}
      <h2 className="text-lg font-semibold mb-2">{greet}</h2>
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <nav className="space-y-2">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/members"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Members
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Settings
        </NavLink>

        <NavLink
          to="/logout"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Logout
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;