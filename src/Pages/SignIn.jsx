import React from "react";
import { Link } from "react-router"; 

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center mt-15 bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Welcome Back 👋
        </h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="username" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <div className="text-right mt-1 text-sm">
              <a href="#" className="text-fuchsia-600 hover:underline">Forgot Password?</a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <div className="border-t w-full border-gray-300 dark:border-gray-600"></div>
          <span className="px-2 text-sm text-gray-500 dark:text-gray-400">or</span>
          <div className="border-t w-full border-gray-300 dark:border-gray-600"></div>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          {/* Social Buttons */}
          {["Google", "Twitter", "GitHub"].map((platform) => (
            <button
              key={platform}
              aria-label={`Login with ${platform}`}
              className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <img src={`https://cdn.simpleicons.org/${platform.toLowerCase()}`} alt={platform} className="w-5 h-5" />
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-fuchsia-600 hover:underline font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
