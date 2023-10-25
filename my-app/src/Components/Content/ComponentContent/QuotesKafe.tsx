import React, { FC } from 'react'
import myImage1 from '../../../photos/FotoModel1.png';
import myImage2 from '../../../photos/FotoModel5.png';
import myImage3 from '../../../photos/FotoModel4.png';

const QuotesKafe: FC = () => {
    return (
        <div className='flex flex-row items-center gap-7 justify-center'>
            <div className='flex basis-full gap-3 flex-col bg-[#e3e3ff] rounded-xl'>
                <div className='flex px-3 py-3 '>
                    <div className='flex  basis-full rounded-xl justify-center items-center  w-28 h-44 bg-white '><img src={myImage3} className='flex w-30 h-44 ' alt='My Image' /></div>
                </div>

                <h1 className='flex basis-full pl-3 text-base'>Лучшее место для работы над проектами с комфортом и вкусным кофе!</h1>
                <p className='flex basis-full pl-3 text-gray-600 pb-2'> Александр Смирнов</p>
            </div>
            <div className='flex basis-full  gap-3  flex-col bg-[#e3e3ff] rounded-xl'>
                <div className='flex px-3 py-3 '>
                    <div className='flex  basis-full rounded-xl justify-center items-center  w-28 h-44 bg-white '><img src={myImage2} className='flex w-30 h-56 ' alt='My Image' /></div>
                </div>

                <h1 className='flex basis-full pl-3 text-base'>Очень люблю проводить время здесь. Интерьер и атмосфера – просто потрясающие!</h1>
                <p className='flex basis-full pl-3 text-gray-600 pb-2'> Мария Кузнецова</p>
            </div>
            <div className='flex basis-full gap-3  flex-col bg-[#e3e3ff] rounded-xl'>
                <div className='flex px-3 py-3 '>
                    <div className='flex  basis-full rounded-xl justify-center items-center  w-28 h-44 bg-white '><img src={myImage1} className='flex w-24 h-[94%] ' alt='My Image' /></div>
                </div>

                <div className='flex basis-full pl-3 text-base '>Эпицентр спасает в дни <br />забытых дома ноутбуков <br /> и срочных дел!</div>
                <p className='flex basis-full pl-3 text-gray-600 pb-2'> Игорь Макаров</p>
            </div>
        </div>
    )
}

export default QuotesKafe