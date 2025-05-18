import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#efefef]">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-5xl flex overflow-hidden">
        {/* Left side illustration */}
        <div className="hidden md:flex w-1/2 bg-indigo-500 items-center justify-center p-10">
          <img
            src="https://undraw.co/api/illustrations/1325e170-83c4-4d3c-b1aa-13cc313a9c72" // optional illustration URL
            alt="Illustration"
            className="w-72"
          />
        </div>

        {/* Right side form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">REGISTER</h2>
          <p className="text-gray-600 mb-6">
            Enter your information to register
          </p>

          <form className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="text-sm text-gray-600">First name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="w-1/2">
                <label className="text-sm text-gray-600">Last name</label>
                <input
                  type="text"
                  placeholder="Smith"
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="johnsmith@example.com"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="************"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md transition"
            >
              REGISTER NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
