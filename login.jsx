import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Invalid email. Must include '@'");
      return;
    }

    if (password.length < 5) {
      setError("Password must be at least 5 characters");
      return;
    }

    setError("");
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-fuchsia-100 via-violet-400 to-indigo-200">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"  placeholder="Email" />
            <label  className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500" >  Email </label>
          </div>

          <div className="relative">
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  required className="w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Password" />
            <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500" >  Password </label>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm">
              {error}
            </div>
          )}

          <button className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition duration-300" >  Login </button>

          <div className="mt-6 text-center text-sm text-gray-600"> Don't have an account?{" "}
          <a onClick={() => navigate("/signup")} className="text-indigo-600 hover:underline font-medium">  Sign up </a>
          </div>

          <div className="flex justify-center">
            <a href="/" className='text-blue-700 cursor-pointer hover:underline'>Back to home </a>
          </div>
        </form>
      </div>
    </div>
  );
}
