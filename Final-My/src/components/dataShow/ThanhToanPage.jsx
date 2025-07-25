import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './showWhey.jsx';

function ThanhToanPage() {
  const navigate = useNavigate();
  const { username } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    phone: '',
    address: '',
    city: ''
  });
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  // Load cart từ localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Tính tổng tiền
  const totalPrice = cart.reduce((total, item) => {
    const price = typeof item.price === 'string' 
      ? parseInt(item.price.replace(/[^\d]/g, '')) 
      : item.price;
    return total + price * item.quantity;
  }, 0);

  // Áp dụng mã giảm giá
  const applyDiscount = () => {
    if (discountCode.toLowerCase() === 'whey10') {
      setDiscountApplied(true);
      alert('Áp dụng mã giảm giá thành công!');
    } else {
      alert('Mã giảm giá không hợp lệ!');
    }
  };

  // Tính tiền sau giảm giá
  const discountAmount = discountApplied ? totalPrice * 0.1 : 0;
  const finalTotal = totalPrice - discountAmount;

  // Xử lý thanh toán
  const handlePayment = () => {
    if (!shippingInfo.name || !shippingInfo.phone || !shippingInfo.address) {
      alert('Vui lòng điền đầy đủ thông tin giao hàng!');
      return;
    }

    // Lưu đơn hàng vào localStorage
    const order = {
      id: Date.now(),
      username: username, // Thêm thông tin người dùng
      items: cart,
      total: finalTotal,
      paymentMethod,
      shippingInfo,
      discountApplied,
      discountCode,
      date: new Date().toLocaleString('vi-VN'),
      status: 'Đang xử lý'
    };

    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Xóa giỏ hàng
    localStorage.removeItem('cart');
    setCart([]);

    alert('Đặt hàng thành công! Cảm ơn bạn đã mua hàng.');
    navigate('/');
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Kiểm tra đăng nhập
  if (!username) {
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Vui lòng đăng nhập</h1>
            <p className="text-gray-600 mb-6">Bạn cần đăng nhập để tiến hành thanh toán</p>
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Đăng nhập ngay
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Giỏ hàng trống</h1>
            <p className="text-gray-600 mb-6">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
            <button
              onClick={() => navigate('/products')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Mua sắm ngay
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Thanh toán</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Thông tin giao hàng */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Thông tin giao hàng</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  value={shippingInfo.name}
                  onChange={(e) => setShippingInfo({...shippingInfo, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập họ và tên"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  value={shippingInfo.phone}
                  onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Địa chỉ *
                </label>
                <textarea
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="Nhập địa chỉ giao hàng"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Thành phố
                </label>
                <input
                  type="text"
                  value={shippingInfo.city}
                  onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập thành phố"
                />
              </div>
            </div>

            {/* Phương thức thanh toán */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Phương thức thanh toán</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <span>Thanh toán khi nhận hàng (COD)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="bank"
                    checked={paymentMethod === 'bank'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <span>Chuyển khoản ngân hàng</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="momo"
                    checked={paymentMethod === 'momo'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <span>Ví MoMo</span>
                </label>
              </div>
            </div>

            {/* Mã giảm giá */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Mã giảm giá</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập mã giảm giá"
                />
                <button
                  onClick={applyDiscount}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Áp dụng
                </button>
              </div>
              {discountApplied && (
                <p className="text-green-600 text-sm mt-2">✓ Đã áp dụng mã giảm giá: WHEY10</p>
              )}
            </div>
          </div>

          {/* Tóm tắt đơn hàng */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Tóm tắt đơn hàng</h2>
            
            {/* Danh sách sản phẩm */}
            <div className="space-y-4 mb-6">
              {cart.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b pb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-gray-600">Số lượng: {item.quantity}</p>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    Xóa
                  </button>
                </div>
              ))}
            </div>

            {/* Tổng tiền */}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Tạm tính:</span>
                <span>{totalPrice.toLocaleString('vi-VN')} VNĐ</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-green-600">
                  <span>Giảm giá (10%):</span>
                  <span>-{discountAmount.toLocaleString('vi-VN')} VNĐ</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-lg">
                <span>Tổng cộng:</span>
                <span>{finalTotal.toLocaleString('vi-VN')} VNĐ</span>
              </div>
            </div>

            {/* Nút thanh toán */}
            <button
              onClick={handlePayment}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 mt-6"
            >
              Đặt hàng ngay
            </button>

            <button
              onClick={() => navigate('/products')}
              className="w-full bg-gray-500 text-white py-2 rounded-lg font-semibold hover:bg-gray-600 mt-3"
            >
              Tiếp tục mua sắm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThanhToanPage; 