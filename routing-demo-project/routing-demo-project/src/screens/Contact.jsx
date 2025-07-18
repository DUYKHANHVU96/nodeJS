import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Địa chỉ",
      content: "123 Đường ABC, Quận 1, TP.HCM",
      link: "https://maps.google.com"
    },
    {
      icon: "📞",
      title: "Điện thoại",
      content: "+84 123 456 789",
      link: "tel:+84123456789"
    },
    {
      icon: "✉️",
      title: "Email",
      content: "info@antech.com",
      link: "mailto:info@antech.com"
    },
    {
      icon: "🕒",
      title: "Giờ làm việc",
      content: "8:00 - 18:00 (Thứ 2 - Thứ 6)",
      link: null
    }
  ];

  const services = [
    "Phát triển Website",
    "Ứng dụng Mobile",
    "Giải pháp Cloud",
    "AI & Machine Learning",
    "Bảo mật & Compliance",
    "Tư vấn & Training",
    "Khác"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Hãy liên hệ với Antech để được tư vấn miễn phí và nhận báo giá 
            chi tiết cho dự án của bạn.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Gửi tin nhắn cho chúng tôi
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+84 123 456 789"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Công ty
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tên công ty"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dịch vụ quan tâm
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Chọn dịch vụ</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nội dung tin nhắn *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Mô tả chi tiết về dự án hoặc yêu cầu của bạn..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Thông tin liên hệ
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-2xl mr-4">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Tại sao chọn Antech?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    Đội ngũ chuyên gia giàu kinh nghiệm
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    Cam kết chất lượng và tiến độ
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    Hỗ trợ kỹ thuật 24/7
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    Bảo hành và bảo trì dài hạn
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    Giá cả cạnh tranh và minh bạch
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  Tư vấn miễn phí
                </h3>
                <p className="text-blue-800 mb-4">
                  Chúng tôi cung cấp dịch vụ tư vấn miễn phí để giúp bạn 
                  lựa chọn giải pháp phù hợp nhất.
                </p>
                <a
                  href="tel:+84123456789"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  📞 Gọi ngay: +84 123 456 789
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Văn phòng của chúng tôi
            </h2>
            <p className="text-xl text-gray-600">
              Hãy ghé thăm văn phòng Antech để trao đổi trực tiếp về dự án của bạn.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="aspect-w-16 aspect-h-9 rounded-lg bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-gray-600">Bản đồ sẽ được hiển thị tại đây</p>
                <p className="text-sm text-gray-500 mt-2">
                  123 Đường ABC, Quận 1, TP.HCM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 