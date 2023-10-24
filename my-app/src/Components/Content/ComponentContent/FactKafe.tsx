import React, { FC } from 'react'

const FactKafe: FC = () => {
    return (
        <>
            <h1 className='pt-9 text-lg'>
                Интересные факты
            </h1>
            <p className='pt-5 text-base'>
                Что может быть лучше, чем сосредоточиться на своей<br /> работе в тишине и уюте нашего интернет-кафе? Мы<br /> предлагаем свободные рабочие места, быстрый Wi-Fi и <br />ароматный кофе.
            </p>
            <div className='flex flex-row pt-8 pr-[46%] justify-between'>
                <div className='flex flex-col '>
                    <div className='flex justify-center'>200 </div>
                    <div className='flex justify-center'>рабочих мест </div>
                </div>
                <div className='flex flex-col '>
                    <div className='flex justify-center'>100 </div>
                    <div className='flex justify-center'>напитков </div>
                </div>
                <div className='flex flex-col '>
                    <div className='flex justify-center'> 50</div>
                    <div className='flex justify-center'>  десертов</div>
                </div>
            </div></>
    )
}

export default FactKafe