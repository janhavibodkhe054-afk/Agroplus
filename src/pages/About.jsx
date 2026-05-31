import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutSection from '../components/About/AboutSection'
import StatsSection from '../components/About/StatsSection'
import AboutBenefits from '../components/About/AboutBenefits'
import VisionMission from '../components/About/VisionMission'
import CTASection from '../components/About/CTASection'


const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutSection/>
      <StatsSection/>
      <AboutBenefits/>
      <VisionMission/>
      <CTASection/>
    </div>
  )
}

export default About
