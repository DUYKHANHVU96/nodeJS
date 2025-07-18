import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <div>
                    <h1 className="text-9xl font-bold text-blue-600">404</h1>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Trang không tồn tại
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
                    </p>
                </div>
                <div className="space-y-4">
                    <Link
                        to="/"
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Về trang chủ
                    </Link>
                    <Link
                        to="/contact"
                        className="group relative w-full flex justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Liên hệ hỗ trợ
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound 