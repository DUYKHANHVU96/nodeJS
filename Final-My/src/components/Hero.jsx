import React from 'react'

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Thực Phẩm Bổ Sung
            <span className="block text-yellow-300">Chất Lượng Cao</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Cung cấp các sản phẩm thực phẩm bổ sung chất lượng cao, giúp bạn đạt được mục tiêu tập luyện 
            và xây dựng cơ bắp một cách hiệu quả và an toàn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
              Mua Ngay
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
      </div>
    </div>
  )
}

export default Hero 