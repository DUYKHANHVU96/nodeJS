// Import các thư viện React cần thiết
import React, { useState, useEffect, createContext, useContext } from 'react' // React hooks để quản lý state và side effects
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom' // React Router để điều hướng
import '../../App.css' // Import CSS chính
import Image from '../../assets/image_banner1.png' // Import hình ảnh banner

// Import tất cả data từ file dataWhey
import {
  productsData, // Dữ liệu sản phẩm
  categoriesData, // Dữ liệu danh mục
  featuredProductsData, // Sản phẩm nổi bật
  brandsData, // Dữ liệu thương hiệu
  contactInfoData, // Thông tin liên hệ
  heroData, // Dữ liệu hero section
  companyData, // Dữ liệu công ty
  formPlaceholders, // Placeholder cho form
  pageTitles, // Tiêu đề các trang
  sectionTitles, // Tiêu đề các section
  buttonTexts, // Text cho các button
  messages, // Các message
  couponData, // Dữ liệu mã giảm giá
  knowledgeArticlesData, // Dữ liệu bài viết kiến thức
  companyFeaturesData, // Tính năng công ty
  aiAssistantData, // Dữ liệu AI assistant
  aiKnowledgeBase, // Cơ sở kiến thức AI
  productRecommendations // Gợi ý sản phẩm
} from './dataWhey'

// Tạo AuthContext để quản lý trạng thái đăng nhập
const AuthContext = createContext();

// Export AuthContext để các component khác có thể sử dụng
export { AuthContext };

