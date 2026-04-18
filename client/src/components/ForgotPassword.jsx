import React from "react";

const ForgotPassword = ({ switchToLogin }) => {
  return (
    <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">

      {/* Lock Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-amber-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mb-2 text-center">
        Forgot Password
      </h2>

      <p className="text-gray-300 text-sm text-center mb-6">
        Enter your registered email and we'll send you a reset link.
      </p>

      <div className="flex flex-col gap-4">

        <input
          type="email"
          placeholder="Email Address"
          className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-400"
        />

        <button className="mt-4 bg-amber-400 text-black font-semibold py-3 rounded-lg hover:bg-amber-300 transition duration-300">
          Send Reset Link
        </button>

        {/* Switch */}
        <p className="text-gray-300 text-sm text-center mt-2">
          Remember your password?{" "}
          <span
            onClick={switchToLogin}
            className="text-amber-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
};

export default ForgotPassword;