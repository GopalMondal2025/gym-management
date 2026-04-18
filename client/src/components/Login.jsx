import React from "react";

const Login = ({ switchToRegister, switchToForgotPassword }) => {
  return (
    <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
      
      <h2 className="text-3xl font-bold text-white mb-7 text-center">
        Welcome Back
      </h2>

      <div className="flex flex-col gap-4">
        
        <input
          type="text"
          placeholder="Username"
          className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-400"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-400"
        />
        <span
          onClick={switchToForgotPassword}
          className="text-amber-300 cursor-pointer hover:underline"
        >
          Forgot Password?
        </span>

        <button className="mt-4 bg-amber-400 text-black font-semibold py-3 rounded-lg hover:bg-amber-300 transition duration-300">
          Login
        </button>

        {/* Switch */}
        <p className="text-gray-300 text-sm text-center mt-2">
          Not registered?{" "}
          <span
            onClick={switchToRegister}
            className="text-amber-400 cursor-pointer hover:underline"
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;