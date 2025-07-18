import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../component 1/Navbar'
import ContactAndFooter from './ContactAndFooter'
import Footer from './Footer'
import Loading from './Loading'
import Breadcrumb from './Breadcrumb'
import { useLoading } from '../hooks/useLoading'

function Layout() {
    const isLoading = useLoading()
    const location = useLocation()
    const showBreadcrumb = location.pathname !== '/'
    const showContactAndFooter = location.pathname === '/contact'

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {showBreadcrumb && <Breadcrumb />}
            <main className="flex-grow">
                <Outlet />
            </main>
            {showContactAndFooter ? <ContactAndFooter /> : <Footer />}
        </div>
    )
}

export default Layout 