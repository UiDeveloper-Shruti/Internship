import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const movies = [
    {
      id: 1,
      title: "Avengers: Endgame",
      Url: "https://www.youtube.com/embed/TcMBFSGVi1c",
    },
    {
      id: 2,
      title: "Inception",
      Url: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 3,
      title: "Interstellar",
      Url: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: 4,
      title: "The Dark Knight",
      Url: "https://www.youtube.com/embed/EXeTwQWrcwY",
    },
    {
      id: 5,
      title: "Black Panther",
      Url: "https://www.youtube.com/embed/xjDjIWPwcPU",
    },
    {
      id: 6,
      title: "Joker",
      Url: "https://www.youtube.com/embed/zAGVQLHvwOY",
    },
    {
      id: 7,
      title: "Spider-Man: No Way Home",
      Url: "https://www.youtube.com/embed/JfVOs4VSpmA",
    },
    {
      id: 8,
      title: "Tenet",
      Url: "https://www.youtube.com/embed/L3pk_TBkihU",
    },
  ];
  

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <aside className="w-64 bg-gradient-to-b from-indigo-600 to-purple-500 p-6 text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-10 text-center">🎬 Movie Library</h2>
        <ul className="space-y-6 text-lg">
          <li>
            <button onClick={() => navigate("/dashboard")} className="w-full text-left hover:text-gray-300 transition"> 📋 Dashboard</button>
          </li>

          <li>
            <button onClick={() => navigate("/profile")} className="w-full text-left hover:text-gray-300 transition">  👤 Profile </button>
          </li>

          <li>
            <button onClick={() => navigate("/settings")} className="w-full text-left hover:text-gray-300 transition"> ⚙️ Settings  </button>
          </li>

        </ul>
      </aside>

      
      <main className="flex-1 p-10">
        <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>
        <button onClick={() => navigate("/")} className="bg-amber-400 px-2 mb-3 rounded hover:bg-amber-300 transition"> Logout </button>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
            <div key={movie.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition">
              
              <header>
                <div className="bg-indigo-600 text-white text-center py-3 font-semibold text-lg">
                  {movie.title}
                </div>
              </header>

              
              <div className="flex justify-center items-center p-4">
                <iframe src={movie.Url} title={movie.title} className="rounded-lg w-full h-40 object-cover" allowFullScreen />
              </div>

              
              <div className="flex justify-between items-center px-4 py-3 border-t">
                <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"> Edit </button>
                <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"> Delete </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
