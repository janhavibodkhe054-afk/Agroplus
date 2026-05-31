import React from 'react'
import ServicesHero from '../components/Services.jsx/ServicesHero'
import ServicesGrid from '../components/Services.jsx/ServicesGrid'
import ServiceCTA from '../components/Services.jsx/ServiceCTA'
import AboutFarmSection from '../components/Services.jsx/AboutFarmSection'

const Service = () => {
  return (
    <div>
      <ServicesHero/>
      <ServicesGrid/>
      <ServiceCTA/>
      <AboutFarmSection/>
    </div>
  )
}

export default Service
