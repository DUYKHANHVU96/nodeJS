import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', name: 'Tất cả' },
        { id: 'web', name: 'Website' },
        { id: 'mobile', name: 'Mobile App' },
        { id: 'ai', name: 'AI & Data' },
        { id: 'ecommerce', name: 'E-commerce' }
    ];

    const projects = [
        {
            id: 1,
            category: 'web',
            title: 'Hệ thống quản lý doanh nghiệp',
            description: 'Phát triển hệ thống ERP toàn diện cho công ty sản xuất với hơn 500 nhân viên',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
            client: 'Công ty ABC',
            duration: '6 tháng'
        },
        {
            id: 2,
            category: 'mobile',
            title: 'Ứng dụng giao hàng nhanh',
            description: 'App mobile cho dịch vụ giao hàng với tính năng tracking real-time',
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            technologies: ['React Native', 'Firebase', 'Google Maps API'],
            client: 'Startup XYZ',
            duration: '4 tháng'
        },
        {
            id: 3,
            category: 'ai',
            title: 'Hệ thống phân tích dữ liệu',
            description: 'Giải pháp AI phân tích hành vi khách hàng và dự đoán xu hướng',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            technologies: ['Python', 'TensorFlow', 'AWS', 'Tableau'],
            client: 'Ngân hàng DEF',
            duration: '8 tháng'
        },
        {
            id: 4,
            category: 'ecommerce',
            title: 'Nền tảng thương mại điện tử',
            description: 'Website bán hàng online với hệ thống quản lý đơn hàng và thanh toán',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redis'],
            client: 'Cửa hàng GHI',
            duration: '5 tháng'
        },
        {
            id: 5,
            category: 'web',
            title: 'Website tin tức công nghệ',
            description: 'Portal tin tức với hệ thống CMS và quản lý nội dung',
            image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS S3'],
            client: 'Media Company JKL',
            duration: '3 tháng'
        },
        {
            id: 6,
            category: 'mobile',
            title: 'App quản lý tài chính cá nhân',
            description: 'Ứng dụng theo dõi chi tiêu và lập kế hoạch tài chính',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            technologies: ['Flutter', 'Firebase', 'Charts.js'],
            client: 'Fintech Startup',
            duration: '4 tháng'
        }
    ];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Dự án tiêu biểu
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Khám phá những dự án thành công mà Antech đã thực hiện cho khách hàng 
                        trong nhiều lĩnh vực khác nhau
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
                                activeFilter === filter.id
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div 
                            key={project.id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 overflow-hidden"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition duration-300 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-end">
                                    <div className="p-4 text-white">
                                        <p className="text-sm">Khách hàng: {project.client}</p>
                                        <p className="text-sm">Thời gian: {project.duration}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Công nghệ sử dụng:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span 
                                                key={index}
                                                className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition duration-300">
                                    Xem chi tiết
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
                        <h3 className="text-3xl font-bold mb-4">
                            Bạn có dự án tương tự?
                        </h3>
                        <p className="text-xl mb-8 text-blue-100">
                            Hãy liên hệ với chúng tôi để được tư vấn và nhận báo giá chi tiết cho dự án của bạn
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                to="/contact"
                                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 inline-block"
                            >
                                Tư vấn miễn phí
                            </Link>
                            <Link 
                                to="/portfolio"
                                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 inline-block"
                            >
                                Xem thêm dự án
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio 