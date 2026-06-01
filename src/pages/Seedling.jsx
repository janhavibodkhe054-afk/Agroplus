import React from 'react'
import SeedlingHero from '../components/Seedling/SeedlingHero'
import SeedlingPhotos from '../components/Seedling/SeedlingPhotos'
import SeedlingServices from '../components/Seedling/SeedlingServices'

const Seedling = () => {
  return (
    <div>
      <SeedlingHero/>
      <SeedlingServices/>
      <SeedlingPhotos/>
    </div>
  )
}

export default Seedling
