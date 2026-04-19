import React from 'react'
import AgroHero from '../components/Home/AgroHero'
import OfferingSection from '../components/Home/OfferingSection'
import AgroAbout from '../components/Home/AgroAbout'
import ERPSection from '../components/Home/ERPSection'
import AgroSeedlingSection from '../components/Home/AgroSeedlingSection.jsx'
import FarmingSection from '../components/Home/FarmingSection.jsx'
import KrushiSevaSection from '../components/Home/KrushiSevaSection.jsx'
import StatsSection from '../components/Home/StatsSection.jsx'
import ContactCTA from '../components/Home/ContactCTA.jsx'

const Home = () => {
  return (
    <div>
      <AgroHero/>
     
      <ERPSection/>
      <AgroSeedlingSection/>
      <FarmingSection/>
      <KrushiSevaSection/>
      <StatsSection/>
      <ContactCTA/>
    </div>
  )
}

export default Home
