import React from 'react'
import PortfolioComponent from '../components/Portfolio'
import PageTransition from '../components/PageTransition'

function Portfolio() {
    return (
        <PageTransition>
            <div className="pt-16">
                <PortfolioComponent />
            </div>
        </PageTransition>
    )
}

export default Portfolio 