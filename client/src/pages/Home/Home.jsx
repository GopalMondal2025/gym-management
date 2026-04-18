import React, { useEffect, useState } from "react";
import Login from "../../components/Login";
import Register from "../../components/Register";
import ForgotPassword from "../../components/ForgotPassword";

const Home = () => {
  const [view, setView] = useState(()=> {return localStorage.getItem("homeViewer") || "login"}) // "login" | "register" | "forgot"
  useEffect(()=>{
    localStorage.setItem("homeViewer", view)
  }, [view])


  return (
    <div className="w-full min-h-screen">
      
      {/* Navbar */}
      <div className="bg-slate-900 text-amber-400 px-6 py-4 text-2xl font-bold shadow-md">
        Gym Management System
      </div>

      {/* Hero Section */}
      <div className="relative w-full min-h-screen bg-[url('/assets/Hero.png')] bg-cover bg-center flex items-center justify-center">
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        {/* Dynamic Form */}
        <div className="relative z-10 w-full flex items-center justify-center px-4">
          {view === "login" && (
            <Login
              switchToRegister={() => setView("register")}
              switchToForgotPassword={()=>setView("forgot")}
            />
          )}
          {
            view === "register" && (
              <Register
              switchToLogin={()=>setView("login")}
              />
            )
          }
          {
            view === "forgot" && (
              <ForgotPassword
              switchToLogin={()=>setView("login")}
              />
            )
          }
        </div>

      </div>
    </div>
  );
};

export default Home;
