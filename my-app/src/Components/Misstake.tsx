import React, { FC } from 'react'
import Store from '../Store/Store'

const Misstake:FC = () => {
    return (
        <div className={`fixed flex items-center  w-[250px] h-[115px] top-[15%] ml-300 right-0  animate-success z-50 
        ${Store.name.length === 0 || Store.surname.length === 0 || Store.email.length === 0 || Store.telephone.length === 0 ? 'bg-[red] p-10':'  bg-[green] p-4'}
        `}>
            {Store.name.length === 0 || Store.surname.length === 0 || Store.email.length === 0 || Store.telephone.length === 0 ? 
            <div className='text-center text-white'>Бронирование не завершенно!</div> :
                <div className='flex  flex-col h-full w-full '>
                    <h1 className='flex justify-center text-white'> Спасибо за заказ!</h1>
                    <p className='flex text-center text-white'> Информация отправленна на почту: {Store.email}</p>
                </div>}

        </div>
    )
}

export default Misstake