import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
    const services = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Phát triển Website",
            description: "Thiết kế và phát triển website chuyên nghiệp, responsive với công nghệ hiện đại nhất.",
            features: ["React/Next.js", "Node.js", "Responsive Design", "SEO Optimization"]
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: "Ứng dụng Mobile",
            description: "Phát triển ứng dụng mobile native và cross-platform cho iOS và Android.",
            features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"]
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: "Phân tích dữ liệu & AI",
            description: "Giải pháp phân tích dữ liệu và trí tuệ nhân tạo cho doanh nghiệp.",
            features: ["Machine Learning", "Data Analytics", "Business Intelligence", "Predictive Analytics"]
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Tối ưu hóa hiệu suất",
            description: "Tối ưu hóa hiệu suất hệ thống và cải thiện trải nghiệm người dùng.",
            features: ["Performance Optimization", "Database Optimization", "Cloud Solutions", "Scalability"]
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: "Bảo mật & An toàn",
            description: "Đảm bảo an toàn thông tin và bảo mật dữ liệu cho hệ thống của bạn.",
            features: ["Security Audit", "Data Encryption", "Compliance", "Penetration Testing"]
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
            ),
            title: "Tư vấn công nghệ",
            description: "Tư vấn chiến lược công nghệ và chuyển đổi số cho doanh nghiệp.",
            features: ["Digital Transformation", "Technology Strategy", "Architecture Design", "Project Management"]
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Dịch vụ của chúng tôi
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Antech cung cấp đầy đủ các giải pháp công nghệ từ phát triển phần mềm đến tư vấn chiến lược, 
                        giúp doanh nghiệp của bạn thành công trong kỷ nguyên số.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 p-8 border border-gray-100"
                        >
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                                <div className="text-blue-600">
                                    {service.icon}
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {service.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            
                            <div className="space-y-2">
                                {service.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
                        <h3 className="text-3xl font-bold mb-4">
                            Sẵn sàng bắt đầu dự án của bạn?
                        </h3>
                        <p className="text-xl mb-8 text-blue-100">
                            Hãy liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết
                        </p>
                        <Link 
                            to="/contact"
                            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 inline-block"
                        >
                            Liên hệ ngay
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services 