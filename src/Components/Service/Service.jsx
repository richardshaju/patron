import React from 'react'
import "./Service.css"
function Service() {
  return (
    <div className='service'>
      <h3>Our Services</h3>
      <div className="wrap-box">
        <div className="box">
          <img src={require('./wedding.jpg')} alt="" />
          <div className="topic">
            <h4>WEDDING</h4>
            <p>Partner with a dynamic team that will translate your wedding dreams into reality.</p>
          </div>
        </div>
        <div className="box">
          <img src={require('./corperate.jpg')} alt="" />
          <div className="topic">
            <h4>CORPORATE</h4>
            <p>We can build you an environment that engages mind and spirit.</p>
          </div>
        </div>
        <div className="box">
          <img src={require('./social.jpg')} alt="" />
          <div className="topic">
            <h4>SOCIAL</h4>
            <p>There’s nothing more beautiful than bringing people together for an important life moment.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service