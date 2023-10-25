

import React, { FC } from 'react'
import myState from '../../../Store/Store'
import { Link } from 'react-router-dom'

const OrderSurveyModal:FC = () => {

    const OrderSurveyKafe = () => {
        myState.setOrderSurveyisOpen(false)
        myState.setRegistratonIsOpen(true)      
    }

const OrderSurveyOnline= ()=>{
    myState.setOrderSurveyisOpen(false)
}

    return (
        <div  className='flex flex-col h-full w-full'>
            <h2 className='flex justify-center text-base  text-center mb-4 basis-full'>Хотите сделать заказ блюда на сайте или в кафе?</h2>
            <div className='flex flex-row justify-center '>
                <button className='px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600 basis-full' onClick={OrderSurveyKafe}>Заказать в Кафе</button>
                <Link to="/menu#section1" className='px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600 basis-full text-center' onClick={OrderSurveyOnline}>Заказать на Сайте</Link>
            </div>
        </div>
    )
}

export default OrderSurveyModal