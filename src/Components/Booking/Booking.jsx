import React from 'react'
import './Booking.css'
function Booking() {
    return (
        <div className='booking'>
            <h3>BOOK YOUR EVENT NOW !</h3>
            <div className="form-wrap">
                <div className="image-left">
                    <img src={require('./image_1.jpg')} alt="" />
                </div>
                <div className="form">
                    <form action="">
                        <div className="row-1">
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <div className="row-2">
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <div className="row-3">
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <div className="row-4">
                            <textarea rows="5" cols="30" name="" id="" ></textarea>
                        </div>
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