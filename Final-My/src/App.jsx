import React, { useState } from 'react'
import './App.css'
import shoppingbag from './assets/shoppingBag.png'
import wheyGold from './assets/whey gold.png'
import d3k2 from './assets/d3k2.png'
import preworkout from './assets/pre workout.png'
import omega3 from './assets/omega3-1.png'
import creatine from './assets/creatine.png'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [showAllBrands, setShowAllBrands] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Simple Navbar */}
      <nav className="flex justify-between items-center bg-red-600 shadow-lg p-1">
        <div className="flex justify-between items-center gap-10 text-xl font-bold p-10">
          <a href="/" className='hover:text-yellow-600'>Trang chủ</a>
          <a href="/" className='hover:text-yellow-600'>Sản phẩm</a>
        </div>

        <div className="flex flex-col justify-between items-center">
          <span className='text-green-400 bg-black rounded-full p-3 text-3xl'>KV</span>
          <h1 className="text-2xl font-bold text-black">WheyShop</h1>
        </div>

        <div className="flex justify-between items-center gap-10 text-xl font-bold p-10">
          <a href="/" className='hover:text-yellow-600'>Liên hệ</a>
          <a href="/" className='hover:text-yellow-600'>Đăng nhập</a>
          <a href="/" className='hover:text-yellow-600'><img src={shoppingbag} alt="giỏ hàng" className='w-10 h-10 hover:cursor-pointer hover:scale-110 transition-all duration-300 bg-black rounded-lg p-1' /></a>
        </div>
      </nav>

      {/* Simple Hero */}
      <div className="bg-[url('./assets/image_banner1.png')] bg-cover bg-center bg-no-repeat h-[800px] text-white flex justify-center p-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Thực Phẩm Bổ Sung Chất Lượng Cao
          </h1>
          <p className="text-xl mb-8 text-black font-bold">
            Cung cấp các sản phẩm thực phẩm bổ sung chất lượng cao cho người tập luyện
            <br />
            Cam Kết Chính Hãng 100%, Bồi Thường 20 Lần Nếu Phát Hiện Hàng Giả.
          </p>
          <button className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-500 hover:text-white">
            Mua Ngay
          </button>
        </div>
      </div>

      {/* Simple Products */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Sản Phẩm Nổi Bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Product 1 */}
          <div className="flex flex-col justify-between items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
              <img
                src={wheyGold}
                alt="Whey Protein Gold Standard"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="flex justify-center text-lg font-semibold mb-2">Whey Protein Gold Standard</h3>
            <p className="text-gray-600 mb-4">Protein chất lượng cao, 24g protein mỗi serving</p>
            <div className="flex flex-col justify-between items-center gap-4">
              <span className="text-xl font-bold text-blue-600">2.200.000₫</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Thêm vào giỏ
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col justify-between items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
              <img
                src={d3k2}
                alt="Whey Protein Gold Standard"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="flex justify-center text-lg font-semibold mb-2">Sports Research D3 + K2</h3>
            <p className="text-gray-600 mb-4"> Giảm tiêu xương, Chống mất cơ, Tăng cường hệ miễn dịch</p>
            <div className="flex flex-col justify-between items-center gap-4">
              <span className="text-xl font-bold text-blue-600">490.000₫</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Thêm vào giỏ
              </button>
            </div>
          </div>
          {/* Product 3 */}
          <div className="flex flex-col justify-between items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
              <img
                src={preworkout}
                alt="Whey Protein Gold Standard"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="flex justify-center text-lg font-semibold mb-2">Applied ABE Pre-Workout</h3>
            <p className="text-gray-600 mb-4">Sử dụng trước khi tập - Hỗ trợ tăng sức mạnh</p>
            <div className="flex flex-col justify-between items-center gap-4">
              <span className="text-xl font-bold text-blue-600">900.000₫</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Thêm vào giỏ
              </button>
            </div>
          </div>
          {/* Product 4 */}
          <div className="flex flex-col justify-between items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
              <img
                src={omega3}
                alt="Whey Protein Gold Standard"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="flex justify-center text-lg font-semibold mb-2">Dầu tảo Sports Research Vegan Omega-3</h3>
            <p className="text-gray-600 mb-4">Hỗ trợ sức khỏe tim mạch, não bộ và thị lực</p>
            <div className="flex flex-col justify-between items-center gap-4">
              <span className="text-xl font-bold text-blue-600">750.000₫</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Thêm vào giỏ
              </button>
            </div>
          </div>
          {/* Product 5 */}
          <div className="flex flex-col justify-between items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
              <img
                src={creatine}
                alt="Whey Protein Gold Standard"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>  
            <h3 className="flex justify-center text-lg font-semibold mb-2">Amix Creatine</h3>
            <p className="text-gray-600 mb-4">Gia tăng sức mạnh cơ bắp, Bơm cơ căng phồng, Hỗ trợ tổng hợp protein</p>
            <div className="flex flex-col justify-between items-center gap-4">
              <span className="text-xl font-bold text-blue-600">640.000₫</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Brands Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">THƯƠNG HIỆU NỔI BẬT</h2>
          <p className="text-lg text-gray-700">
            <span className="text-black font-semibold">KVWheyShop</span> Uy Tín 10 Năm Bán Hàng - 
            <span className="text-black font-semibold"> Cam Kết Chính Hãng 100%, Bồi Thường 20 Lần Nếu Phát Hiện Hàng Giả.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          {/* Row 1 - Always Visible */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-black mb-2">ON</div>
              <div className="text-sm text-gray-600">OPTIMUM NUTRITION</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="text-xl font-bold text-black mb-2">nutrabolics.</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="text-lg font-bold text-red-600 mb-1">Dymatize</div>
              <div className="text-xs text-gray-600">PERFECTING ATHLETIC NUTRITION</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">now</div>
              <div className="text-yellow-500 text-2xl">☀</div>
            </div>
          </div>
          
          {/* Row 2 - Always Visible */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="text-xl font-bold text-red-600">REDCON1</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500 mb-1">R1</div>
              <div className="text-sm text-gray-600">RULE 1</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="text-lg font-bold text-black mb-1">APPLIED NUTRITION</div>
              <div className="text-blue-500 text-xl">⚛</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="text-xl font-bold text-red-600 mb-1">AMIX</div>
              <div className="text-xs text-gray-600">ADVANCED NUTRITION</div>
            </div>
          </div>
          
          {/* Hidden Brands - Show when expanded */}
          {showAllBrands && (
            <>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">bpi</div>
                  <div className="text-sm text-gray-600">SPORTS</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600 mb-1">MHP</div>
                  <div className="text-yellow-500 text-lg">⭐</div>
                  <div className="text-xs text-gray-600">MAXIMUM HUMAN PERFORMANCE</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-xl font-bold text-black mb-1">MUTANT</div>
                  <div className="text-red-500 text-lg">☣</div>
                  <div className="text-xs text-gray-600">Leave Humanity Behind!</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600 mb-1">nutricost</div>
                  <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-xl font-bold text-red-600 mb-1">LABRADA</div>
                  <div className="text-sm text-gray-600">NUTRITION</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-xl font-bold text-black mb-1">PVL</div>
                  <div className="text-xs text-gray-600">PURE VITA LABS</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">M</div>
                  <div className="text-sm text-gray-600">MUSCLETECH</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-xl font-bold text-black mb-1">Nutrex</div>
                  <div className="text-sm text-gray-600">RESEARCH</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600 mb-1">OstroVit®</div>
                  <div className="text-xs text-purple-500">TECHNOLOGY OF NUTRITION</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-xl font-bold text-black mb-1">BLACKMORES®</div>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-8">
          <button 
            onClick={() => setShowAllBrands(!showAllBrands)}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            {showAllBrands ? 'Thu gọn' : 'Xem thêm'}
          </button>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="bg-red-600 text-black py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">KVWheyShop</h3>
          <p className="text-black mb-4">
            Chuyên cung cấp các sản phẩm thực phẩm bổ sung chất lượng cao
          </p>
          <p className="text-gray-400">© 2024 KVWheyShop. Tất cả quyền được bảo lưu.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
