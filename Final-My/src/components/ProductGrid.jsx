import React, { useState } from 'react'
import ProductCard from './ProductCard'

const ProductGrid = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: 'Whey Protein Gold Standard',
      category: 'whey',
      price: 1200000,
      originalPrice: 1500000,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 156,
      description: 'Protein chất lượng cao, 24g protein mỗi serving',
      inStock: true
    },
    {
      id: 2,
      name: 'BCAA 2:1:1 Premium',
      category: 'bcaa',
      price: 450000,
      originalPrice: 550000,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 89,
      description: 'Axit amin thiết yếu cho phục hồi cơ bắp',
      inStock: true
    },
    {
      id: 3,
      name: 'Creatine Monohydrate',
      category: 'creatine',
      price: 350000,
      originalPrice: 400000,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 234,
      description: 'Tăng sức mạnh và hiệu suất tập luyện',
      inStock: true
    },
    {
      id: 4,
      name: 'Pre-Workout Explosion',
      category: 'preworkout',
      price: 650000,
      originalPrice: 750000,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 123,
      description: 'Năng lượng tối đa cho buổi tập',
      inStock: false
    },
    {
      id: 5,
      name: 'Multivitamin Complete',
      category: 'vitamin',
      price: 280000,
      originalPrice: 320000,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 67,
      description: 'Vitamin và khoáng chất thiết yếu',
      inStock: true
    },
    {
      id: 6,
      name: 'Omega-3 Fish Oil',
      category: 'omega',
      price: 380000,
      originalPrice: 450000,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
      rating: 4.4,
      reviews: 45,
      description: 'Chất béo tốt cho tim mạch và não bộ',
      inStock: true
    },
    {
      id: 7,
      name: 'Casein Protein Night',
      category: 'whey',
      price: 1100000,
      originalPrice: 1300000,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 78,
      description: 'Protein chậm hấp thu cho ban đêm',
      inStock: true
    },
    {
      id: 8,
      name: 'Glutamine Recovery',
      category: 'bcaa',
      price: 320000,
      originalPrice: 380000,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop',
      rating: 4.3,
      reviews: 56,
      description: 'Hỗ trợ phục hồi và tăng cường miễn dịch',
      inStock: true
    }
  ]

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'whey', name: 'Whey Protein' },
    { id: 'bcaa', name: 'BCAA' },
    { id: 'creatine', name: 'Creatine' },
    { id: 'preworkout', name: 'Pre-Workout' },
    { id: 'vitamin', name: 'Vitamin' },
    { id: 'omega', name: 'Omega-3' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sản Phẩm Nổi Bật
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chọn lọc những sản phẩm chất lượng cao nhất cho mục tiêu tập luyện của bạn
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              formatPrice={formatPrice}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Không có sản phẩm nào trong danh mục này.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductGrid 