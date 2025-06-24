// App.jsx
import React, { useState } from 'react';
import './App.css';
import animeData from './component/dataAnime'; 
function App() {
  const [selectedAnime, setSelectedAnime] = useState(null);

  const handleClick = (anime) => {
    setSelectedAnime(anime);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Anonime</h1>
          <nav className="space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white">Home</a>
            <a href="#" className="text-gray-400 hover:text-white">List anime</a>
          </nav>
        </div>
        <input
          type="text"
          placeholder="Search anime or movie"
          className="p-2 rounded-full bg-gray-800 text-white"
        />
      </header>

      {/* Explore Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Explore</h2>
        <p className="text-gray-400">What are you gonna watch today?</p>
        <div className="mt-4 bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-medium">Weather With You</h3>
          <p className="text-gray-400 text-sm">
            {animeData.find(anime => anime.id === "1").description}
          </p>
        </div>
      </section>

      {/* New Release Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">New Release</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {animeData.map((anime) => (
            <div
              key={anime.id}
              className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700"
              onClick={() => handleClick(anime)}
            >
              <img
                src={`https://via.placeholder.com/150?text=${anime.movieName}`} // Placeholder image
                alt={anime.movieName}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-2 text-sm font-medium">{anime.movieName}</h3>
              <p className="text-gray-400 text-xs">Episode {anime.episode}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Display Selected Anime */}
      {selectedAnime && (
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <h3 className="text-lg font-medium">Selected Anime</h3>
          <p>Title: {selectedAnime.movieName}</p>
          <p>Episode: {selectedAnime.episode}</p>
          <p>Description: {selectedAnime.description}</p>
          <button
            onClick={() => setSelectedAnime(null)}
            className="mt-2 p-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default App;