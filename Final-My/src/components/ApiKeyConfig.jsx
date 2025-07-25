import React, { useState, useEffect } from 'react';

const ApiKeyConfig = ({ isOpen, onClose, onApiKeySet }) => {
  const [apiKey, setApiKey] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Load API key từ localStorage
    const savedApiKey = localStorage.getItem('openai_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
      setIsValid(true);
    }
  }, []);

  const handleSave = () => {
    if (apiKey.trim()) {
      localStorage.setItem('openai_api_key', apiKey);
      setIsValid(true);
      onApiKeySet(apiKey);
      onClose();
    }
  };

  const handleRemove = () => {
    localStorage.removeItem('openai_api_key');
    setApiKey('');
    setIsValid(false);
    onApiKeySet('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-[90vw]">
        <h2 className="text-xl font-bold mb-4">Cấu hình ChatGPT API</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            OpenAI API Key
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            API key sẽ được lưu trong trình duyệt của bạn
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-medium text-gray-700 mb-2">Hướng dẫn:</h3>
          <ol className="text-sm text-gray-600 space-y-1">
            <li>1. Truy cập <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OpenAI Platform</a></li>
            <li>2. Đăng nhập và tạo API key mới</li>
            <li>3. Copy API key và paste vào ô trên</li>
            <li>4. Click "Lưu" để kích hoạt ChatGPT</li>
          </ol>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleSave}
            disabled={!apiKey.trim()}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Lưu
          </button>
          {isValid && (
            <button
              onClick={handleRemove}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Xóa
            </button>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
          >
            Hủy
          </button>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Lưu ý:</strong> API key sẽ được sử dụng để gọi ChatGPT. 
            Hãy đảm bảo bạn có đủ credit trong tài khoản OpenAI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyConfig; 