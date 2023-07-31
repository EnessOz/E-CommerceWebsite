import React from 'react'
import { SiVisa } from "react-icons/si"
import { PiContactlessPaymentLight } from "react-icons/pi"
import { useSelector } from 'react-redux'




export const Payment = () => {
    const priceData = useSelector((state) => state.products)

    return (
        <div className='cartContainer'>
            <h4>{priceData.totalPrice === 0 ? "What are you doing on the payment page with an empty shopping cart? Get out and buy something!" : "Congratulations. You're ready to buy something!"}</h4>
            <h3>Total Price: {priceData.totalPrice} $ </h3>
            <div className='cardFront'>
                <div>
                    <input className='cardNumber' type="number" style={{ width: '300px' }} placeholder='Card Number'></input>
                </div>
                <div>
                    <input className='name' type="text" style={{ width: '110px' }} placeholder='Name'></input>
                    <input className='lastName' type="text" style={{ width: '130px' }} placeholder='Last Name'></input>
                </div>
                <div>
                    <input className='month' type="number" style={{ width: '50px' }} placeholder='MM'></input>
                    <input className='year' type="number" style={{ width: '50px' }} placeholder='Year'></input>
                    <div className='iconVisa'><SiVisa /></div>
                    <div className='iconContactless'><PiContactlessPaymentLight /></div>
                    <h2 className='bankName'>GorgeousBank</h2>
                </div>
            </div>
            <div className='cardBack'>
                <input className='cvc' type="number" style={{ width: '50px' }} placeholder='CVC'></input>
                <div className='backLine'>
                </div>
            </div>
        </div>
    )
}
