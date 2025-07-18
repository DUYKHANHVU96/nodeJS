import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import Notification from '../assets/Notification.png'

function ContactAndFooter() {
  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Liên hệ với chúng tôi
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Sẵn sàng bắt đầu dự án của bạn? Hãy để chúng tôi giúp bạn biến ý tưởng thành hiện thực
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-6">Gửi yêu cầu tư vấn</h3>
              
              <Form 
                className="space-y-6" 
                name="contact" 
                layout="vertical" 
                autoComplete="off"
              >
                <style jsx>{`
                  .ant-form-item-label > label {
                    color: white !important;
                    font-weight: 500;
                  }
                  .ant-input {
                    background-color: rgba(255, 255, 255, 0.1) !important;
                    border: 1px solid rgba(255, 255, 255, 0.3) !important;
                    color: white !important;
                    border-radius: 8px !important;
                  }
                  .ant-input::placeholder {
                    color: rgba(255, 255, 255, 0.7) !important;
                  }
                  .ant-input:focus {
                    border-color: #3B82F6 !important;
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2) !important;
                  }
                  .ant-input:hover {
                    border-color: rgba(255, 255, 255, 0.5) !important;
                  }
                `}</style>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item
                    label="Họ và tên"
                    name="fullName"
                    rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
                  >
                    <Input placeholder="Nhập họ và tên của bạn" />
                  </Form.Item>
                  
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: 'Vui lòng nhập email!' },
                      { type: 'email', message: 'Email không hợp lệ!' }
                    ]}
                  >
                    <Input placeholder="Nhập địa chỉ email" />
                  </Form.Item>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                  >
                    <Input placeholder="Nhập số điện thoại" />
                  </Form.Item>
                  
                  <Form.Item
                    label="Công ty"
                    name="company"
                  >
                    <Input placeholder="Nhập tên công ty (nếu có)" />
                  </Form.Item>
                </div>

                <Form.Item
                  label="Loại dự án"
                  name="projectType"
                  rules={[{ required: true, message: 'Vui lòng chọn loại dự án!' }]}
                >
                  <Input placeholder="Website, Mobile App, AI/ML, E-commerce..." />
                </Form.Item>

                <Form.Item
                  label="Mô tả dự án"
                  name="description"
                  rules={[{ required: true, message: 'Vui lòng mô tả dự án!' }]}
                >
                  <Input.TextArea 
                    rows={4} 
                    placeholder="Mô tả chi tiết về dự án của bạn, yêu cầu và mục tiêu..."
                  />
                </Form.Item>

                <div className="space-y-4">
                  <Checkbox 
                    className="text-white text-sm" 
                    onChange={onChange}
                  >
                    Tôi đồng ý với <a href="#" className="text-blue-300 hover:text-blue-200">chính sách bảo mật</a> của Antech
                  </Checkbox>

                  <Checkbox 
                    className="text-white text-sm" 
                    onChange={onChange}
                  >
                    Tôi muốn nhận thông tin về các dự án và cập nhật công nghệ mới
                  </Checkbox>
                </div>

                <Button 
                  type="primary" 
                  htmlType="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 border-none h-12 text-lg font-semibold"
                >
                  Gửi yêu cầu tư vấn
                </Button>
              </Form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Thông tin liên hệ</h3>
                <p className="text-blue-100 leading-relaxed mb-8">
                  Chúng tôi giúp bạn hiểu hành trình công nghệ của mình, điều hướng thế giới dữ liệu phức tạp, 
                  số hóa quy trình kinh doanh hoặc cung cấp trải nghiệm người dùng liền mạch.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Địa chỉ</h4>
                    <p className="text-blue-100">
                      Số 417 Nguyễn Khang, Yên Hòa,<br />
                      Cầu Giấy, Hà Nội, Việt Nam
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Điện thoại</h4>
                    <p className="text-blue-100">
                      Tel: 0968 400 496<br />
                      Hotline: 0968 400 496
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Email</h4>
                    <p className="text-blue-100">
                      contact@antech.com.vn<br />
                      info@antech.com.vn
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Giờ làm việc</h4>
                    <p className="text-blue-100">
                      Thứ 2 - Thứ 6: 8:00 - 18:00<br />
                      Thứ 7: 8:00 - 12:00<br />
                      Chủ nhật: Nghỉ
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h4>
                <div className="flex space-x-4">
                  {['Facebook', 'LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map((platform) => (
                    <a 
                      key={platform}
                      href="#" 
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition duration-300"
                    >
                      <span className="text-white text-sm font-medium">{platform[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="flex items-center mb-8 lg:mb-0">
                <img src={Notification} alt="notification" className="w-12 h-12 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Luôn cập nhật thông tin</h3>
                  <p className="text-blue-100">Đăng ký nhận bản tin công nghệ mới nhất từ Antech</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <input 
                  type="email" 
                  placeholder="Nhập email của bạn" 
                  className="px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <h3 className="text-2xl font-bold">Antech</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Công ty công nghệ hàng đầu chuyên cung cấp giải pháp phát triển phần mềm 
                và dịch vụ công nghệ trực tuyến cho doanh nghiệp.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map((platform) => (
                  <a 
                    key={platform}
                    href="#" 
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition duration-300"
                  >
                    <span className="text-white text-sm font-medium">{platform[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Dịch vụ</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Tư vấn công nghệ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Dữ liệu, phân tích & AI</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Giải pháp quy trình & nghiệp vụ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Dịch vụ ứng dụng</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Đảm bảo chất lượng & an ninh</a></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Giải pháp</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Phát triển Website</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Ứng dụng Mobile</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">E-commerce</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Hệ thống ERP</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Cloud Solutions</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Liên hệ</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Công ty TNHH giải pháp phần mềm Antech</p>
                  <p className="text-gray-400 text-sm mb-1">Văn phòng Hà Nội</p>
                  <p className="text-gray-400 text-sm">Số 417 Nguyễn Khang, Yên Hòa,</p>
                  <p className="text-gray-400 text-sm">Cầu Giấy, Hà Nội.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">Tel: 0968 400 496</p>
                  <p className="text-gray-400 text-sm">Hotline: 0968 400 496</p>
                  <p className="text-gray-400 text-sm">Email: contact@antech.com.vn</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Antech. Tất cả quyền được bảo lưu.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Chính sách bảo mật</a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Điều khoản sử dụng</a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default ContactAndFooter 