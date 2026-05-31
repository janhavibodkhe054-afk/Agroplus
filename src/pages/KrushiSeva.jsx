import React from 'react'
import KrushiSevaKendraHero from '../components/krushiseva/KrushiSevaKendraHero'
import AboutKrushiSevaKendra from '../components/krushiseva/AboutKrushiSevaKendra'
import ProductsSection from '../components/krushiseva/ProductsSection'
import ServicesSection from '../components/krushiseva/ServicesSection'
import CTASection from '../components/krushiseva/CTASection'

const KrushiSeva = () => {
  return (
    <div>
      <KrushiSevaKendraHero/>
      <AboutKrushiSevaKendra/>
      <ProductsSection/>
      <ServicesSection/>
      <CTASection/>
    </div>
  )
}

export default KrushiSeva
