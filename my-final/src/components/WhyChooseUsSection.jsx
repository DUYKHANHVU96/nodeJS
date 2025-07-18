import React from 'react'

function WhyChooseUsSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Tại Sao Chọn Antech?</h2>
          <p className="text-gray-600 mb-6">Bạn sẽ nhận được sản phẩm, dịch vụ chất lượng cao với đội ngũ kỹ sư phần mềm chuyên nghiệp, tận tâm và sáng tạo. Chúng tôi luôn đồng hành cùng khách hàng để mang lại giải pháp tối ưu nhất.</p>
          <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition duration-300">Tìm hiểu về Antech</a>
        </div>
        <div className="flex-1">
          {/* Có thể thêm hình ảnh hoặc icon minh họa ở đây nếu muốn */}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection 