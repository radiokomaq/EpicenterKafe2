
import React, { FC, useRef, useState } from 'react';
import Hookah from '../../../photos/kalain.png'
import Koffe from '../../../photos/Koffe.png'
import Menu from '../../../photos/1046849.png'
import Snacks from '../../../photos/salat.png'
import { Link } from 'react-router-dom';
import Basket from '../../../Store/Basket';
import BasketPhoto from '../../../photos/korzina.png'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'


const HeaderMenu: FC = () => {

    const [isHover, setIsHover] = useState<boolean>(false)
    const [contaktDrop, setContaktDrop] = useState<Boolean>(false)
    const [isHoverHookah, setIsHoverHookah] = useState<boolean>(false)
    const [isHoverKofe, setIsHoverKofe] = useState<boolean>(false)
    const [isHoverSnacks, setIsHoverSnacks] = useState<boolean>(false)

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);

    };
    const handleItemsMouseLeave = (itemID: number) => {
        if (itemID === 1) {
            setIsHoverHookah(!isHoverHookah)
        } else if (itemID === 2) {
            setIsHoverKofe(!isHoverKofe)
        } else {
            setIsHoverSnacks(!isHoverSnacks)
        }
    }
    const handleItemMouseEnter = (itemID: number) => {
        if (itemID === 1) {
            setIsHoverHookah(!isHoverHookah)
        } else if (itemID === 2) {
            setIsHoverKofe(!isHoverKofe)
        } else {
            setIsHoverSnacks(!isHoverSnacks)
        }

    }

    const HandleKontactDrop = () => {
        setContaktDrop(!contaktDrop)
    }

    const containerRef = useRef<HTMLDivElement>(null);




    return (
        <div className="w-full h-min flex flex-row  relative flex-nowrap text-base">
            <div className='flex basis-full hover:text-[#005658]'> <Link to="/"> Logo</Link></div>
            <div className='flex basis-full hover:text-[#005658]'  ><Link to="/"> Главная</Link></div>
            <div
                className='flex basis-full '
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            > {isHover ? <div className=' h-[100%] w-[25%] absolute '>
                <span className='flex justify-start '>&#9650;<span className='hover:text-[#005658]'>&nbsp;Меню</span></span>
                {/* 

                <b className='absolute right-full top-0 '>&#9650;</b> */}
                {/* <div className='flex flex-col justify-center bg-black'>
                    <h1 className='flex '>МЕНЮ </h1> */}
                <div className='flex flex-row   gap-2 py-4  bg-black bg-opacity-75 rounded-md'>
                    <div className='flex basis-full justify-center items-center'>
                        {isHoverHookah ? <img src={Hookah} className='h-[130%] w-full' /> : isHoverKofe ? <img src={Koffe} className='h-full w-[81.5%]' /> : isHoverSnacks ? <img src={Snacks} className='h-[100%] w-[100%]' /> : <img src={Menu} className='h-full w-full' />}
                    </div>
                    <div className='flex flex-col basis-full ' ref={containerRef}>

                        <div
                            className='flex justify-center border-b-2 border-opacity-0 border-dotted py-2 text-base'
                            onMouseEnter={() => handleItemMouseEnter(1)}
                            onMouseLeave={() => handleItemsMouseLeave(1)}
                        >
                            <Link to="/menu#section1"> Кальян</Link></div>
                        <div className='flex justify-center border-b-2 border-opacity-25 border-dotted py-2 text-base'
                            onMouseEnter={() => handleItemMouseEnter(2)}
                            onMouseLeave={() => handleItemsMouseLeave(2)}
                        >
                            <Link to="/menu#section4"> Кофе</Link>  </div>
                        <div className='flex justify-center border-b-2 border-opacity-25 border-dotted py-2 text-base'
                            onMouseEnter={() => handleItemMouseEnter(3)}
                            onMouseLeave={() => handleItemsMouseLeave(3)}
                        > <Link to="/menu#section2" >Закуски</Link></div>
                        <div className='flex justify-center border-b-2 border-opacity-25 border-dotted py-2 text-base'
                            onMouseEnter={() => handleItemMouseEnter(3)}
                            onMouseLeave={() => handleItemsMouseLeave(3)}
                        > <Link to="/menu#section3" className='h-full w-full'>Дессерты</Link></div>
                    </div>

                </div>
            </div>
                : <span className='hover:text-[#005658]'>&#9660;&nbsp;Меню</span>}</div>
            <div
                className='flex basis-full '
                onClick={() => HandleKontactDrop()}
            > {contaktDrop ?
                <div className=' h-[100%]  absolute flex-col  gap-10'>
                    <span className='flex justify-start relative hover:text-[#005658]'>&nbsp;Контакты</span>
                    <span className='flex relative justify-center pt-[4%] text-[blue]' > <FaTelegramPlane/></span>
                    <span className='flex relative justify-center pt-[4%] text-[red]' > <AiFillInstagram/></span>
                    <span className='flex relative justify-center pt-[4%] text-[#000080]' > <BsFacebook/></span>
                </div> :
                <span className='flex justify-start hover:text-[#005658] '>&nbsp;Контакты</span>}
            </div>
            <div onClick={() => Basket.setBasketIsOpen(true)} className='flex basis-full '>
                <img src={BasketPhoto} alt='Basket' className='h-7 w-8 ' />
              
            </div>
        </div>
    );
}

export default HeaderMenu;


