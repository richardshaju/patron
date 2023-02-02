import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="left">
          <img src={require('./logo.png.png')} alt="" />
          <a href="">CONTACT US</a>
        </div>
        <div className="social">
            <h3>SOCIAL</h3>
        <a href="https://twitter.com/richard_shaju?t=MAsXlb2cJD80mLmmEyUzdw&s=09"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/richard_kuttikkadan"><i className="fab fa-instagram"></i></a>
        <a href="https://www.instagram.com/richard_kuttikkadan"><i class="fa-brands fa-facebook"></i></a>
        
        </div>
        <div className="right">

        </div>
      </div>
      <div className="copyright">
          <p> &copy</p>
      </div>
    </div>
  )
}

export default Footer