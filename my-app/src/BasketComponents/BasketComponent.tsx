
import React, { FC } from 'react';
import Basket from '../Store/Basket';
import myState from '../Store/Store';
import { observer } from 'mobx-react-lite'
import { IoIosRemove } from 'react-icons/io';
import { IoIosAdd } from 'react-icons/io';

const BasketComponent:FC= () => {



const ClouseAndNext=()=>{
if (Basket.baskedItems.length != 0){
  Basket.setBasketIsOpen(false)
  if(myState.pickTables.length!==0){
  myState.setRegistratonIsOpen(true)
  }else{
    myState.setIsOpen(true)
  }
}
}
  
  return (
    <div className="bg-gray-100 p-4 flex-col h-full">
      <h2 className="text-2xl font-bold mb-4 text-center  mt-4 h-[3%]">Моя корзина</h2>
      {Basket.baskedItems.length===0? <div className=' h-0 absolute top-1/2 left-1/4 text-center'>Ваша корзина еще пуста</div>:''}
      <div className="flex flex-col gap-2 h-[85%] overflow-y-scroll">
        {Basket.baskedItems.map((item, index) => (
          <div key={index} className="bg-white p-4 shadow-md flex items-center">
            <img src={require(`../photos/assest/${item.photo}`)} alt="Фото" className="w-16 h-16 mr-4" />
            <div>
              <h3 className="text-[13pt] font-bold">{item.name}</h3>
              <p className="text-gray-500">{item.price}&nbsp;₽</p>
            </div>
            <div className="flex-grow"></div>
            <div className="flex items-center flex-row px-2 py-2 gap-3">
                <p onClick={()=> Basket.setBasketMinus(item.name)} className='flex'><IoIosRemove className='cursor-pointer text-[14pt] text-gray-500 hover:text-black'/></p>
              <p className="text-gray-500 text-base"> {item.count}</p>
              <p onClick={()=>Basket.setBasketPlus(item.name)} className='flex '><IoIosAdd className='cursor-pointer  text-[14pt] text-gray-500 hover:text-black'/></p>

            </div>
          </div>
        ))}
        
</div>
<div className='flex flex-col h-[9%] gap-4'>
  <div className='flex flex-row h-[100%]'>
  <div className='flex  items-end basis-full'> Итого</div>
  <div className='flex  items-end'> {Basket.baskedTotalCost}&nbsp;₽</div>
  </div>
  <div onClick={()=>ClouseAndNext()} className={`flex mx-4 rounded-3xl basis-full justify-center  text-white bg-black items-center h-[10%] ${Basket.baskedTotalCost===0?'pointer-events-none opacity-50':'hover:bg-[gray] cursor-pointer'}    focus:bg-black focus:outline-none transition-colors duration-300 ease-in-out `}>
  <p className={``}>Продолжить&nbsp;{Basket.baskedTotalCost}&nbsp;₽</p>
  </div>

</div>

    </div>
     
  );
};

export default observer(BasketComponent);