import { useNavigate } from "react-router-dom";
import bgImage from "../assets/movie.jpg"; 


export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
            >
      <div className="ms-200 bg-white bg-opacity-90 p-10 rounded-2xl shadow-2xl w-96 text-center animate-fade-in">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 animate-slide-in"> 🎬 Welcome to Movie Library </h2>

        <div className="flex justify-center gap-4">
          <button onClick={() => navigate('/login')} className="transform transition hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg" >
            Login
          </button>

          <button onClick={() => navigate('/signup')} className="transform transition hover:scale-105 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg" >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
