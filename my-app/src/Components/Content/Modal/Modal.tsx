import React, { FC, ReactNode } from 'react';
import myState from '../../../Store/Store'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { observer } from 'mobx-react-lite';
import Draggable from 'react-draggable';
import BasketStore from '../../../Store/Basket'

type ModalProps = {
  children: ReactNode;

};

const Modal: FC<ModalProps> = ({ children }: ModalProps) => {
  function handleModalClous() {
    myState.setIsOpen(false)
    myState.setRegistratonIsOpen(false)
    myState.setIsOpenDetalis(false)
    myState.setOrderSurveyisOpen(false)
    BasketStore.setBasketIsOpen(false)
  }
  return (
    <div
      onClick={() => handleModalClous()}
      className=
      {`${BasketStore.basketIsOpen ?
        'fixed top-0 right-0 bottom-0 flex items-center justify-center w-full h-full bg-black bg-opacity-20 backdrop-blur-sm' :
        'flex items-center justify-center top-0 right-0 fixed w-full h-full bg-black bg-opacity-20 backdrop-blur-sm'}  `}

    >
      {BasketStore.basketIsOpen ? <div
        onClick={(e) => e.stopPropagation()}
        className='fixed top-0 right-0 bottom-0 w-[400px] bg-white shadow-lg   animate-slide-out'
      >



        <button
          onClick={(e) => {
            e.stopPropagation();
            handleModalClous()
          }}
          className='absolute top-4 right-4 bg-transparent border-none p-0 cursor-pointer'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 transition-transform duration-300'
            fill='none'
            viewBox='0 0 24 24'
            stroke='black'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        {myState.isOpen ? <div className='flex flex-row gap-4'>
          <div className='flex basis-10/12 justify-end items-center text-base p-0 '><b>Выберите место:</b>
          </div>
          <div className='flex flex-col basis-1/2 p-0 gap-[2px] '>
            <div className='flex flex-row '>
              <div className='flex px-4 py-4 bg-[#DC143C] justify-start'></div>
              <div className='flex'> &nbsp;-Занято</div>
            </div>
            <div className='flex flex-row'>
              <div className='flex px-4 py-4 bg-[#98FB98]'></div>
              <div className='flex'>&nbsp;-Выбрано</div>
            </div>

          </div>
          <div className=' flex basis-full justify-end items-center p-0 text-base font-bold'>Выберите дату:</div>
          <div className='flex  basis-full justify-center items-center  p-0 '>
            <DatePicker
              className=' text-base text-center border-2 border-[#e2c3ae] rounded-md        '

              selected={myState.selectedDate}
              onChange={(date) => myState.setSelectedDate(date)}

              dateFormat='dd/MM/yyyy'

            />
          </div>
        </div> : ''}


        {children}

      </div>

        :
        <Draggable>

          <div
            onClick={(e) => e.stopPropagation()}
            className={`${BasketStore.basketIsOpen ?
              'fixed top-0 right-0 bottom-0 w-[400px] bg-white shadow-lg transform translate-x-full transition-transform duration-300' :


              `relative flex flex-col p-10 rounded-lg bg-white ${myState.isOpenDetalis ? 'h-[490px] w-[610px]' : myState.orderSurveyisOpen ? 'h-[300px] w-[400px]' : 'h-[700px] w-[1000px]'} `}`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleModalClous()
              }}
              className='absolute top-4 right-4 bg-transparent border-none p-0 cursor-pointer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 transition-transform duration-300'
                fill='none'
                viewBox='0 0 24 24'
                stroke='black'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            {myState.isOpen === true && myState.orderSurveyisOpen === false ? <div className='flex flex-row gap-4'>
              <div className='flex basis-10/12 justify-end items-center text-base p-0 '><b>Выберите место:</b>
              </div>
              <div className='flex flex-col basis-1/2 p-0 gap-[2px] '>
                <div className='flex flex-row '>
                  <div className='flex px-4 py-4 bg-[#DC143C] justify-start'></div>
                  <div className='flex'> &nbsp;-Занято</div>
                </div>
                <div className='flex flex-row'>
                  <div className='flex px-4 py-4 bg-[#98FB98]'></div>
                  <div className='flex'>&nbsp;-Выбрано</div>
                </div>

              </div>
              <div className=' flex basis-full justify-end items-center p-0 text-base font-bold'>Выберите дату:</div>
              <div className='flex  basis-full justify-center items-center  p-0 '>
                <DatePicker
                  className=' text-base text-center border-2 border-[#e2c3ae] rounded-md        '

                  selected={myState.selectedDate}
                  onChange={(date) => myState.setSelectedDate(date)}

                  dateFormat='dd/MM/yyyy'

                />
              </div>
            </div> : ''}


            {children}
          </div>
        </Draggable>
      }

    </div>

  );
};

export default observer(Modal);

















































































































































































































