import React from 'react'
import "./Main.css"
import Service from '../Service/Service'
import Booking from '../Booking/Booking'
import Footer from '../Footer/Footer'
function Main() {
    return (
        <div className="wrap">

            <div className='main'>
                <div className="content">
                    <h4>Why Patron?</h4>
                    <p>Parton is the premier catering and events company of choice in Kerela.
                        We create remarkable experiences by offering the finest quality foods and providing unsurpassed personalized service, driven by our
                        passion for life’s special occasions.
                        From weddings to corporate events, we bring chef-inspired menus, brilliant event design and immersive experiences to every event.
                        Our catering creations are a deep form of love we live to share with people.
                        We will collaborate with you to create custom builds and engaging presentations.
                        We’re all about learning what makes you feel joy and turning it into an extraordinary affair everyone remembers for years to come. <br /><br />
                        We strive to provide easy-to-order, awesome-to-eat catering at every Above & Beyond event. Whatever your hopes and dreams,
                        we want to help you plan a San Francisco celebration that you and your guests won’t soon forget. Our professional team of planners and
                        servers will work together along the way to make sure every detail is attended to, and every expectation exceeded.</p>
                    <div className="wrap-image">
                        <img src={require('./plate.png')} alt="" />
                    </div>
                </div>
                <div className="image">
                    <img src={require('./food.jpg')} alt="" />
                </div>
            </div>
            <div className="service-wrap">

                <Service />
                <Booking/>
                <Footer/>
            </div>
        </div>
    )
}

export default Main