import React from 'react'

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Whey Protein',
      description: 'Protein chất lượng cao cho cơ bắp',
      icon: '💪',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'BCAA',
      description: 'Axit amin thiết yếu cho phục hồi',
      icon: '🏃',
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Creatine',
      description: 'Tăng sức mạnh và hiệu suất',
      icon: '⚡',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      name: 'Pre-Workout',
      description: 'Năng lượng cho buổi tập',
      icon: '🔥',
      color: 'bg-red-500'
    },
    {
      id: 5,
      name: 'Vitamin & Khoáng chất',
      description: 'Hỗ trợ sức khỏe tổng thể',
      icon: '🌿',
      color: 'bg-yellow-500'
    },
    {
      id: 6,
      name: 'Omega-3',
      description: 'Chất béo tốt cho tim mạch',
      icon: '❤️',
      color: 'bg-pink-500'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Danh Mục Sản Phẩm
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá các loại thực phẩm bổ sung chất lượng cao được thiết kế đặc biệt 
            cho người tập luyện thể thao
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
            >
              <div className={`${category.color} rounded-t-lg p-6 text-center`}>
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-center">{category.description}</p>
                <button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-300">
                  Xem Sản Phẩm
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories 