import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Slider from './Slider'
import ListSlider from './ListSlider'
import CardSlider from './CardSlider'
import CardSlider1 from './CardSlider1'
import Categories from './Categories'
import Footer from './Footer'
import BrandSlider from './BrandSlider'
import CardSlider2 from './CardSlider2'
import AutoSlider from './AutoSlider'
import WomensFashion from './MenFashion'

function MobilePage() {
  return (
    <>
     <Header />
            <Navbar />
            <Slider />
            <ListSlider />
            <Categories />
            <CardSlider />
            <BrandSlider />
            <CardSlider1 />
            <AutoSlider />
            <WomensFashion/>
            <CardSlider2 />
            <WomensFashion/>
            <Footer />
    </>
  )
}

export default MobilePage
