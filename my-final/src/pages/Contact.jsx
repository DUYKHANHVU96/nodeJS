import React from 'react'
import PageTransition from '../components/PageTransition'

function Contact() {
    return (
        <PageTransition>
            <div className="pt-16">
                {/* Contact content is now handled by ContactAndFooter component in Layout */}
                <div className="text-center py-20">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Liên hệ với Antech
                    </h1>
                    <p className="text-xl text-gray-600">
                        Vui lòng điền form bên dưới để liên hệ với chúng tôi
                    </p>
                </div>
            </div>
        </PageTransition>
    )
}

export default Contact 