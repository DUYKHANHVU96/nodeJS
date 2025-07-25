import React, { useState, useEffect } from 'react';
import { productsData } from '../dataShow/dataWhey.jsx';

function App() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(0);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    phone: '',
    address: ''
  });

  // Hàm load cart từ localStorage
  const loadCart = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    } else {
      setCart([]);
    }
  };

  // Load giỏ hàng khi component mount
  useEffect(() => {
    loadCart();
    // Lắng nghe sự kiện storage để cập nhật cart khi localStorage thay đổi
    const handleStorage = (e) => {
      if (e.key === 'cart') {
        loadCart();
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Lưu giỏ hàng vào Local Storage mỗi khi cart thay đổi
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Tính tổng tiền
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Phí vận chuyển
  const shippingFee = 30000;

  // Tổng tiền sau giảm giá
  const total = subtotal + shippingFee - discountApplied;

  // Áp dụng mã giảm giá
  const applyDiscount = () => {
    if (discountCode.toLowerCase() === 'wheyshop10') {
      setDiscountApplied(subtotal * 0.1); // Giảm 10%
      alert('Áp dụng mã giảm giá thành công!');
    } else if (discountCode.toLowerCase() === 'freeship') {
      setDiscountApplied(shippingFee); // Miễn phí vận chuyển
      alert('Áp dụng mã giảm giá thành công!');
    } else {
      alert('Mã giảm giá không hợp lệ!');
    }
  };

  // Lưu đơn hàng vào lịch sử
  const saveOrder = (orderData) => {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const newOrder = {
      ...orderData,
      id: Date.now(),
      orderDate: new Date().toLocaleString('vi-VN'),
      status: 'Đang xử lý'
    };
    orders.unshift(newOrder); // Thêm vào đầu mảng
    localStorage.setItem('orders', JSON.stringify(orders));
  };

  // Xử lý thanh toán
  const handleCheckout = () => {
    if (!shippingInfo.name || !shippingInfo.phone || !shippingInfo.address) {
      alert('Vui lòng điền đầy đủ thông tin giao hàng!');
      return;
    }
    
    // Tạo đơn hàng
    const orderData = {
      items: cart,
      subtotal: subtotal,
      shippingFee: shippingFee,
      discountApplied: discountApplied,
      total: total,
      paymentMethod: paymentMethod,
      shippingInfo: shippingInfo
    };

    // Lưu đơn hàng
    saveOrder(orderData);
    
    alert(`Đặt hàng thành công!\nMã đơn hàng: #${Date.now()}\nPhương thức thanh toán: ${paymentMethod === 'cod' ? 'Thanh toán khi nhận hàng' : 'Chuyển khoản ngân hàng'}`);
    
    // Xóa giỏ hàng sau khi đặt hàng thành công
    localStorage.removeItem('cart');
    setCart([]);
    setShowCheckout(false);
    setShowOrders(true); // Chuyển sang xem đơn hàng
  };

  // Lấy danh sách đơn hàng
  const getOrders = () => {
    return JSON.parse(localStorage.getItem('orders') || '[]');
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Giỏ hàng</h1>
      
      {/* Navigation tabs */}
      <div className="flex mb-6 border-b">
        <button
          onClick={() => { setShowCheckout(false); setShowOrders(false); }}
          className={`px-4 py-2 font-semibold ${!showCheckout && !showOrders ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
        >
          Giỏ hàng
        </button>
        <button
          onClick={() => setShowOrders(true)}
          className={`px-4 py-2 font-semibold ${showOrders ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
        >
          Đơn hàng đã đặt ({getOrders().length})
        </button>
      </div>

      {showOrders ? (
        /* Hiển thị đơn hàng đã đặt */
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Đơn hàng đã đặt</h2>
          {getOrders().length === 0 ? (
            <p className="text-gray-500 text-center py-8">Chưa có đơn hàng nào</p>
          ) : (
            <div className="space-y-6">
              {getOrders().map((order) => (
                <div key={order.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">Đơn hàng #{order.id}</h3>
                      <p className="text-gray-600">Ngày đặt: {order.orderDate}</p>
                      <p className="text-blue-600 font-semibold">Trạng thái: {order.status}</p>
                    </div>
                    <span className="text-lg font-bold text-green-600">
                      {order.total.toLocaleString('vi-VN')}₫
                    </span>
                  </div>

                  {/* Thông tin giao hàng */}
                  <div className="bg-gray-50 p-3 rounded mb-4">
                    <h4 className="font-semibold mb-2">Thông tin giao hàng:</h4>
                    <p><strong>Tên:</strong> {order.shippingInfo.name}</p>
                    <p><strong>SĐT:</strong> {order.shippingInfo.phone}</p>
                    <p><strong>Địa chỉ:</strong> {order.shippingInfo.address}</p>
                    <p><strong>Thanh toán:</strong> {order.paymentMethod === 'cod' ? 'Thanh toán khi nhận hàng' : 'Chuyển khoản ngân hàng'}</p>
                  </div>

                  {/* Danh sách sản phẩm */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Sản phẩm:</h4>
                    <div className="space-y-2">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-gray-600">Số lượng: {item.quantity}</p>
                          </div>
                          <p className="text-blue-600">{item.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tổng tiền */}
                  <div className="border-t pt-3 space-y-1">
                    <div className="flex justify-between">
                      <span>Tạm tính:</span>
                      <span>{order.subtotal.toLocaleString('vi-VN')}₫</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Phí vận chuyển:</span>
                      <span>{order.shippingFee.toLocaleString('vi-VN')}₫</span>
                    </div>
                    {order.discountApplied > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Giảm giá:</span>
                        <span>-{order.discountApplied.toLocaleString('vi-VN')}₫</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold text-lg">
                      <span>Tổng thanh toán:</span>
                      <span>{order.total.toLocaleString('vi-VN')}₫</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : !showCheckout ? (
        <>
          {/* Danh sách sản phẩm */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sản Phẩm</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {productsData.map((product) => (
                <div
                  key={product.id}
                  className="border p-4 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Thêm vào giỏ
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Giỏ hàng */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Giỏ Hàng</h2>
            {cart.length === 0 ? (
              <p className="text-gray-500">Giỏ hàng trống</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center border-b py-3"
                    >
                      <div className="flex-1">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-gray-600">Số lượng: {item.quantity}</p>
                        <p className="text-blue-600 font-semibold">{item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-4"
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
                    <span>{subtotal.toLocaleString('vi-VN')}₫</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phí vận chuyển:</span>
                    <span>{shippingFee.toLocaleString('vi-VN')}₫</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Tổng cộng:</span>
                    <span>{(subtotal + shippingFee).toLocaleString('vi-VN')}₫</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 mt-6"
                >
                  Tiến hành thanh toán
                </button>
              </>
            )}
          </div>
        </>
      ) : (
        /* Form thanh toán */
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Thông tin thanh toán</h2>
          
          {/* Thông tin giao hàng */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Thông tin giao hàng</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Họ và tên *</label>
                <input
                  type="text"
                  value={shippingInfo.name}
                  onChange={(e) => setShippingInfo({...shippingInfo, name: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Số điện thoại *</label>
                <input
                  type="tel"
                  value={shippingInfo.phone}
                  onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">Địa chỉ giao hàng *</label>
              <textarea
                value={shippingInfo.address}
                onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                required
              />
            </div>
          </div>

          {/* Mã giảm giá */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Mã giảm giá</h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                placeholder="Nhập mã giảm giá"
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={applyDiscount}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Áp dụng
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Mã giảm giá: WHEYSHOP10 (giảm 10%), FREESHIP (miễn phí vận chuyển)
            </p>
          </div>

          {/* Phương thức thanh toán */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Phương thức thanh toán</h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
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
                  name="payment"
                  value="bank"
                  checked={paymentMethod === 'bank'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3"
                />
                <span>Chuyển khoản ngân hàng</span>
              </label>
            </div>
          </div>

          {/* Tổng tiền cuối cùng */}
          <div className="border-t pt-4 mb-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Tạm tính:</span>
                <span>{subtotal.toLocaleString('vi-VN')}₫</span>
              </div>
              <div className="flex justify-between">
                <span>Phí vận chuyển:</span>
                <span>{shippingFee.toLocaleString('vi-VN')}₫</span>
              </div>
              {discountApplied > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Giảm giá:</span>
                  <span>-{discountApplied.toLocaleString('vi-VN')}₫</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-xl">
                <span>Tổng thanh toán:</span>
                <span>{total.toLocaleString('vi-VN')}₫</span>
              </div>
            </div>
          </div>

          {/* Nút thanh toán */}
          <div className="flex gap-4">
            <button
              onClick={() => setShowCheckout(false)}
              className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600"
            >
              Quay lại giỏ hàng
            </button>
            <button
              onClick={handleCheckout}
              className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
            >
              Đặt hàng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;