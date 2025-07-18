import React from 'react'
import Notification from '../assets/Notification.png'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white">

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
    )
}

export default Footer 