import React, { useEffect, useState } from 'react'
import './Banner.css'
import banner from './banner.jpg'
import banner2 from './banner2.jpg'
import banner3 from './banner3.jpg'


function Banner() {

  const [backgroundImage, setbackgroundImage] = useState('')

  var imageIndex = 0;
  var images = [banner, banner2, banner3];

  useEffect(() => {

    setInterval(function () {
      setbackgroundImage(images[imageIndex])
      imageIndex = (imageIndex + 1) % images.length;

    }, 6000);

    return () => {

    }
  }, [])


  return (

    <div className='banner' style={{ backgroundImage: `url(${" " + backgroundImage + " "})` }}>

      <div className="fade">
        <h3>HAVE A FUNCTION? WE'VE <br /> GOT THE CATERING.</h3>
        <p>Bringing high quality food and service to your next event.</p>
        <a href="#booking">SCHEDULE NOW</a>
      </div>
    </div>
  )
}

export default Banner