// AuthProvider component
function AuthProvider({ children }) {
  const [username, setUsername] = useState(localStorage.getItem('username') || null);

  const login = (user) => {
    localStorage.setItem('username', user);
    setUsername(user);
  };

  const logout = () => {
    localStorage.removeItem('username');
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook để sử dụng AuthContext
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Import các component con
import ThanhToanPage from './ThanhToanPage.jsx' // Component trang thanh toán
import { useChatGPT } from '../../services/chatgptService.jsx' // Hook để sử dụng ChatGPT
import ApiKeyConfig from '../ApiKeyConfig.jsx' // Component cấu hình API key
import CommitmentDetail from '../CommitmentDetail.jsx' // Component chi tiết cam kết


// Component Trang chủ - Hiển thị trang chủ với hero section, sản phẩm nổi bật, thương hiệu, v.v.
function HomePage() {
  // State để kiểm soát việc hiển thị tất cả thương hiệu hay chỉ một số
  const [showAllBrands, setShowAllBrands] = useState(false)
  // Hook để điều hướng giữa các trang
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-cover bg-center bg-no-repeat h-[800px] text-white flex justify-center p-10" style={{ backgroundImage: `url(${Image})` }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">
            {heroData.title}
          </h1>
          <p className="text-xl mb-8 text-black font-bold">
            {heroData.description.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < heroData.description.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
          <button 
            onClick={() => navigate('/products')}
            className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-500 hover:text-white"
          >
            {heroData.buttonText}
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{pageTitles.home}</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {featuredProductsData.map(product => (
            <div key={product.id} className="flex flex-col justify-between items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="flex justify-center text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex flex-col justify-between items-center gap-4">
                <span className="text-xl font-bold text-blue-600">{product.price}</span>
                <button 
                  onClick={() => navigate('/products')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  {buttonTexts.addToCart}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Brands Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">{pageTitles.brands}</h2>
          <p className="text-lg text-gray-700">
            <span className="text-black font-semibold">{companyData.name}</span> {companyData.tagline}
          </p>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          {brandsData.map(brand => {
            // Show always visible brands or hidden brands when expanded
            if (!brand.hidden || showAllBrands) {
              return (
                <div key={brand.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className={`text-2xl font-bold mb-2 ${brand.color}`}>{brand.name}</div>
                    {brand.icon && <div className={`text-2xl ${brand.color}`}>{brand.icon}</div>}
                    {brand.line && <div className={`w-16 h-1 ${brand.line} mx-auto`}></div>}
                    {brand.subtitle && (
                      <div className={`text-sm text-gray-600 ${brand.name === 'now' ? 'text-yellow-500 text-2xl' : ''}`}>
                        {brand.subtitle}
                      </div>
                    )}
                  </div>
                </div>
              )
            }
            return null
          })}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-8">
          <button 
            onClick={() => setShowAllBrands(!showAllBrands)}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            {showAllBrands ? buttonTexts.showLess : buttonTexts.showMore}
          </button>
        </div>
      </div>

      {/* Company Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-4">CAM KẾT CỦA CHÚNG TÔI</h2>
          <p className="text-lg text-gray-700">Những lý do bạn nên chọn KVWheyShop</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyFeaturesData.map((feature, index) => (
            <div 
              key={feature.id} 
              onClick={() => navigate(`/cam-ket/${feature.id}`)}
              className="bg-gray-50 rounded-lg p-6 text-center hover-lift fade-in-up cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-gray-100" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-blue-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="flex items-center justify-center text-blue-600 font-medium text-sm">
                <span>Xem chi tiết</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coupon Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">MÃ GIẢM GIÁ HẤP DẪN</h2>
          <p className="text-xl text-blue-100">Tiết kiệm chi phí với các mã giảm giá độc quyền</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {couponData.map((coupon, index) => (
            <div key={coupon.id} className="bg-white rounded-lg shadow-lg p-6 hover-lift fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className={`${coupon.color} text-white text-center py-2 px-4 rounded-lg mb-4`}>
                <div className="text-2xl font-bold">{coupon.code}</div>
                <div className="text-sm">Giảm {coupon.discount}</div>
              </div>
              <div className="text-center">
                <p className="text-gray-700 mb-2">{coupon.description}</p>
                <p className="text-sm text-gray-500 mb-4">Đơn hàng tối thiểu: {coupon.minOrder}</p>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(coupon.code);
                    alert(`Đã sao chép mã ${coupon.code}!`);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                >
                  Sao chép mã
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Knowledge Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">{pageTitles.kienThuc}</h2>
          <p className="text-lg text-gray-700">Cập nhật kiến thức mới nhất về thực phẩm bổ sung</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {knowledgeArticlesData.slice(0, 6).map((article, index) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-semibold">{article.category}</span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{article.date}</span>
                  <button 
                    onClick={() => navigate('/kien-thuc')}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                  >
                    Đọc thêm →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button 
            onClick={() => navigate('/kien-thuc')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Xem tất cả bài viết
          </button>
        </div>
      </div>
    </div>
  )
}

// Hàm trộn ngẫu nhiên mảng sản phẩm để hiển thị đa dạng
function shuffleArray(array) {
  // Thuật toán Fisher-Yates shuffle để trộn ngẫu nhiên mảng
  const arr = array.slice(); // Tạo bản sao của mảng gốc
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Chọn vị trí ngẫu nhiên
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Hoán đổi 2 phần tử
  }
  return arr; // Trả về mảng đã được trộn
}

// Component Sản phẩm - Hiển thị danh sách sản phẩm với bộ lọc và giỏ hàng
function ProductsPage() {
  const navigate = useNavigate(); // Hook điều hướng
  const { username } = useAuth(); // Sử dụng AuthContext để kiểm tra trạng thái đăng nhập
  const [selectedCategory, setSelectedCategory] = useState("Tất cả") // State lưu danh mục được chọn
  const [showAll, setShowAll] = useState(false) // State kiểm soát hiển thị tất cả sản phẩm
  const [randomProducts, setRandomProducts] = useState([]) // State lưu sản phẩm ngẫu nhiên
  const [cart, setCart] = useState([]) // State quản lý giỏ hàng

  let filteredProducts = selectedCategory === "Tất cả"
    ? productsData
    : productsData.filter(product => product.category === selectedCategory)

  // Load giỏ hàng từ localStorage khi component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart'); // Lấy giỏ hàng đã lưu
    if (savedCart) {
      setCart(JSON.parse(savedCart)); // Parse JSON và cập nhật state
    }
  }, []);

  // Lắng nghe thay đổi localStorage để đồng bộ giỏ hàng giữa các tab
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === 'cart') { // Chỉ xử lý khi key là 'cart'
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
          setCart(JSON.parse(savedCart)); // Cập nhật state khi có thay đổi
        }
      }
    };
    window.addEventListener('storage', handleStorage); // Thêm event listener
    return () => window.removeEventListener('storage', handleStorage); // Cleanup khi unmount
  }, []);

  // Hàm thêm sản phẩm vào giỏ hàng
  function addToCart(product) {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    if (!username) {
      alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
      navigate('/login');
      return;
    }
    
    const existingItem = cart.find(item => item.id === product.id); // Tìm sản phẩm đã có trong giỏ hàng
    if (existingItem) {
      // Nếu sản phẩm đã có, tăng số lượng lên 1
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 } // Tăng quantity
          : item
      ));
    } else {
      // Nếu sản phẩm chưa có, thêm mới với quantity = 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert('Đã thêm vào giỏ hàng!'); // Thông báo cho người dùng
  }

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id)); // Lọc ra sản phẩm có id khác với id cần xóa
  };

  // Hàm tăng số lượng sản phẩm trong giỏ hàng
  const increaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item // Tăng quantity lên 1
    );
    setCart(updatedCart); // Cập nhật state
  };

  // Hàm giảm số lượng sản phẩm trong giỏ hàng
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } // Giảm quantity xuống 1 (chỉ khi quantity > 1)
        : item
    );
    setCart(updatedCart); // Cập nhật state
  };

  // Hàm tính tổng tiền giỏ hàng
  const totalPrice = cart.reduce((total, item) => {
    // Chuyển đổi price từ string sang number (loại bỏ ₫ và dấu phẩy)
    const priceNumber = parseInt(item.price.replace(/[^\d]/g, '')); // Lấy chỉ số từ price string
    return total + (priceNumber * item.quantity); // Tính tổng = giá * số lượng
  }, 0); // Bắt đầu với giá trị 0

  // Lưu giỏ hàng vào localStorage mỗi khi cart thay đổi để persist data
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart)); // Chuyển cart thành JSON string và lưu
  }, [cart]); // Chạy lại khi cart thay đổi

  // Khi chọn 'Tất cả' và chưa bấm xem thêm, lấy 8 sản phẩm ngẫu nhiên để hiển thị
  useEffect(() => {
    if (selectedCategory === "Tất cả" && !showAll) {
      setRandomProducts(shuffleArray(productsData).slice(0, 8)); // Trộn và lấy 8 sản phẩm đầu
    }
  }, [selectedCategory, showAll]); // Chạy lại khi category hoặc showAll thay đổi

  const displayProducts = (selectedCategory === "Tất cả" && !showAll)
    ? randomProducts
    : filteredProducts

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">{pageTitles.products}</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Phần sản phẩm */}
          <div className="flex-1">
            {/* Category Filter */}
            <div className="flex justify-center mb-8">
              <div className="flex flex-wrap gap-4">
                {categoriesData.map(category => (
                  <button
                    key={category}
                    onClick={() => { setSelectedCategory(category); setShowAll(false); }}
                    className={`flex justify-center items-center px-6 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:scale-[1.025] transition-all duration-300 flex flex-col items-center border border-gray-100 h-full min-h-[500px] group"
                >
                  <div className="w-full h-56 rounded-xl mb-4 overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 border border-gray-200 shadow-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-52 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-extrabold text-center text-blue-900 mb-2 tracking-tight leading-snug line-clamp-2">
                    {product.name}
                  </h3>
                  <span className="inline-block text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full shadow mb-2 mt-1">
                    {product.price}
                  </span>
                  <p className="text-gray-600 text-sm text-left w-full mb-4 whitespace-pre-line leading-relaxed flex-1 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex flex-col justify-end items-center gap-2 w-full mt-auto">
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow text-base tracking-wide"
                    >
                      {buttonTexts.addToCart}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Nút Xem thêm/Thu gọn */}
            {selectedCategory === "Tất cả" && filteredProducts.length > 8 && (
              <div className="flex justify-center mt-8">
                <button
                  className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => {
                    if (showAll) {
                      setShowAll(false);
                      setRandomProducts(shuffleArray(productsData).slice(0, 8));
                    } else {
                      setShowAll(true);
                    }
                  }}
                >
                  {showAll ? 'Thu gọn' : 'Xem thêm'}
                </button>
              </div>
            )}
          </div>

          {/* Phần giỏ hàng */}
          <div className="w-1/4:w-1/4">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-4">Giỏ hàng</h2>
              {!username ? (
                <div className="text-center py-6">
                  <div className="text-4xl mb-3">🔒</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Vui lòng đăng nhập</h3>
                  <p className="text-gray-600 mb-4 text-sm">Bạn cần đăng nhập để xem và quản lý giỏ hàng</p>
                  <button
                    onClick={() => navigate('/login')}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    Đăng nhập ngay
                  </button>
                </div>
              ) : cart.length === 0 ? (
                <p className="text-gray-500">Giỏ hàng trống</p>
              ) : (
                <div>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center border-b py-3"
                      >
                        <div className="flex-1">
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-blue-600 font-semibold">{item.price}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {item.quantity === 1 ? (
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                              Xóa
                            </button>
                          ) : (
                            <>
                              <button
                                onClick={() => decreaseQuantity(item.id)}
                                className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
                              >
                                -
                              </button>
                              <span className="px-2 font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => increaseQuantity(item.id)}
                                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                              >
                                +
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tổng tiền */}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Tổng cộng:</span>
                      <span>{totalPrice.toLocaleString('vi-VN')}₫</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      console.log('Nút thanh toán được click');
                      if (cart.length === 0) {
                        alert('Giỏ hàng trống! Vui lòng thêm sản phẩm trước khi thanh toán.');
                        return;
                      }
                      if (!username) {
                        alert('Vui lòng đăng nhập để tiến hành thanh toán!');
                        navigate('/login');
                        return;
                      }
                      navigate('/thanh-toan');
                    }}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 mt-6"
                  >
                    Thanh toán
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Component Liên hệ - Form liên hệ với validation
function ContactPage() {
  // State quản lý dữ liệu form
  const [formData, setFormData] = useState({
    name: '', // Tên người dùng
    email: '', // Email
    phone: '', // Số điện thoại
    message: '' // Nội dung tin nhắn
  });
  const [errors, setErrors] = useState({}); // State lưu lỗi validation
  const [success, setSuccess] = useState(false); // State thông báo thành công

  // Hàm validate form - kiểm tra tính hợp lệ của dữ liệu
  const validate = () => {
    const newErrors = {}; // Object lưu các lỗi
    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ và tên.'; // Kiểm tra tên không được để trống
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email.'; // Kiểm tra email không được để trống
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex kiểm tra định dạng email
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Email không hợp lệ.'; // Email không đúng định dạng
      }
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại.'; // Kiểm tra số điện thoại không được để trống
    } else {
      const phoneRegex = /^\d{9,11}$/; // Regex kiểm tra số điện thoại 9-11 số
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Số điện thoại không hợp lệ.'; // Số điện thoại không đúng định dạng
      }
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Vui lòng nhập nội dung.'; // Kiểm tra nội dung không được để trống
    }
    return newErrors; // Trả về object chứa các lỗi
  };

  // Hàm xử lý thay đổi input - cập nhật state và xóa lỗi
  const handleChange = (e) => {
    setFormData({
      ...formData, // Giữ nguyên dữ liệu cũ
      [e.target.name]: e.target.value // Cập nhật giá trị mới cho field tương ứng
    });
    setErrors({ ...errors, [e.target.name]: undefined }); // Xóa lỗi của field đang được nhập
  };

  // Hàm xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn form submit mặc định
    const validationErrors = validate(); // Validate form
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Hiển thị lỗi nếu có
      setSuccess(false);
      return; // Dừng xử lý nếu có lỗi
    }
    setSuccess(true); // Hiển thị thông báo thành công
    setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    setErrors({}); // Xóa tất cả lỗi
    setTimeout(() => setSuccess(false), 3000); // Ẩn thông báo sau 3 giây
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800 flex items-center justify-center gap-2">
          <span role="img" aria-label="contact">📧</span> {pageTitles.contact}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 text-blue-600 flex items-center gap-2">
              <span role="img" aria-label="info">ℹ️</span> {sectionTitles.contactInfo}
            </h2>
            <div className="space-y-4">
              {contactInfoData.map(info => (
                <div key={info.id} className="flex items-center">
                  <div className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center mr-4`}>
                    <span className={`${info.iconColor} text-xl`}>{info.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{info.title}</h3>
                    {info.googleMapsUrl ? (
                      <div className="flex items-center gap-2">
                        <p className="text-gray-600">{info.value}</p>
                        <a 
                          href={info.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600 transition-colors duration-200"
                        >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                          Xem bản đồ
                        </a>
                      </div>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-600 flex items-center gap-2">
              <span role="img" aria-label="form">📝</span> {sectionTitles.contactForm}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nhập họ và tên của bạn"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Nhập số điện thoại (9-11 số)"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nội dung <span className="text-red-500">*</span></label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Bạn cần hỗ trợ gì?"
                  rows="4"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <span role="img" aria-label="send">📨</span> {buttonTexts.sendMessage}
              </button>
              {success && (
                <div className="text-green-600 text-center mt-4 flex items-center justify-center gap-2">
                  <span role="img" aria-label="success">✅</span> Gửi liên hệ thành công! Chúng tôi sẽ phản hồi sớm nhất.
                </div>
              )}
            </form>
          </div>
        </div>
        
        {/* Google Maps Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-600 flex items-center gap-2">
            <span role="img" aria-label="map">🗺️</span> Vị trí của chúng tôi
          </h2>
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424184981303!2d106.6983153152608!3d10.776755992319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f46f64b933f%3A0xf8a6e5b2a5a4f1f4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiB2aWV0!5e0!3m2!1svi!2s!4v1640995200000!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KVWheyShop Location"
              className="rounded-lg"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600 mb-2">123 Đường ABC, Quận 1, TP.HCM</p>
            <a 
              href="https://maps.google.com/?q=123+Đường+ABC,+Quận+1,+TP.HCM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Mở Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component Đăng nhập
function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [isValid, setIsValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useLocation().navigate || (() => {});

  // Hàm kiểm tra định dạng email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  // Hàm kiểm tra định dạng mật khẩu
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };
  // Hàm kiểm tra tên người dùng (ít nhất 3 ký tự, chỉ chữ và số)
  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
    return usernameRegex.test(username);
  };

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (name === "email") {
      setIsValid(validateEmail(value));
    }
    if (name === "password") {
      setIsPasswordValid(validatePassword(value));
    }
    if (name === "username") {
      setIsUsernameValid(validateUsername(value));
    }
  };

  const { login } = useAuth();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isUsernameValid) {
      alert("Tên người dùng phải có ít nhất 3 ký tự, chỉ gồm chữ và số.");
      return;
    }
    if (!isValid) {
      alert("Email không hợp lệ. Vui lòng kiểm tra lại.");
      return;
    }
    if (!isPasswordValid) {
      alert("Mật khẩu phải có ít nhất 8 ký tự, ít nhất 1 chữ cái và 1 số.");
      return;
    }
    if (isLogin) {
      alert(messages.loginSuccess);
      login(formData.username);
    } else {
      alert(messages.registerSuccess);
      login(formData.username);
    }
    setFormData({ username: '', email: '', password: '' });
    if (navigate) navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-800 mb-2">
              {isLogin ? pageTitles.login : pageTitles.register}
            </h1>
            <p className="text-gray-600">
              {isLogin ? messages.welcomeBack : messages.createAccount}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tên người dùng</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${isUsernameValid ? "border-green-500 focus:ring-green-500" : "border-red-500 focus:ring-red-500"}`}
                placeholder="Nhập tên người dùng (ít nhất 3 ký tự, chỉ chữ và số)"
              />
              <p className="text-sm mt-1" style={{ color: isUsernameValid ? "green" : "red" }}>
                {formData.username
                  ? isUsernameValid
                    ? "Tên người dùng hợp lệ!"
                    : "Tên người dùng phải có ít nhất 3 ký tự, chỉ gồm chữ và số."
                  : "Vui lòng nhập tên người dùng để kiểm tra."}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${isValid ? "border-green-500 focus:ring-green-500" : "border-red-500 focus:ring-red-500"}`}
                placeholder={formPlaceholders.login.email}
              />
              <p className="text-sm mt-1" style={{ color: isValid ? "green" : "red" }}>
                {formData.email
                  ? isValid
                    ? "Email hợp lệ!"
                    : "Email không hợp lệ. Vui lòng kiểm tra lại."
                  : "Vui lòng nhập email để kiểm tra."}
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mật khẩu</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${isPasswordValid ? "border-green-500 focus:ring-green-500" : "border-red-500 focus:ring-red-500"}`}
                placeholder={formPlaceholders.login.password}
              />
              <p className="text-sm mt-1" style={{ color: isPasswordValid ? "green" : "red" }}>
                {formData.password
                  ? isPasswordValid
                    ? "Mật khẩu hợp lệ!"
                    : "Mật khẩu phải có ít nhất 8 ký tự, ít nhất 1 chữ cái và 1 số."
                  : "Vui lòng nhập mật khẩu để kiểm tra."}
              </p>
            </div>
            
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Xác nhận mật khẩu</label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={formPlaceholders.login.confirmPassword}
                />
              </div>
            )}
            
            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                                  <span className="text-sm text-gray-600">{messages.rememberMe}</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">{messages.forgotPassword}</a>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              {isLogin ? buttonTexts.login : buttonTexts.register}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {isLogin ? buttonTexts.switchToRegister : buttonTexts.switchToLogin}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function AccountPage() {
  const { username } = useAuth();
  const [phone, setPhone] = useState(localStorage.getItem('phone') || '')
  const [address, setAddress] = useState(localStorage.getItem('address') || '')
  const [success, setSuccess] = useState(false)
  const [orders, setOrders] = useState([])

  // Load lịch sử đơn hàng
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const userOrders = savedOrders.filter(order => order.username === username);
    setOrders(userOrders);
  }, [username]);

  const handleSave = (e) => {
    e.preventDefault()
    localStorage.setItem('phone', phone)
    localStorage.setItem('address', address)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Thông tin tài khoản */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Thông tin tài khoản</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Email:</label>
                <input 
                  type="email" 
                  value={username} 
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600" 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Số điện thoại:</label>
                <input 
                  type="text" 
                  value={phone} 
                  onChange={e => setPhone(e.target.value)} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Địa chỉ:</label>
                <input 
                  type="text" 
                  value={address} 
                  onChange={e => setAddress(e.target.value)} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Lưu thay đổi
              </button>
              {success && <div className="text-green-600 text-center mt-2">Cập nhật thành công!</div>}
            </form>
          </div>

          {/* Lịch sử đơn hàng */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Lịch sử đơn hàng</h2>
            {orders.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-3">📦</div>
                <p className="text-gray-600">Bạn chưa có đơn hàng nào</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">Đơn hàng #{order.id}</h3>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'Đang xử lý' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'Đã giao' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {order.items.length} sản phẩm - {order.total.toLocaleString('vi-VN')}₫
                    </div>
                    <div className="text-xs text-gray-500">
                      {order.shippingInfo.address}, {order.shippingInfo.city}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Đã thêm vào giỏ hàng!');
}

// Component Trang Kiến thức
function KnowledgePage() {
  const navigate = useNavigate();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredArticles = selectedCategory === 'Tất cả' 
    ? knowledgeArticlesData 
    : knowledgeArticlesData.filter(article => article.category === selectedCategory);

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="relative h-64">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-3xl font-bold mb-2">{selectedArticle.title}</h1>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <span>{selectedArticle.category}</span>
                    <span>•</span>
                    <span>{selectedArticle.date}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <button
                onClick={handleBackToList}
                className="mb-6 flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                ← Quay lại danh sách
              </button>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4">Sản phẩm liên quan</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {productsData
                    .filter(product => 
                      selectedArticle.title.toLowerCase().includes('whey') && product.category === 'Whey Protein' ||
                      selectedArticle.title.toLowerCase().includes('creatine') && product.category === 'Creatine' ||
                      selectedArticle.title.toLowerCase().includes('vitamin') && product.category === 'Vitamin D3K2' ||
                      selectedArticle.title.toLowerCase().includes('omega') && product.category === 'Omega-3'
                    )
                    .slice(0, 3)
                    .map(product => (
                      <div key={product.id} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                        <h4 className="font-semibold text-sm mb-2">{product.name}</h4>
                        <p className="text-blue-600 font-bold text-sm">{product.price}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">{pageTitles.kienThuc}</h1>
          <p className="text-lg text-gray-700">Cập nhật kiến thức mới nhất về thực phẩm bổ sung</p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['Tất cả', 'Kiến Thức Supplement', 'Kiến Thức Dinh Dưỡng'].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <div 
              key={article.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift fade-in-up cursor-pointer"
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => handleArticleClick(article)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-semibold">{article.category}</span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{article.date}</span>
                  <span className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                    Đọc thêm →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Chuyên mục kiến thức</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Kiến Thức Supplement", icon: "💊", count: "4 bài viết" },
              { title: "Kiến Thức Dinh Dưỡng", icon: "🥗", count: "2 bài viết" },
              { title: "Bài Tập Tổng Hợp", icon: "🏋️", count: "20 bài viết" },
              { title: "Tư Vấn Sản Phẩm", icon: "🛒", count: "8 bài viết" }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover-lift">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-500">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Component AI Assistant - Chatbot thông minh với ChatGPT
function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false); // State kiểm soát việc mở/đóng chat window
  const [messages, setMessages] = useState([]); // State lưu lịch sử tin nhắn
  const [inputMessage, setInputMessage] = useState(''); // State lưu tin nhắn đang nhập
  const [showQuickQuestions, setShowQuickQuestions] = useState(true); // State hiển thị câu hỏi nhanh
  const [showRecommendations, setShowRecommendations] = useState(false); // State hiển thị gợi ý sản phẩm
  const [selectedGoal, setSelectedGoal] = useState(''); // State lưu mục tiêu được chọn
  const [showApiKeyConfig, setShowApiKeyConfig] = useState(false); // State hiển thị modal cấu hình API

  // Sử dụng ChatGPT service hook để tương tác với AI
  const { sendMessage, resetChat, isLoading, error, isApiKeySet } = useChatGPT();

  // Khởi tạo tin nhắn chào mừng khi component mount
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 1,
          type: 'ai', // Loại tin nhắn từ AI
          content: aiAssistantData.welcomeMessage, // Nội dung chào mừng
          timestamp: new Date() // Thời gian gửi
        }
      ]);
    }
  }, []); // Chỉ chạy 1 lần khi component mount

  // Logic xử lý phản hồi AI với ChatGPT
  const generateAIResponse = async (userMessage) => {
    const lowerMessage = userMessage.toLowerCase(); // Chuyển tin nhắn về chữ thường để dễ xử lý
    
    // Kiểm tra yêu cầu tư vấn sản phẩm
    if (lowerMessage.includes('tư vấn') || lowerMessage.includes('gợi ý') || lowerMessage.includes('khuyến nghị')) {
      setShowRecommendations(true); // Hiển thị gợi ý sản phẩm
      return "Tôi có thể gợi ý sản phẩm phù hợp với mục tiêu của bạn. Bạn muốn tăng cơ, giảm mỡ, hay tăng hiệu suất thể thao?";
    }

    // Sử dụng ChatGPT nếu có API key, nếu không thì dùng fallback response
    if (isApiKeySet) {
      try {
        const response = await sendMessage(userMessage); // Gửi tin nhắn đến ChatGPT
        return response; // Trả về phản hồi từ ChatGPT
      } catch (err) {
        console.error('ChatGPT error:', err); // Log lỗi nếu có
        return getFallbackResponse(userMessage); // Sử dụng fallback nếu lỗi
      }
    } else {
      return getFallbackResponse(userMessage); // Sử dụng fallback nếu không có API key
    }
  };

  // Fallback response logic
  const getFallbackResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for specific topics
    for (const [topic, data] of Object.entries(aiKnowledgeBase)) {
      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        const randomResponse = data.responses[Math.floor(Math.random() * data.responses.length)];
        return randomResponse;
      }
    }

    // Default response
    return "Cảm ơn câu hỏi của bạn! Tôi có thể tư vấn về supplement, dinh dưỡng, hoặc gợi ý sản phẩm phù hợp. Bạn muốn biết thêm về chủ đề nào?";
  };

  // Handle send message
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setShowQuickQuestions(false);

    // Generate AI response
    const aiResponse = await generateAIResponse(inputMessage);
    const aiMessage = {
      id: Date.now() + 1,
      type: 'ai',
      content: aiResponse,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, aiMessage]);
  };

  // Handle quick question
  const handleQuickQuestion = async (question) => {
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: question,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setShowQuickQuestions(false);

    const aiResponse = await generateAIResponse(question);
    const aiMessage = {
      id: Date.now() + 1,
      type: 'ai',
      content: aiResponse,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, aiMessage]);
  };

  // Handle goal selection
  const handleGoalSelection = (goal) => {
    setSelectedGoal(goal);
    setShowRecommendations(false);
    
    const recommendation = productRecommendations[goal];
    if (recommendation) {
      const aiMessage = {
        id: Date.now(),
        type: 'ai',
        content: `Dựa trên mục tiêu ${goal === 'muscle_gain' ? 'tăng cơ' : goal === 'fat_loss' ? 'giảm mỡ' : goal === 'performance' ? 'tăng hiệu suất' : 'khởi đầu'} của bạn, tôi gợi ý:`,
        timestamp: new Date(),
        recommendations: recommendation
      };
      setMessages(prev => [...prev, aiMessage]);
    }
  };

  return (
    <>
      {/* Floating AI Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 ai-floating-button"
        >
          {isOpen ? '✕' : aiAssistantData.avatar}
        </button>
      </div>

      {/* AI Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col ai-chat-window">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{aiAssistantData.avatar}</span>
                <div>
                  <h3 className="font-bold">{aiAssistantData.name}</h3>
                  <p className="text-sm text-blue-100">
                    {isApiKeySet ? '🟢 ChatGPT Online' : '🟡 Offline Mode'}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    resetChat();
                    setMessages([{
                      id: 1,
                      type: 'ai',
                      content: aiAssistantData.welcomeMessage,
                      timestamp: new Date()
                    }]);
                    setShowQuickQuestions(true);
                  }}
                  className="text-blue-100 hover:text-white text-sm"
                  title="Xóa lịch sử chat"
                >
                  🗑️
                </button>
                <button
                  onClick={() => setShowApiKeyConfig(true)}
                  className="text-blue-100 hover:text-white text-sm"
                  title="Cấu hình API key"
                >
                  ⚙️
                </button>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} ai-message`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString('vi-VN', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                  
                  {/* Show recommendations if available */}
                  {message.recommendations && (
                    <div className="mt-3">
                      <h4 className="font-semibold mb-2">{message.recommendations.title}</h4>
                      <div className="space-y-2">
                        {message.recommendations.products.map((product, index) => (
                          <div key={index} className="bg-white p-2 rounded border">
                            <p className="font-medium text-sm">{product.name}</p>
                            <p className="text-xs text-gray-600">{product.reason}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Error message */}
            {error && (
              <div className="flex justify-start">
                <div className="bg-red-100 p-3 rounded-lg">
                  <p className="text-red-600 text-sm">Có lỗi xảy ra khi kết nối với AI. Đang sử dụng chế độ offline.</p>
                </div>
              </div>
            )}

            {/* API Key notice */}
            {!isApiKeySet && messages.length === 1 && (
              <div className="flex justify-start">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    💡 <strong>Mẹo:</strong> Nhấn ⚙️ để cấu hình ChatGPT API key và có trải nghiệm AI tốt hơn!
                  </p>
                </div>
              </div>
            )}

            {/* Quick Questions */}
            {showQuickQuestions && messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Câu hỏi nhanh:</p>
                {aiAssistantData.quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    disabled={isLoading}
                    className="block w-full text-left p-2 bg-blue-50 hover:bg-blue-100 rounded text-sm text-blue-700 transition-colors disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {/* Goal Selection */}
            {showRecommendations && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Chọn mục tiêu của bạn:</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleGoalSelection('beginner')}
                    disabled={isLoading}
                    className="p-2 bg-green-50 hover:bg-green-100 rounded text-sm text-green-700 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    🆕 Người mới
                  </button>
                  <button
                    onClick={() => handleGoalSelection('muscle_gain')}
                    disabled={isLoading}
                    className="p-2 bg-blue-50 hover:bg-blue-100 rounded text-sm text-blue-700 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    💪 Tăng cơ
                  </button>
                  <button
                    onClick={() => handleGoalSelection('fat_loss')}
                    disabled={isLoading}
                    className="p-2 bg-red-50 hover:bg-red-100 rounded text-sm text-red-700 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    🔥 Giảm mỡ
                  </button>
                  <button
                    onClick={() => handleGoalSelection('performance')}
                    disabled={isLoading}
                    className="p-2 bg-purple-50 hover:bg-purple-100 rounded text-sm text-purple-700 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    ⚡ Hiệu suất
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Nhập câu hỏi của bạn..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {isLoading ? '⏳' : 'Gửi'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* API Key Configuration Modal */}
      <ApiKeyConfig
        isOpen={showApiKeyConfig}
        onClose={() => setShowApiKeyConfig(false)}
        onApiKeySet={(apiKey) => {
          // Cập nhật API key trong service
          if (window.chatGPTService) {
            window.chatGPTService.updateApiKey(apiKey);
          }
        }}
      />
    </>
  );
}

// Component Navigation - Thanh điều hướng chính
function Navigation() {
  const location = useLocation() // Hook lấy thông tin route hiện tại
  const { username, logout } = useAuth(); // Sử dụng AuthContext
  const navigate = useNavigate(); // Hook để điều hướng
  
  // Lấy giỏ hàng từ localStorage để tính tổng số sản phẩm
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    logout(); // Sử dụng logout từ AuthContext
    navigate('/login'); // Chuyển hướng về trang đăng nhập
  }

  return (
    <nav className="flex justify-between items-center bg-red-600 shadow-lg p-1">
      <div className="flex justify-between items-center gap-10 text-xl font-bold p-10">
        <Link to="/" className={`hover:text-yellow-600 ${location.pathname === '/' ? 'text-yellow-600' : ''}`}>
          Trang chủ
        </Link>
        <Link to="/products" className={`hover:text-yellow-600 ${location.pathname === '/products' ? 'text-yellow-600' : ''}`}>
          Sản phẩm
        </Link>
      </div>

      <div className="flex flex-col justify-between items-center">
        <span className='text-green-400 bg-black rounded-full p-3 text-3xl'>KV</span>
        <h1 className="text-2xl font-bold text-black">WheyShop</h1>
      </div>

      <div className="flex justify-between items-center gap-10 text-xl font-bold p-10">
        <Link to="/contact" className={`hover:text-yellow-600 ${location.pathname === '/contact' ? 'text-yellow-600' : ''}`}>
          Liên hệ
        </Link>
        <Link to="/kien-thuc" className={`hover:text-yellow-600 ${location.pathname === '/kien-thuc' ? 'text-yellow-600' : ''}`}>
          Kiến thức
        </Link>
        <div className="relative">
          <Link to="/products" className="hover:text-yellow-600">
            🛒 Giỏ hàng
            {username && totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
        {username ? (
          <>
            <Link
              to="/account"
              className="text-white font-bold hover:text-yellow-300 hover:underline transition-colors duration-200"
            >
              {username}
            </Link>
            <button onClick={handleLogout} className="ml-4 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white text-sm font-semibold hover:bg-white/30 hover:border-white/40 transition-all duration-200">Đăng xuất</button>
          </>
        ) : (
          <Link to="/login" className={`hover:text-yellow-600 ${location.pathname === '/login' ? 'text-yellow-600' : ''}`}>
            Đăng nhập
          </Link>
        )}

      </div>
    </nav>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-red-600 text-black py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">{companyData.name}</h3>
        <p className="text-black mb-4">
          {companyData.description}
        </p>
        <p className="text-gray-400 mb-6">{companyData.copyright}</p>
        
        {/* Social Media Links */}
        <div className="flex justify-center items-center gap-4">
          <a 
            href={companyData.Facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 bg-black rounded-full p-1"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a 
            href={companyData.Instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 transition-colors duration-200 bg-black rounded-full p-1"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
            </svg>
          </a>
          <a 
            href={companyData.Youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800 transition-colors duration-200 bg-black rounded-full p-1"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

// Component App chính - Entry point của ứng dụng với routing
function App() {
  // Lấy giỏ hàng từ localStorage để tính tổng số sản phẩm
  const cart = JSON.parse(localStorage.getItem('cart') || '[]'); // Parse JSON từ localStorage
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // Tính tổng số lượng sản phẩm

  return (
    <AuthProvider>
      <Router> {/* Router wrapper cho toàn bộ ứng dụng */}
        <div className="min-h-screen bg-gray-50"> {/* Container chính với background */}
          <Navigation /> {/* Thanh điều hướng */}
          
          <Routes> {/* Định nghĩa các routes */}
            <Route path="/" element={<HomePage />} /> {/* Trang chủ */}
            <Route path="/products" element={<ProductsPage />} /> {/* Trang sản phẩm */}
            <Route path="/contact" element={<ContactPage />} /> {/* Trang liên hệ */}
            <Route path="/login" element={<LoginPage />} /> {/* Trang đăng nhập */}
            <Route path="/account" element={<AccountPage />} /> {/* Trang tài khoản */}
            <Route path="/thanh-toan" element={<ThanhToanPage />} /> {/* Trang thanh toán */}
            <Route path="/kien-thuc" element={<KnowledgePage />} /> {/* Trang kiến thức */}
            <Route path="/cam-ket/:id" element={<CommitmentDetail />} /> {/* Trang chi tiết cam kết */}
          </Routes>
          
          <Footer /> {/* Footer */}
          <AIAssistant /> {/* AI Assistant chatbot */}
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
