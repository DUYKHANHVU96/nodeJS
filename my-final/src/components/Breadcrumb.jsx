import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Breadcrumb() {
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter((x) => x)

    const breadcrumbMap = {
        'services': 'Dịch vụ',
        'about': 'Giới thiệu',
        'portfolio': 'Dự án',
        'contact': 'Liên hệ'
    }

    return (
        <nav className="bg-gray-50 border-b border-gray-200 py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-2 text-sm">
                    <Link 
                        to="/" 
                        className="text-gray-500 hover:text-blue-600 transition duration-300"
                    >
                        Trang chủ
                    </Link>
                    
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
                        const isLast = index === pathnames.length - 1
                        
                        return (
                            <React.Fragment key={name}>
                                <span className="text-gray-400">/</span>
                                {isLast ? (
                                    <span className="text-blue-600 font-medium">
                                        {breadcrumbMap[name] || name}
                                    </span>
                                ) : (
                                    <Link 
                                        to={routeTo}
                                        className="text-gray-500 hover:text-blue-600 transition duration-300"
                                    >
                                        {breadcrumbMap[name] || name}
                                    </Link>
                                )}
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Breadcrumb 