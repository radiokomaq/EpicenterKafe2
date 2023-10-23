

import React, { FC } from 'react';
import { observer } from 'mobx-react-lite'
import Modal from '../../Content/Modal/Modal';
import DetalisItemsMenu from './DetalisItemsMenu';
import myState from '../../../Store/Store'
import MenuStore from '../../../Store/MenuStore'
import BasketStore from '../../../Store/Basket'

interface MenuProps {
  name: string;
  description: string;
  photo: string;
  price: number;
}
const MenuKafeItems: FC<MenuProps> = ({ name, description, photo, price }) => {
  function handleModalOpen() {
    myState.setIsOpenDetalis(true)
    MenuStore.setDetalisItem(name, description, photo, price)
  }
  const dobav = () => {
    BasketStore.setBasketIsOpen(true)
    BasketStore.setBaskedItems(name,photo,1,price)
    myState.setIsOpenDetalis(false)
  }
  // console.log(BasketStore.basketIsOpen);
  
  return (
    <div className='flex flex-col gap-0 basis-[17%] border-[1px] border-white hover:border-[Silver] px-2 py-2'>

      <div onClick={handleModalOpen} className='flex items-center justify-center h-40 bg-gray-200'>
        <img
          src={require(`../../../photos/assest/${photo}`)}
          alt='Фото'
          className='w-full h-full object-cover '
        />
      </div>
      <div onClick={handleModalOpen} className='flex flex-col items-start'>
        <h3 className='text-basis font-bold'>{name}</h3>
        <p className='text-gray-500 line-clamp-2'>{description}</p>
      </div>
      <div className='flex justify-between items-center gap-2 '>
        <div className='text-2xl font-bold'>{price} ₽</div>
        <button onClick={() => dobav()} className='px-4 py-2 border-2 border-black bg-black text-white rounded-3xl hover:bg-white hover:text-black'>
          Добавить
        </button>

      </div>

    </div>
  );
};

export default observer(MenuKafeItems);