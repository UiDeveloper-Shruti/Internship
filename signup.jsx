import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      setError("Invalid email. Must contain '@'");
      return;
    }

    if (password.length < 5) {
      setError("Password must be at least 5 characters");
      return;
    }

    console.log("Signed up with:", email, password);
    setError("");
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-200 via-pink-300 to-red-300">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Sign Up</h2>

        <form onSubmit={handleSignup} className="space-y-5">

          <div className="relative">
            <input  type="email" id="email" value={email}  onChange={(e) => setEmail(e.target.value)} required placeholder="Email"
              className="w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"/>
            <label className="absolute left-4 top-2 text-gray-500 text-sm" >  Email  </label>
          </div>

          <div className="relative">
            <input  type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password"
              className="w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <label className="absolute left-4 top-2 text-gray-500 text-sm"> Password </label>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm">
              {error}
            </div>
          )}

          <button className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition duration-300" > Sign Up </button>

          <p className="text-sm text-center text-gray-600 mt-2">
            Already have an account? <span className="text-purple-600 cursor-pointer hover:underline" onClick={() => navigate("/login")}>  Log In </span>
          </p>

          <div className="flex justify-center">
            <a href="/" className='text-blue-700 cursor-pointer hover:underline'>Back to home </a>
          </div>
        </form>
      </div>
    </div>
  );
}
