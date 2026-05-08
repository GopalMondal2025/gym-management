import React from 'react'

const Register = ({ switchToLogin }) => {
  return (
    <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Register Your Gym</h2>

      <div className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-400"
        />

        <input
          type="text"
          placeholder="Gym Name"
          className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-400"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-400"
        />

        {/* FIXED: type="file" instead of image */}
        <input
          type="file"
          className="p-2 rounded-lg bg-white/20 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-amber-400 file:text-black hover:file:bg-amber-300"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-amber-400"
        />

        <button className="mt-4 bg-amber-400 text-black font-semibold py-3 rounded-lg hover:bg-amber-300 transition duration-300">
          Register
        </button>

        {/* Switch */}
        <p className="text-gray-300 text-sm text-center mt-2">
          Already have an account?{' '}
          <span onClick={switchToLogin} className="text-amber-400 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  )
}

export default Register
