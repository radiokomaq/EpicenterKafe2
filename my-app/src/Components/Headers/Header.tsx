import React, { FC } from 'react'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import ft from '../../photos/FotoModel5.png'


const Header:FC = () => {
  return (
    <div className="flex-col  px-[27.7%] w-full h-[17%] text-white  relative text-center  bg-[#62929E]">
            <div className=" absolute bg-cover bg-center w-[25%] h-[99%] bottom-[-50px] right-[30%]" style={{ backgroundImage: `url(${ft})`,   backgroundRepeat: 'no-repeat' }}>

</div>
      <div className='flex  pt-[12%] '>
        <HeaderMenu />
      </div>

      <div className=' flex-col pt-[30%] justify-center content-end'>

        <h1 className=" flex  text-xl  h-auto relative w-100">
          Невероятный стиль, простота и
        </h1>
      <h1 className=" flex  text-xl  h-auto relative w-100">
      уют – и всё это Эпицентр!
      </h1>

      </div>


    </div>
  )
}

export default Header