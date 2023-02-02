import React from 'react'
import './Booking.css'
function Booking() {
    return (
        <div className='booking' id='booking'>
            <h3>BOOK YOUR EVENT NOW !</h3>
            <div className="form-wrap">
                <div className="image-left">
                    <img src={require('./image_1.jpg')} alt="" />
                </div>
                <div className="form">
                    <form action="">
                        <div className="row-1">
                            <input type="text" placeholder="Name" max="15"/>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="row-2">
                            <input type="text" placeholder="Mobile" />
                            <select name="cars" id="cars">
                                <option value="0">Event Type:</option>
                                <option value="saab">Wedding</option>
                                <option value="opel">Corperate</option>
                                <option value="audi">Social</option>
                            </select>
                        </div>
                        <div className="row-3">
                            <input type="text" placeholder='Approximate no of Guest' />
                            <input type="date" placeholder='Date of Event' />
                        </div>
                        <div className="row-4">
                            <textarea placeholder='Anything More...' rows="5" cols="30" name="" id="" ></textarea>
                        </div>
                        <button type='submit'>BOOK NOW</button>
                    </form>
                </div>
                <div className="image-rigth">
                    <img src={require('./image_2.jpg')} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Booking