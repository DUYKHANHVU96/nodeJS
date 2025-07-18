import { Link } from 'react-router-dom';

const HomePage = () => {
  const services = [
    {
      icon: "💻",
      title: "Phát triển Web",
      description: "Website responsive, hiện đại với công nghệ mới nhất"
    },
    {
      icon: "📱",
      title: "Ứng dụng Mobile",
      description: "App iOS/Android chất lượng cao, trải nghiệm người dùng tốt"
    },
    {
      icon: "☁️",
      title: "Giải pháp Cloud",
      description: "Tối ưu hóa hệ thống, bảo mật và hiệu suất cao"
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Giải pháp thông minh, tự động hóa quy trình"
    }
  ];

  const stats = [
    { number: "500+", label: "Dự án hoàn thành" },
    { number: "50+", label: "Khách hàng tin tưởng" },
    { number: "5+", label: "Năm kinh nghiệm" },
    { number: "24/7", label: "Hỗ trợ khách hàng" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Giải pháp công nghệ
                <span className="block text-blue-200">cho tương lai</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Antech - Đối tác tin cậy trong lĩnh vực phát triển phần mềm & giải pháp trực tuyến. 
                Chúng tôi cam kết mang đến những sản phẩm chất lượng cao và dịch vụ chuyên nghiệp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  Khám phá dịch vụ
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Liên hệ ngay
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🚀</div>
                    <h3 className="font-semibold">Nhanh chóng</h3>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🛡️</div>
                    <h3 className="font-semibold">Bảo mật</h3>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">💡</div>
                    <h3 className="font-semibold">Sáng tạo</h3>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <h3 className="font-semibold">Chính xác</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dịch vụ của chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cung cấp đầy đủ các giải pháp công nghệ từ phát triển web, mobile app 
              đến các giải pháp AI và cloud computing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Xem tất cả dịch vụ
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sẵn sàng bắt đầu dự án của bạn?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí 
            và nhận báo giá chi tiết cho dự án của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Liên hệ ngay
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 