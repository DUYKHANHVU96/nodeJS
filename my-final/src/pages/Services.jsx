import React from 'react'
import ServicesComponent from '../components/Services'
import PageTransition from '../components/PageTransition'

function Services() {
    return (
        <PageTransition>
            <div className="pt-16">
                <ServicesComponent />
            </div>
        </PageTransition>
    )
}

export default Services 