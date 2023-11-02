
import React, { FC } from 'react';
import MenuStore from '../../../Store/MenuStore';
import { observer } from 'mobx-react-lite';
import BasketStore from '../../../Store/Basket';
import myState from '../../../Store/Store'
import { IoIosAdd } from 'react-icons/io';
import { IoIosRemove } from 'react-icons/io';

const DetalisItemsMenu:FC = () => {
  const dobavBasket = () =>{
    myState.setIsOpenDetalis(false)
    BasketStore.setBasketIsOpen(true)
    BasketStore.setBaskedItems(MenuStore.detalisItem[0],MenuStore.detalisItem[2],MenuStore.detalisItem[4],MenuStore.detalisItem[3])
  }
  return (
    <div className="flex gap-4 h-full w-full">
      <div className="w-1/2 flex items-center">
        <img src={require(`../../../photos/assest/${MenuStore.detalisItem[2]}`)} alt="Фото" className="w-full h-auto" />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className='flex flex-col gap-3'>
          <h2 className="text-base font-bold">{MenuStore.detalisItem[0]}</h2>
          <p className="text-black">{MenuStore.detalisItem[1]}</p>
          <p className="text-gray-500">{MenuStore.detalisItem[6]}</p>
        </div>
        <div className="flex justify-between mt-4 flex-col gap-4">
          <div className='flex flex-row w-full items-start h-full'>
            <div className='flex basis-full justify-start'>{MenuStore.detalisItem[0]}</div>
            <div className="flex text-2xl basis-1/4 font-bold justify-end">{MenuStore.detalisItem[5]} ₽</div>
          </div>
          <div className='flex items-center gap-3'>
            
            <div className='flex basis-1/5 justify-center flex-row gap-5 px-2 py-2 border-2 rounded-3xl' >
              <div onClick={()=>MenuStore.setCountMinus()} className='flex   justify-center items-center'><IoIosRemove className='cursor-pointer text-gray-500 text-[18pt] hover:text-black'/></div>
              <div className='flex text-base justify-center '>{MenuStore.detalisItem[4]}</div>
              <div onClick={()=>MenuStore.setCountPlus()} className='flex  justify-center items-center'><IoIosAdd className='cursor-pointer text-gray-500 text-[18pt] hover:text-black'/></div>
            </div>
            <button onClick={()=>dobavBasket()} className="flex basis-full justify-center px-4 py-2 border-2 border-black bg-black text-white rounded-3xl hover:bg-white hover:text-black">
              Добавить
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default observer(DetalisItemsMenu);