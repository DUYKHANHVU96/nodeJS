const AboutPage = () => {
  const values = [
    {
      icon: "🎯",
      title: "Chất lượng",
      description: "Cam kết mang đến sản phẩm chất lượng cao nhất"
    },
    {
      icon: "🤝",
      title: "Tin cậy",
      description: "Đối tác tin cậy với hơn 5 năm kinh nghiệm"
    },
    {
      icon: "💡",
      title: "Sáng tạo",
      description: "Luôn đổi mới và áp dụng công nghệ mới nhất"
    },
    {
      icon: "⚡",
      title: "Hiệu quả",
      description: "Tối ưu hóa quy trình để mang lại kết quả tốt nhất"
    }
  ];

  const team = [
    {
      name: "Nguyễn Văn A",
      position: "CEO & Founder",
      avatar: "👨‍💼",
      description: "10+ năm kinh nghiệm trong lĩnh vực công nghệ"
    },
    {
      name: "Trần Thị B",
      position: "CTO",
      avatar: "👩‍💻",
      description: "Chuyên gia về kiến trúc hệ thống và cloud computing"
    },
    {
      name: "Lê Văn C",
      position: "Lead Developer",
      avatar: "👨‍💻",
      description: "Full-stack developer với 8+ năm kinh nghiệm"
    },
    {
      name: "Phạm Thị D",
      position: "UI/UX Designer",
      avatar: "👩‍🎨",
      description: "Chuyên gia thiết kế trải nghiệm người dùng"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Thành lập công ty",
      description: "Antech được thành lập với mục tiêu mang công nghệ đến mọi doanh nghiệp"
    },
    {
      year: "2020",
      title: "100+ dự án",
      description: "Hoàn thành hơn 100 dự án cho các khách hàng trong và ngoài nước"
    },
    {
      year: "2021",
      title: "Mở rộng dịch vụ",
      description: "Phát triển thêm các dịch vụ AI và Machine Learning"
    },
    {
      year: "2022",
      title: "500+ khách hàng",
      description: "Đạt mốc 500+ khách hàng tin tưởng sử dụng dịch vụ"
    },
    {
      year: "2023",
      title: "Giải thưởng",
      description: "Nhận giải thưởng "Công ty công nghệ xuất sắc" của năm"
    },
    {
      year: "2024",
      title: "Tương lai",
      description: "Tiếp tục phát triển và mở rộng thị trường quốc tế"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Về Antech
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Chúng tôi là đội ngũ chuyên gia công nghệ với hơn 5 năm kinh nghiệm 
            trong lĩnh vực phát triển phần mềm và giải pháp trực tuyến.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Câu chuyện của chúng tôi
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Antech được thành lập vào năm 2019 với sứ mệnh mang công nghệ tiên tiến 
                đến mọi doanh nghiệp, giúp họ chuyển đổi số thành công và phát triển bền vững.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Với đội ngũ chuyên gia giàu kinh nghiệm và đam mê công nghệ, chúng tôi 
                đã hoàn thành hơn 500 dự án cho các khách hàng trong và ngoài nước, 
                từ startup đến các tập đoàn lớn.
              </p>
              <p className="text-lg text-gray-600">
                Chúng tôi tin rằng công nghệ có thể thay đổi thế giới và cam kết 
                mang đến những giải pháp tốt nhất cho khách hàng.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Dự án hoàn thành</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Khách hàng tin tưởng</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Năm kinh nghiệm</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Hỗ trợ khách hàng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Giá trị cốt lõi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những giá trị định hướng mọi hoạt động và quyết định của chúng tôi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Đội ngũ của chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những chuyên gia tài năng và đam mê công nghệ, luôn sẵn sàng 
              mang đến những giải pháp tốt nhất cho khách hàng.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hành trình phát triển
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những cột mốc quan trọng trong quá trình phát triển của Antech.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Hãy làm việc cùng chúng tôi
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Bạn có muốn trở thành một phần của đội ngũ Antech không? 
            Hãy liên hệ với chúng tôi để tìm hiểu thêm về cơ hội nghề nghiệp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Liên hệ ngay
            </a>
            <a
              href="mailto:careers@antech.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Gửi CV: careers@antech.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 