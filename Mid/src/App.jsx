import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import myImgge from './assets/carousel.png'
import DataPhim from './assets/component/dataPhim.jsx'
import { data } from './assets/component/dataPhim.jsx'

function App(props) {
    // State để lưu trữ phim được chọn
    const [selectedMovie, setSelectedMovie] = useState(null)
    // State để lưu trữ trang hiện tại
    const [currentPage, setCurrentPage] = useState('home')
    // State để lưu trữ từ khóa tìm kiếm
    const [searchTerm, setSearchTerm] = useState('')

    // Hàm xử lý khi click vào phim
    const handleMovieSelect = (movieId) => {
        const movie = data.find(m => m.id === movieId)
        setSelectedMovie(movie)
    }

    // Hàm xử lý tìm kiếm
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    // Hàm lọc phim theo từ khóa tìm kiếm
    const filteredMovies = data.filter(movie => 
        movie.movieName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <>
            <div className="App bg-black text-white font-sans min-h-screen flex flex-col items-center justify-center py-10 px-4">
                <div className="App container max-w-screen-xl mx-auto">
                    <div className="Header mb-10">
                        <div className="Navbar flex items-center justify-between shadow-md mb-5 mx-24 p-4 bg-black-900 rounded-lg">
                            <div className="flex items-center space-x-8">
                                <h2 className="text-4xl font-bold text-white cursor-pointer hover:text-blue-400 transition-colors" 
                                    onClick={() => setCurrentPage('home')}>
                                    Anonime
                                </h2>
                                <div className="flex items-center space-x-6">
                                    <p className={`text-lg cursor-pointer transition-colors ${
                                        currentPage === 'home' 
                                            ? 'text-gray-400 font-semibold' 
                                            : 'text-gray-400 hover:text-blue-400'
                                    }`} 
                                    onClick={() => setCurrentPage('home')}>
                                        Home
                                    </p>
                                    <p className={`text-lg cursor-pointer transition-colors ${
                                        currentPage === 'list' 
                                            ? 'text-gray-400 font-semibold' 
                                            : 'text-gray-400 font-semibold'
                                    }`} 
                                    onClick={() => setCurrentPage('list')}>
                                        List anime
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <input
                                    type="text"
                                    placeholder="Search anime or movie..."
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    className="px-4 py-2 rounded-xl border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 w-80 transition-all"
                                />
                                {searchTerm && (
                                    <button 
                                        onClick={() => setSearchTerm('')}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='Main flex flex-col items-center justify-center'>
                        <div className="flex flex-col items-center justify-center mb-10">
                            <div className="flex flex-col rounded-lg shadow-lg mx-24">
                                <span className='text-white text-2xl mb-2 ml-5'>Explore</span>
                                <span className='text-gray-400 text-xl mb-2 ml-5'>What are you gonna watch today ?</span>

                                {/* Hiển thị thông tin phim được chọn hoặc ảnh mặc định */}
                                {selectedMovie ? (
                                    <div className="relative">
                                        <img src={myImgge} alt="my Image" className="w-auto h-auto object-cover rounded-t-lg" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-t-lg flex items-center justify-center">
                                            <div className="text-center p-6">
                                                <h3 className="text-3xl font-bold text-white mb-4">{selectedMovie.movieName}</h3>
                                                <p className="text-lg text-gray-300 mb-4 max-w-2xl">{selectedMovie.description}</p>
                                                <div className="flex items-center justify-center space-x-4">
                                                    <span className="bg-blue-600 text-white px-4 py-2 rounded-lg">Episode: {selectedMovie.episode}</span>
                                                    <span className="bg-green-600 text-white px-4 py-2 rounded-lg">ID: {selectedMovie.id}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <img src={myImgge} alt="my Image" className="w-auto h-auto object-cover rounded-t-lg hover:scale-105" />
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col p-4 rounded-lg shadow-lg mx-24">
                            <div className="flex items-center justify-between mb-4">
                                <span className='text-white text-4xl mb-2 ml-5'>
                                    {currentPage === 'home' ? 'New Release' : 'All Anime'}
                                </span>
                                {selectedMovie && (
                                    <button
                                        onClick={() => setSelectedMovie(null)}
                                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                                    >
                                        Clear Selection
                                    </button>
                                )}
                            </div>
                            
                            {/* Hiển thị kết quả tìm kiếm */}
                            {searchTerm && (
                                <div className="mb-4 p-3 bg-blue-900 bg-opacity-50 rounded-lg">
                                    <p className="text-blue-300">
                                        Tìm thấy {filteredMovies.length} kết quả cho "{searchTerm}"
                                    </p>
                                </div>
                            )}
                            
                            <DataPhim 
                                onMovieSelect={handleMovieSelect} 
                                selectedMovieId={selectedMovie?.id}
                                filteredData={searchTerm ? filteredMovies : data}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App
