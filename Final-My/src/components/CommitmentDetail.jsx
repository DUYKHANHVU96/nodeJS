import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { companyFeaturesData } from './dataShow/dataWhey.jsx';

const CommitmentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Tìm cam kết theo ID
  const commitment = companyFeaturesData.find(item => item.id === parseInt(id));
  
  if (!commitment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Không tìm thấy thông tin</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Về trang chủ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                ← Quay lại
              </button>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{commitment.icon}</span>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{commitment.title}</h1>
                  <p className="text-gray-600">{commitment.description}</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <p className="text-blue-800 font-medium">Cam kết của KVWheyShop</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Breadcrumb */}
          <div className="bg-gray-50 px-6 py-4 border-b">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <a href="/" className="hover:text-blue-600">Trang chủ</a>
              <span>→</span>
              <a href="/" className="hover:text-blue-600">Cam kết</a>
              <span>→</span>
              <span className="text-gray-800 font-medium">{commitment.title}</span>
            </nav>
          </div>

          {/* Main Content */}
          <div className="p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: commitment.detail.content }}
            />
          </div>

          {/* Related Commitments */}
          <div className="bg-gray-50 px-8 py-6 border-t">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Các cam kết khác</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {companyFeaturesData
                .filter(item => item.id !== commitment.id)
                .slice(0, 3)
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/cam-ket/${item.id}`)}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{item.icon}</span>
                      <h4 className="font-semibold text-gray-800 text-sm line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-xs line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Tin tưởng KVWheyShop</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Với hơn 10 năm kinh nghiệm và hàng trăm nghìn khách hàng tin tưởng, 
            MyWheyShop cam kết mang đến trải nghiệm mua sắm tốt nhất cho bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/products')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Xem sản phẩm
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Liên hệ tư vấn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitmentDetail; 