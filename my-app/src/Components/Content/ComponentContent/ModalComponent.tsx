import React, { FC, useEffect, useState } from 'react'
import axios from 'axios';
import myState from '../../../Store/Store'
import Basket from '../../../Store/Basket'
import { observer } from 'mobx-react-lite';
import moment from 'moment';



const ModalComponent: FC = () => {
  const [pickElem, setPickElem] = useState<boolean[]>([])

  useEffect(() => {

    axios.post('http://localhost:8080/api/reservation/free', { dates: moment(myState.selectedDate).format('YYYY-MM-DD') })
      .then(response => {
        myState.setResponstTables(response.data)

      })
      .catch(error => {
        console.error(error);
      })
    for (let i = 0; i <= myState.responstTables.length; i++) {


      if (pickElem[myState.responstTables[i]] === true)
        pickElem[myState.responstTables[i]] = false
    }
  }, [myState.selectedDate, myState.responstTables])



  function searhFreeSeat(target: number) {


    for (let i = 0; i <= myState.responstTables.length; i++) {

      if (myState.responstTables[i] === target) {
        return true;

      } else {
        console.log('таргет');

      }
    }
  }


  const addItem = (index: number) => {

    let flag = 0
    for (let i = 0; i <= myState.responstTables.length; i++) {

      for (let j = 0; j <= pickElem.length; j++) {
        if ((pickElem[j] === true) && (j === myState.responstTables[i]))
          console.log(pickElem[j]);


      }



      if (myState.responstTables[i] === index)
        flag++
    }
    console.log(flag);

    if (flag === 0) {
      const updatedArray = [...pickElem];
      updatedArray[index] = !updatedArray[index];
      setPickElem(updatedArray);
    }

  };
  function ElementMainStol(ElemMainStol: number): JSX.Element[] {

    const elements: JSX.Element[] = [];
    elements.push(<div className='flex basis-full justify-center h-full   flex-row'>
      <div className='flex flex-col border-l-4 border-b-4 border-t-4 border-[#e4c3b2]' >

        <div className='flex w-5 h-5 bg-[#f0dfd5] border-[DimGrey] border-[1px] '></div>
        <div className='flex w-5 h-5 bg-[#f0dfd5] border-[DimGrey] border-[1px] border-t-0'></div>
        <div className='flex w-5 h-5 bg-[#f0dfd5] border-[DimGrey] border-[1px] border-t-0'></div>
        <div className='flex w-5 h-5 bg-[#f0dfd5] border-[DimGrey] border-[1px] border-t-0'></div>
        <div className='flex w-5 h-5 bg-[#f0dfd5] border-[DimGrey] border-[1px] border-t-0 '></div>
      </div>
      <div className='flex flex-col  h-full justify-center border-t-4 border-[#e4c3b2] border-b-4' >
        <div className='flex  h-full items-start' >
          <div className='flex bg-[#f0dfd5] border-[DimGrey] border-[1px] w-5 h-5 border-l-0'></div>
        </div>
        <div className='flex bg-[#f0dfd5] w-5 h-[25.7px] border-[DimGrey] border-[1px] border-l-0' ></div>
      </div>
      <div className='flex' >&nbsp;&nbsp;</div>
      <div onClick={() => addItem(ElemMainStol)} className={`flex   w-16   border-[DimGrey] border-[1px] justify-center items-center  ${searhFreeSeat(ElemMainStol) ? 'bg-[#DC143C]' : pickElem[ElemMainStol] ? 'bg-[#98FB98]' : ' bg-[#f0dfd5] hover:bg-[#98FB98]'}`}>{ElemMainStol}</div>
      <div className='flex' >&nbsp;&nbsp;</div>
      <div className='flex flex-col  h-full justify-center border-t-4 border-[#e4c3b2] border-b-4' >
        <div className='flex  h-full items-start' >
          <div className='flex bg-[#f0dfd5] border-[DimGrey] border-[1px] w-5 h-5 border-r-0'></div>
        </div>
        <div className='flex bg-[#f0dfd5] w-5 h-[25.7px] border-[DimGrey] border-[1px] border-r-0' ></div>
      </div>
      <div className='flex flex-col border-t-4 border-[#e4c3b2] border-r-4 border-b-4' >

        <div className='flex w-5 h-5 bg-[#f0dfd5] border-[DimGrey] border-[1px] '></div>
        <div className='flex w- h-5 bg-[#f0dfd5] border-[DimGrey] border-[1px] border-t-0'></div>
        <div className='flex w-5 h-5 bg-[#f0dfd5] border-[DimGrey] border-[1px] border-t-0'></div>
        <div className='flex w-5 h-5 bg-[#f0dfd5] border-[DimGrey] border-[1px] border-t-0'></div>
        <div className='flex w-5 h-5 bg-[#f0dfd5] border-[DimGrey] border-[1px] border-t-0 '></div>
      </div>
    </div>)
    return (elements)
  }
  function ElementMainBalcony(ElemMainBalcony: number): JSX.Element[] {

    const elemMainBalcony: JSX.Element[] = []
    elemMainBalcony.push(<div className='flex w-10/12 pl-2 border-l-4 border-b-black  flex-col ' >
      <div className='flex flex-row w-full justify-start border-4 border-b-0 border-[#e0c5b4]'>
        <div className='flex w-full h-5 bg-none border-[1px] border-black border-r-0'  ></div>
        <div className='flex w-full h-5 bg-none border-[1px] border-black border-r-0'  ></div>
        <div className='flex w-full h-5 bg-none border-[1px] border-black border-r-0'  ></div>
        <div className='flex w-full h-5 bg-none border-[1px] border-black border-r-0'  ></div>
        <div className='flex w-full h-5 bg-none border-[1px] border-black '  ></div>

      </div>
      <div className='flex flex-row w-full border-l-4 border-[#e0c5b4]'>
        <div className='flex basis-1/4 h-5 bg-none justify-start border-[1px] border-black border-t-0' ></div>
        <div className='flex  justify-end w-full border-r-4 border-[#e0c5b4]' >
          <div className='flex basis-[26%] h-5 bg-none border-[1px] border-black border-t-0'></div>
        </div>
      </div>
      <div className='flex pt-2' ></div>
      <div className='flex  justify-center'>
        <div onClick={() => addItem(ElemMainBalcony)} className={`flex bg-none border-[1px] border-black w-[75%] h-14 justify-center items-center  ${searhFreeSeat(ElemMainBalcony) ? 'bg-[#DC143C]' : pickElem[ElemMainBalcony] ? 'bg-[#98FB98]' : ' bg-[#f0dfd5] hover:bg-[#98FB98] '}`}>{ElemMainBalcony}</div>
      </div>
      <div className='flex pt-2' ></div>
      <div className='flex flex-row w-full border-l-4 border-[#e0c5b4]'>
        <div className='flex basis-1/4 h-5 bg-none justify-start border-[1px] border-black border-b-0' ></div>
        <div className='flex  justify-end w-full border-r-4 border-[#e0c5b4]' >
          <div className='flex basis-[26%] h-5 bg-none border-[1px] border-black border-b-0'></div>
        </div>
      </div>
      <div className='flex flex-row w-full justify-start border-4 border-t-0 border-[#e0c5b4]'>
        <div className='flex w-full h-5 bg-none border-[1px] border-black border-r-0'  ></div>
        <div className='flex w-full h-5 bg-none border-[1px] border-black border-r-0'  ></div>
        <div className='flex w-full h-5 bg-none border-[1px] border-black border-r-0'  ></div>
        <div className='flex w-full h-5 bg-none border-[1px] border-black border-r-0'  ></div>
        <div className='flex w-full h-5 bg-none border-[1px] border-black '  ></div>

      </div>
    </div>)
    return elemMainBalcony
  }
  function ElementBalcony(ElemBalcony: number): JSX.Element[] {

    const elementBalcony: JSX.Element[] = []
    elementBalcony.push(<div className='flex basis-10/12 justify-center h-full items-center bg-[#f0dfd5]  border-b-4 border-b-black flex-row gap-1'>
      <div className='flex w-5 rounded-lg  border-4 border-[#97867c] border-r-0 bg-[#e2c4ac]' > &nbsp;</div>
      <div onClick={() => addItem(ElemBalcony)} className={`flex w-10 h-10 justify-center items-center  border-[1px] border-black  ${searhFreeSeat(ElemBalcony) ? 'bg-[#DC143C]' : pickElem[ElemBalcony] ? 'bg-[#98FB98]' : ' bg-none hover:bg-[#98FB98] '}`} >{ElemBalcony}</div>
      <div className='flex w-5 rounded-lg border-4 border-[#97867c] border-l-0 bg-[#e2c4ac] ' > &nbsp;</div>
    </div>)
    return elementBalcony
  }
  function ElementCentreHole(ElemNumber: number): JSX.Element[] {

    const elementHole: JSX.Element[] = [];
    elementHole.push(<div className='flex w-full justify-center items-center flex-row gap-1' >
      <div className='flex bg-[#e2c3ae] border-[#b6a89f] border-4 border-r-0 w-5 h-5 rounded-lg'></div>
      <div className='flex flex-col gap-1 justify- items-center'>
        <div className='flex w-5 h-5 bg-[#e2c3ae] border-[#b6a89f] border-4 border-b-0 rounded-lg '></div>
        <div onClick={() => addItem(ElemNumber)} className={`flex w-10 h-10 border-[1px] border-black justify-center items-center  ${searhFreeSeat(ElemNumber) ? 'bg-[#DC143C]' : pickElem[ElemNumber] ? 'bg-[#98FB98]' : ' bg-[#f0dfd5] hover:bg-[#98FB98] '}`}>{ElemNumber}</div>
        <div className='flex w-5 h-5 bg-[#e2c3ae] border-[#b6a89f] border-4 border-t-0 rounded-lg '></div>
      </div>
      <div className='flex w-5 h-5 bg-[#e2c3ae] border-[#b6a89f] border-4 border-l-0 rounded-lg justify-center'></div>
    </div>)
    return elementHole
  }
  function ArrayCount() {
    let PickCount = 0;
    for (let i = 0; i <= pickElem.length; i++) {
      if (pickElem[i] === true)
        PickCount++
    }
    if (PickCount > 0)
      return false
    return true

  }
  function ResefStol(): JSX.Element[] {
    const ResefStolPDT: JSX.Element[] = [];
    for (let i = 0; i <= pickElem.length; i++) {
      if (pickElem[i] === true) {

        ResefStolPDT.push(
          <div className='flex'> Резерв стола № {i}</div>
        )
      }
    }
    return ResefStolPDT
  }

  function lastReserf() {
    const boostArray = []
    for (let i = 0; i <= pickElem.length; i++) {
      if (pickElem[i] === true)
        boostArray.push(i)

    }

    myState.setPickTables(boostArray)
    myState.setIsOpen(false)
    if (Basket.baskedItems.length !== 0) {
      myState.setRegistratonIsOpen(true)
    } else {
      myState.setOrderSurveyisOpen(true)
    }
  }
  return (
    <>

      <div className='flex w-full h-full  gap-4 p-5 pr-3' >

        <div className='absolute bg-[red] top-[50%] h-56  '> 000</div>
        <div className='flex flex-row  w-full  basis-full '>
          <div className='flex basis-full  flex-col gap-6' >
            {ElementBalcony(12)}
            {ElementMainStol(1)}
            <div className='flex min-h-[16.59%] justify-center '>

            </div>
            {ElementCentreHole(11)}
            {ElementMainStol(6)}

          </div>
          <div className='flex basis-full justify-center flex-col gap-6' >
            {ElementBalcony(13)}

            {ElementMainStol(2)}
            {ElementCentreHole(10)}

            {ElementCentreHole(9)}

            {ElementMainStol(5)}

          </div>
          <div className='flex basis-full justify-center flex-col gap-6 ' >
            {ElementBalcony(14)}

            {ElementMainStol(3)}

            {ElementCentreHole(7)}

            {ElementCentreHole(8)}

            {ElementMainStol(4)}
          </div>
          <div className='flex flex-col basis-full bg-[#f0dfd5] gap-2' >
            {ElementMainBalcony(15)}
            <div className='border-l-4 border-b-black pt-5'></div>
            {ElementMainBalcony(16)}
            <div className='flex basis-full items-start justify-center border-l-4  border-b-black text-[11px] ' >
              <div className='flex  '>
                <div className="grid grid-cols-2 gap-2 overflow-y-scroll max-h-[120px]">           {ResefStol()}</div>
              </div>
            </div>
            <div className='flex items-end w-full justify-center'>

              <button className={` px-4 py-2   rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${ArrayCount() ? 'pointer-events-none text-[#DCDCDC] bg-blue-400' : 'pointer-events-auto text-[#F8F8FF] bg-blue-500'}`} onClick={() => lastReserf()}>Зарезервировать</button>

            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default observer(ModalComponent)


