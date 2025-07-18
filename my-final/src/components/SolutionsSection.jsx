import React from 'react'
import Group11 from '../assets/Group 11.png'
import Group14 from '../assets/Group 14.png'
import Union from '../assets/Union.png'
import Group7 from '../assets/Group 7.png'
import Group13 from '../assets/Group 13.png'


const solutions = [
  {
    title: 'Tư vấn Công nghệ',
    desc: 'Chúng tôi giúp bạn định hướng trong thế giới công nghệ đang thay đổi nhanh chóng với các mục tiêu và kết quả kinh doanh luôn được đặt lên hàng đầu.',
    icon: <img src={Group11} alt="logo message" className="h-12 w-auto" />,
  },
  {
    title: 'Phân tích dữ liệu',
    desc: 'Chúng tôi giúp bạn nhìn thấy tiềm năng của việc tạo dữ liệu và thực hiện chiến lược toàn diện và tích hợp.',
    icon: <img src={Group14} alt="logo message" className="h-12 w-auto" />,
  },
  {
    title: 'Quy trình giải pháp',
    desc: 'Chúng tôi cung cấp một cách tiếp cận thông tin để quản lý các quy trình kinh doanh của bạn để giảm chi phí hoạt động của bạn.',
    icon: <img src={Union} alt="logo message" className="h-12 w-auto" />,
  },
  {
    title: 'Dịch vụ - Ứng dụng',
    desc: 'Chúng tôi cung cấp dịch vụ phát triển ứng dụng từ đầu đến cuối để tăng tốc đổi mới ký thuật số và đảm bảo tăng trưởng kinh doanh.',
    icon: <img src={Group7} alt="logo message" className="h-12 w-auto" />,
  },
  {
    title: 'Chất lượng & Bảo mật',
    desc: 'Chúng tôi độc lập kiểm tra hệ thống của bạn và phần mềm, giúp bạn tối ưu hóa thời gian, chí phí và giảm thiểu rủi ro.',
    icon: <img src={Group13} alt="logo message" className="h-12 w-auto" />,
  },
];

function SolutionsSection() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Giải Pháp Của Chúng Tôi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection 