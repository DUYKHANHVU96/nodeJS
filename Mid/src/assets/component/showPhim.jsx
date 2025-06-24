import React, { useState } from 'react'
import phimMot from '../anh1.png'
import phimHai from '../anh2.png'
import phimBa from '../anh3.png'
import phimTu from '../anh4.png'
import phimNam from '../anh5.png'
import phimSau from '../anh6.png'

function ShowPhim({ id, movieName, description, episode, onMovieSelect, isSelected }) {
    const [showId, setShowId] = useState(false)

    // Map ID với hình ảnh tương ứng
    const getImageByID = (id) => {
        const imageMap = {
            "1": phimMot,
            "2": phimHai,
            "3": phimBa,
            "4": phimTu,
            "5": phimNam,
            "6": phimSau
        }
        return imageMap[id] || phimMot
    }

    const handleImageClick = () => {
        setShowId(!showId)
    }

    const handleMovieSelect = () => {
        if (onMovieSelect) {
            onMovieSelect(id)
        }
    }

    return (
        <div className="relative w-[170px] h-[284px] flex-shrink-0">
            <img
                src={getImageByID(id)}
                alt={movieName}
                className={`w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer ${
                    isSelected ? 'ring-4 ring-blue-500 scale-105' : ''
                }`}
                onClick={handleMovieSelect}
                onDoubleClick={handleImageClick}
            />
            
            {/* Hiển thị ID khi double click */}
            {showId && (
                <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm z-10">
                    ID: {id}
                </div>
            )}
            
            {/* Hiển thị thông tin khi double click */}
            {showId && (
                <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-75 text-white p-2 rounded text-xs z-10">
                    <div className="font-bold">{movieName}</div>
                    <div>Episode: {episode}</div>
                </div>
            )}
            
            {/* Hiển thị badge khi phim được chọn */}
            {isSelected && (
                <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10">
                    ✓
                </div>
            )}
        </div>
    )
}

export default ShowPhim
