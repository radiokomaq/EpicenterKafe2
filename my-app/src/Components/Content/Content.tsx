import React, { useState } from 'react'
import FactKafe from './ComponentContent/FactKafe'
import StaticKafe from './ComponentContent/StaticKafe'
import AdvantagesKafe from './ComponentContent/AdvantagesKafe'
import QuotesKafe from './ComponentContent/QuotesKafe'
import myState from '../../Store/Store'
import { observer } from 'mobx-react-lite'




const Content = () => {



  // const [selectedDate, setSelectedDate] = useState<Date |null>(new Date());

  function handleModalOpen(){
    myState.setIsOpen(!myState.isOpen)
  }
  return (
    <div className='flex relative flex-col '>

      <div className='flex bg-black px-[27.7%]   text-start flex-col gap-2.5 text-white justify-center'>
        <p className='pt-[8%] pb-[3%]'> Добро пожаловать!</p>
        <h1 className='text-[#62929E]  text-lg pb-[9%]'>Кафе Эпицентр – прекрасное <br /> место для работы, отдыха и <br />вкусного кофе!</h1>
      </div>
      <div className='bg-white px-[27.5%]'>
        <FactKafe />
        <div className='pt-40'>
          <AdvantagesKafe />
        </div>
        <div className='pt-40'>
          <StaticKafe />
        </div>
        <div className='pt-40'>
          <QuotesKafe />
        </div>
      </div>
      <p className='pl-20 pt-20 text-lg text-[#5e7383]'>Станьте частью семьи Эпицентр <br /> встречайте рабочие дни с удовольствием!</p>
      <div className='pt-5 pl-20 flex flex-row gap-4 '>
        <button onClick={handleModalOpen} className='bg-[#c6c5b9] text-black flex h-10 w-48 items-center justify-center'>Забронировать место</button>
         
        <button className='bg-black text-[#c6c5b9] flex h-10 w-48 items-center justify-center'>Узнать больше</button>
{/* <ModalDataComponent /> */}
      </div>

    </div>
  )
}

export default observer(Content)