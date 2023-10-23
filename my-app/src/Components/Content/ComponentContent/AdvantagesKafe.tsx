import React from 'react'
import AdvantagesFoto from '../../../photos/FotoModel2.png'
import {SlSocialVkontakte} from 'react-icons/sl'
import { FaInstagramSquare, FaTelegram } from 'react-icons/fa'
import { FaSquareXTwitter} from 'react-icons/fa6'

const AdvantagesKafe = () => {
  return (
    <div className='flex flex-1 flex-row'>
        <div className='flex basis-full justify-center items-center'><img src={AdvantagesFoto} className='absolute w-[13%] h-[17%]' /></div>
        <div className='flex flex-col basis-full  '>
            <h1 className='text-lg'>Преимущества</h1>
            <p className='text-base pt-6'>Быстрый Wi-Fi, удобные рабочие места, разнообразное меню и приветливый персонал – всё это делает наш интернет-кафе Эпицентр особенным!</p>
            <div className='pt-5 flex flex-row basis-full items-center'> 
            <div className='flex basis-full justify-center'>  <SlSocialVkontakte className='h-[50%] w-[50%] text-[navy]'/></div>
            <div className='flex basis-full justify-center'>  <FaTelegram className='h-[50%] w-[50%] text-[DodgerBlue]'/></div>
            <div className='flex basis-full justify-center' > <FaInstagramSquare className='h-[50%] w-[50%] text-[DeepPink]'/></div>
            <div className='flex basis-full justify-center'>  <FaSquareXTwitter  className='h-[50%] w-[50%]'/></div>
            </div>
        </div>
    </div>
  )
}

export default AdvantagesKafe