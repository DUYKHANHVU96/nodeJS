import React from 'react'
import Group52 from '../assets/Group 52.png'


const customers = [
  {
    name: 'Nguyễn Văn Anh',
    feedback: 'Dịch vụ rất chuyên nghiệp, đội ngũ hỗ trợ tận tình và sản phẩm chất lượng.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Trần Thị Bình',
    feedback: 'Tôi rất hài lòng với giải pháp phần mềm mà Antech cung cấp.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Lê Văn Cường',
    feedback: 'Quy trình làm việc rõ ràng, minh bạch và đúng tiến độ.',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    name: 'Phạm Thị Dung',
    feedback: 'Sản phẩm chất lượng, bảo mật tốt, tôi rất yên tâm.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
 
];
const service = [
  {
    name: 'Đối tác tin cậy',
    desc: 'Cách tiếp cận hợp tác của chúng tôi có nghĩa là chúng tôi có được sự hiểu biết thấu đáo về tầm nhìn, giá trị, thách thức và mục tiêu của bạn. Điều này đảm bảo giá trị nhất quán và liên tục cho doanh nghiệp của bạn.',
    icon: <img src={Group52} alt="logo hand" className="h-12 w-auto" />,
  },
  {
    name: 'Đối tác tin cậy',
    desc: 'Cách tiếp cận hợp tác của chúng tôi có nghĩa là chúng tôi có được sự hiểu biết thấu đáo về tầm nhìn, giá trị, thách thức và mục tiêu của bạn. Điều này đảm bảo giá trị nhất quán và liên tục cho doanh nghiệp của bạn.',
    icon: <img src={Group52} alt="logo hand" className="h-12 w-auto" />,
  },
  {
    name: 'Đối tác tin cậy',
    desc: 'Cách tiếp cận hợp tác của chúng tôi có nghĩa là chúng tôi có được sự hiểu biết thấu đáo về tầm nhìn, giá trị, thách thức và mục tiêu của bạn. Điều này đảm bảo giá trị nhất quán và liên tục cho doanh nghiệp của bạn.',
    icon: <img src={Group52} alt="logo hand" className="h-12 w-auto" />,
  },
  
];


function CustomersSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Khách Hàng Nói Gì Về Chúng Tôi</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {customers.map((item, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center text-center">
              <img src={item.img} alt={item.name} className="w-20 h-20 rounded-full mb-4 object-cover" />
              <p className="italic text-gray-700 mb-2">"{item.feedback}"</p>
              <div className="font-semibold text-blue-600">{item.name}</div>
            </div>
          ))}
        </div>
      </div>


    </section>
  )
}

export default CustomersSection 