const ServicesPage = () => {
  const services = [
    {
      icon: "💻",
      title: "Phát triển Website",
      description: "Tạo ra những website hiện đại, responsive và tối ưu SEO",
      features: [
        "Website responsive trên mọi thiết bị",
        "Tối ưu hóa tốc độ tải trang",
        "Tích hợp SEO và Analytics",
        "Bảo mật thông tin cao cấp",
        "Hỗ trợ kỹ thuật 24/7"
      ],
      technologies: ["React", "Vue.js", "Node.js", "PHP", "WordPress"]
    },
    {
      icon: "📱",
      title: "Ứng dụng Mobile",
      description: "Phát triển ứng dụng di động chất lượng cao cho iOS và Android",
      features: [
        "App native cho iOS và Android",
        "Cross-platform với React Native",
        "Tích hợp thanh toán và push notification",
        "Bảo mật dữ liệu người dùng",
        "Cập nhật và bảo trì liên tục"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
    },
    {
      icon: "☁️",
      title: "Giải pháp Cloud",
      description: "Tối ưu hóa hệ thống với các giải pháp cloud computing",
      features: [
        "Migration lên cloud an toàn",
        "Tối ưu hóa chi phí vận hành",
        "Backup và disaster recovery",
        "Monitoring và alerting",
        "Auto-scaling và load balancing"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Giải pháp thông minh với công nghệ AI và ML",
      features: [
        "Chatbot và virtual assistant",
        "Phân tích dữ liệu thông minh",
        "Computer vision và image recognition",
        "Natural language processing",
        "Predictive analytics"
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Python"]
    },
    {
      icon: "🛡️",
      title: "Bảo mật & Compliance",
      description: "Đảm bảo an toàn thông tin và tuân thủ quy định",
      features: [
        "Penetration testing",
        "Security audit và assessment",
        "GDPR và compliance",
        "Encryption và key management",
        "Incident response planning"
      ],
      technologies: ["OWASP", "ISO 27001", "SSL/TLS", "VPN", "Firewall"]
    },
    {
      icon: "📊",
      title: "Tư vấn & Training",
      description: "Đào tạo và tư vấn chuyển đổi số cho doanh nghiệp",
      features: [
        "Tư vấn chiến lược công nghệ",
        "Đào tạo nhân viên IT",
        "Workshop và seminar",
        "Code review và best practices",
        "Mentoring cho startup"
      ],
      technologies: ["Agile", "DevOps", "CI/CD", "Microservices", "API Design"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Phân tích yêu cầu",
      description: "Tìm hiểu chi tiết nhu cầu và mục tiêu của khách hàng"
    },
    {
      step: "02",
      title: "Thiết kế giải pháp",
      description: "Đề xuất kiến trúc và công nghệ phù hợp"
    },
    {
      step: "03",
      title: "Phát triển",
      description: "Code và test theo quy trình Agile"
    },
    {
      step: "04",
      title: "Triển khai",
      description: "Deploy và monitor hệ thống"
    },
    {
      step: "05",
      title: "Bảo trì",
      description: "Hỗ trợ và cập nhật liên tục"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Dịch vụ của chúng tôi
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Cung cấp đầy đủ các giải pháp công nghệ từ phát triển web, mobile app 
            đến các giải pháp AI và cloud computing chuyên nghiệp.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Tính năng chính:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="text-blue-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Công nghệ sử dụng:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quy trình làm việc
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi tuân thủ quy trình làm việc chuyên nghiệp để đảm bảo 
              chất lượng và tiến độ dự án.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Bắt đầu dự án của bạn ngay hôm nay
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá 
            chi tiết cho dự án của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Liên hệ tư vấn
            </a>
            <a
              href="tel:+84123456789"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Gọi ngay: +84 123 456 789
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 