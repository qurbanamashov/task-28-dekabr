import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import AboutHeader from './AboutHeader/AboutHeader'
import AboutSectionCard from './AboutSectionCard/AboutSectionCard'
import AboutSectionInfo from './AboutSectionInfo/AboutSectionInfo'

function About() {
    return (
        <>
            <Navbar />
            <AboutHeader/>
            <AboutSectionInfo/>
            <AboutSectionCard/>
            <Footer/>
        </>
    )
}

export default About