import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const SposokFooter:FC = () => {
    return (
        <div className='flex flex-row justify-center gap-20'>
            <div className='flex flex-col basis-1/5 gap-2'>
                <div className='flex justify-end text-black text-base'><b>Меню</b></div>
                <div className='flex justify-end text-[#c6c5b9]'>
                    <Link to="/menu#section4" className='hover:text-black border-b border-solid border-b-white hover:border-b-black' >Кофе</Link>
                </div>
                <div className='flex justify-end text-[#c6c5b9]'>
                    <Link to="/menu#section3" className='hover:text-black border-b border-solid border-b-white hover:border-b-black'>Дессерты</Link>
                </div>
                <div className='flex justify-end text-[#c6c5b9]'>
                    <Link to="/menu#section2" className='hover:text-black border-b border-solid border-b-white hover:border-b-black'>Закуски</Link>
                </div>
                <div className='flex justify-end text-[#c6c5b9]'>
                    <Link to="/menu#section1" className='hover:text-black border-b border-solid border-b-white hover:border-b-black'>Кальян</Link>
                </div>
            </div>
            <div className='flex flex-col basis-1/5 gap-2'>
                <div className='flex justify-center text-black text-base'><b>Контакты</b></div>
                <div className='flex justify-center text-[#c6c5b9]' > <a className='hover:text-black border-b border-solid border-b-white hover:border-b-black'>Адрес</a></div>
                <div className='flex justify-center text-[#c6c5b9]'> <a className='hover:text-black border-b border-solid border-b-white hover:border-b-black'>Телефон</a></div>
                <div className='flex justify-center text-[#c6c5b9]'> <a className='hover:text-black border-b border-solid border-b-white hover:border-b-black'>Email</a></div>
                <div className='flex justify-center text-[#c6c5b9] '><Link to="/Reviews" className='hover:text-black border-b border-solid border-b-white hover:border-b-black'>Отзывы</Link></div>
            </div>
            <div className='flex flex-col basis-1/5 gap-2'>
                <div className='flex text-black text-base'><b>Социальные</b></div>
                <div className='flex text-[#c6c5b9]'> <a href='https://ru-ru.facebook.com/' className='hover:text-black border-b border-solid border-b-white hover:border-b-black'>Facebook</a></div>
                <div className='flex text-[#c6c5b9]'><a href='https://www.instagram.com/' className='hover:text-black border-b border-solid border-b-white hover:border-b-black'>Instagram</a></div>
                <div className='flex text-[#c6c5b9]'><a href='https://twitter.com/?lang=ru' className='hover:text-black border-b border-solid border-b-white hover:border-b-black'>Twitter</a></div>
            </div>
        </div>
    )
}

export default SposokFooter