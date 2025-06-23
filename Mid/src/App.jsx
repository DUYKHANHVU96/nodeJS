import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import myImgge from './assets/carousel.png'
import phimMot from './assets/anh1.png'
import phimHai from './assets/anh2.png'
import phimBa from './assets/anh3.png'
import phimTu from './assets/anh4.png'
import phimNam from './assets/anh5.png'
import phimSau from './assets/anh6.png'

function App() {

  return (
    <>
      <div className="App bg-black text-white font-sans min-h-screen flex flex-col items-center justify-center py-10 px-4">
        <div className="App container max-w-screen-xl mx-auto">
          <div className="Header mb-10">
            <div className="Navbar flex items-center justify-between shadow-md mb-5 mx-24">
              <h2 className="text-4xl font-bold text-white">Anonime</h2>
              <div className="flex flex-start space-x-4 ">
                <p className="text-gray-400 hover:text-blue-400 cursor-pointer">Home</p>
                <p className="text-gray-400 hover:text-blue-400 cursor-pointer">List anime</p>
              </div>
              <input
                type="text"
                placeholder="Search anime or movie "
                className="px-3 py-1 rounded-xl border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 w-72"
              />
            </div>

          </div>

          <div className='Main flex flex-col items-center justify-center'>
            <div className="flex flex-col items-center justify-center mb-10">
              <div className="flex flex-col rounded-lg shadow-lg mx-24">
                <span className='text-white text-2xl mb-2 ml-5'>Explore</span>
                <span className='text-gray-400 text-xl mb-2 ml-5'>What are you gonna watch today ?</span>
                <img src={myImgge} alt="my Image" className="w-auto h-auto object-cover rounded-t-lg hover:scale-105 cursor-pointer" />
              </div>
            </div>


            <div className="flex flex-col p-4 rounded-lg shadow-lg mx-24">
              <div className="flex items-center justify-between mb-4">
                <span className='text-white text-4xl mb-2 ml-5'>New Release</span>
              </div>
              <div className='flex flex-row gap-10 justify-center'>
                <div className="flex flex-col space-y-4">
                  <img
                    src={phimMot}
                    alt="One Piece"
                    className="object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                    style={{ width: '170px', height: '284px' }}
                  />
                </div>

                <div className="flex flex-col space-y-4">
                  <img
                    src={phimHai}
                    alt="One Piece"
                    className="object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                    style={{ width: '170px', height: '284px' }}
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <img
                    src={phimBa}
                    alt="One Piece"
                    className="object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                    style={{ width: '170px', height: '284px' }}
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <img 
                    data
                    src={phimTu}
                    alt="One Piece"
                    className="object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                    style={{ width: '170px', height: '284px' }}
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <img 
                    src={phimNam}
                    alt="One Piece"
                    className="object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                    style={{ width: '170px', height: '284px' }}
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <img
                    src={phimSau}
                    alt="One Piece"
                    className="object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                    style={{ width: '170px', height: '284px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
