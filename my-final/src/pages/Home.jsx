import React from 'react'
import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import SolutionsSection from '../components/SolutionsSection'
import CustomersSection from '../components/CustomersSection'

function Home() {
    return (
        <PageTransition>
            <div>
                <Hero />
                <WhyChooseUsSection />
                <SolutionsSection />
                <CustomersSection />
            </div>
        </PageTransition>
    )
}

export default Home 