import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <section id="home" className="pt-16 bg-[url('/src/assets/Themes.png')] bg-cover bg-center text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-blue-300">Antech</span> - 
                                <br />
                                Giải pháp công nghệ 
                                <br />
                                <span className="text-yellow-400">tương lai</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Chúng tôi chuyên phát triển phần mềm và cung cấp giải pháp công nghệ trực tuyến 
                                giúp doanh nghiệp của bạn chuyển đổi số thành công trong kỷ nguyên 4.0.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link 
                                to="/contact"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 text-center"
                            >
                                Tư vấn miễn phí
                            </Link>
                            <Link 
                                to="/portfolio"
                                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 text-center"
                            >
                                Xem dự án
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-400">100+</div>
                                <div className="text-sm text-gray-300">Dự án thành công</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-400">50+</div>
                                <div className="text-sm text-gray-300">Khách hàng tin tưởng</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-400">5+</div>
                                <div className="text-sm text-gray-300">Năm kinh nghiệm</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Animated Illustration */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">Phát triển Web</h3>
                                        <p className="text-blue-200 text-sm">Responsive & Modern</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">Ứng dụng Mobile</h3>
                                        <p className="text-blue-200 text-sm">iOS & Android</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">Phân tích dữ liệu</h3>
                                        <p className="text-blue-200 text-sm">AI & Machine Learning</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero 