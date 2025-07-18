import React from 'react'
import AboutComponent from '../components/About'
import PageTransition from '../components/PageTransition'

function About() {
    return (
        <PageTransition>
            <div className="pt-16">
                <AboutComponent />
            </div>
        </PageTransition>
    )
}

export default About 