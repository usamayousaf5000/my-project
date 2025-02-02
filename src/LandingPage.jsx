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
import MenFashion from './MenFashion'

const LandingPage = () => {
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
            <MenFashion/>
            <CardSlider2 />
            <MenFashion/>
            <CardSlider />
            <Footer />
        </>
    )
}
export default LandingPage