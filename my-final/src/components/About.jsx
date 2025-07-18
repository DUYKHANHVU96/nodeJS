import React from 'react'

function About() {
    const stats = [
        { number: "100+", label: "Dự án thành công" },
        { number: "50+", label: "Khách hàng tin tưởng" },
        { number: "5+", label: "Năm kinh nghiệm" },
        { number: "24/7", label: "Hỗ trợ khách hàng" }
    ];

    const values = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Chất lượng",
            description: "Cam kết cung cấp sản phẩm chất lượng cao với tiêu chuẩn quốc tế"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Đổi mới",
            description: "Luôn cập nhật công nghệ mới nhất để mang lại giải pháp tối ưu"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Hợp tác",
            description: "Xây dựng mối quan hệ đối tác lâu dài với khách hàng"
        }
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Về <span className="text-blue-600">Antech</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Antech là công ty công nghệ hàng đầu chuyên cung cấp giải pháp phát triển phần mềm 
                                và dịch vụ công nghệ trực tuyến. Với đội ngũ kỹ sư giàu kinh nghiệm và tâm huyết, 
                                chúng tôi cam kết mang lại những sản phẩm chất lượng cao, đáp ứng mọi nhu cầu của khách hàng.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Từ những dự án nhỏ đến các hệ thống lớn, chúng tôi luôn đặt chất lượng và sự hài lòng 
                                của khách hàng lên hàng đầu. Với phương châm "Công nghệ vì con người", Antech không ngừng 
                                đổi mới và phát triển để mang lại giá trị tốt nhất cho đối tác.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                Giá trị cốt lõi
                            </h3>
                            <div className="space-y-6">
                                {values.map((value, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <div className="text-blue-600">
                                                    {value.icon}
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                                {value.title}
                                            </h4>
                                            <p className="text-gray-600">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mission & Vision */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-blue-600 text-white rounded-xl p-6">
                                <h4 className="text-xl font-semibold mb-3">Sứ mệnh</h4>
                                <p className="text-blue-100">
                                    Mang công nghệ tiên tiến đến mọi doanh nghiệp, giúp họ chuyển đổi số thành công 
                                    và phát triển bền vững trong kỷ nguyên 4.0.
                                </p>
                            </div>
                            <div className="bg-indigo-600 text-white rounded-xl p-6">
                                <h4 className="text-xl font-semibold mb-3">Tầm nhìn</h4>
                                <p className="text-indigo-100">
                                    Trở thành đối tác công nghệ tin cậy hàng đầu tại Việt Nam, được khách hàng 
                                    lựa chọn và tin tưởng cho mọi dự án công nghệ.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Đội ngũ chuyên gia
                        </h3>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Đội ngũ kỹ sư giàu kinh nghiệm với chuyên môn cao trong các lĩnh vực công nghệ khác nhau
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Nguyễn Văn A", position: "CEO & Founder", expertise: "Full-stack Development" },
                            { name: "Trần Thị B", position: "CTO", expertise: "AI & Machine Learning" },
                            { name: "Lê Văn C", position: "Lead Developer", expertise: "Mobile Development" },
                            { name: "Phạm Thị D", position: "UI/UX Designer", expertise: "Product Design" }
                        ].map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-white text-xl font-bold">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                                <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                                <p className="text-sm text-gray-600">{member.expertise}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About 