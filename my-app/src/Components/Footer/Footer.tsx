import React from 'react'
import SposokFooter from './ComponentFooter/SposokFooter'
import {SlSocialVkontakte} from 'react-icons/sl'
import { FaInstagramSquare, FaTelegram } from 'react-icons/fa'
import { FaSquareXTwitter} from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='flex flex-col  gap-10 pt-56 pb-24'>
      <div className='border-t-2 border-opacity-30  border-t-indigo-500 pb-2'></div>
      <div className=''>
        <SposokFooter />
      </div>
      <div className='flex flex-row'>
        <p className='flex basis-full pl-[32.5%]'> © 2023 Эпицентр. Все права защищены</p>
        <div className='flex basis-full justify-start items-start'>
        <div className='flex w-[15%]  justify-start'>  <SlSocialVkontakte className='h-[25%] w-[25%] text-[navy]'/></div>
            <div className='flex w-[15%]  justify-start'>  <FaTelegram className='h-[35%] w-[25%] text-[DodgerBlue]'/></div>
            <div className='flex w-[15%]  justify-start' > <FaInstagramSquare className='h-[35%] w-[25%] text-[DeepPink]'/></div>
            <div className='flex w-[15%]   justify-start'>  <FaSquareXTwitter  className='h-[35%] w-[25%]'/></div>
        </div>
      </div>

    </div>
  )
}

export default Footer