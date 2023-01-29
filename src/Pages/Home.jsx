import React from 'react'
import Banner from '../Components/Banner/Banner'
import Main from '../Components/Main/Main'
import Navbar from '../Components/Navbar/Navbar'
import Service from '../Components/Service/Service'


function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Main/>
      <Service/>
    </div>
  )
}

export default Home