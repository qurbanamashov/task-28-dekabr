import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Card from './Card/Card'
import Header from './Header/Header'
import SectionForm from './SectionForm/SectionForm'
import SectionInfo from './SectionInfo/SectionInfo'
import SectionText from './SectionText/SectionText'
function Home() {
  return (
    <>
        <Navbar/>
        <Header/>
        <SectionInfo/>
        <SectionText/>
        <Card/>
        <SectionForm/>
        <Footer/>
    </>
  )
}
export default Home