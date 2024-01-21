import React from 'react'
import Footer from '../components/Footer/Footer';
import YachtContent from '../components/Yacht/YachtContent';
import YachtSlider from '../components/Yacht/YachtSlider';
import YachtHeader from '../components/Yacht/YachtHeader';


function Yacht() {
  return (
    <>
        <YachtHeader />
        <YachtContent />
        <YachtSlider />
        <Footer />
    </>
  )
}

export default Yacht;