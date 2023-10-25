import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import NavMenu from './MenuKafeComponent/NavMenu';
import MenuKafeItems from './MenuKafeComponent/MenuKafeItems';
import axios from 'axios';
import MenuStore from '../../Store/MenuStore';
import { observer } from 'mobx-react-lite'
import { useLocation } from 'react-router-dom';


const MenuKafe: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/getMenuKafe');
        MenuStore.setMenuKoffe(response.data.menuCoffee);
        MenuStore.setMenuHookah(response.data.menuHookah);
        MenuStore.setMenuSnacks(response.data.menuSnacks);
        MenuStore.setMenuDessert(response.data.menuDessert);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const targetId = location.hash.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setTimeout(() => {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }, 1);
    }
  }, [isLoading, location]);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (

    <div className='w-full h-full relative flex flex-col px-[10%] gap-10'>
      <NavMenu />
      <div className='flex flex-col gap-8 h-full w-full'>
        <div className='flex text-lg'>kalain</div>
        <section id="section1" className='flex flex-row flex-wrap gap-10 justify-center items-center'>
          {MenuStore.menuHookah.map(item => (
            <MenuKafeItems key={item.id} name={item.name_hookah} description={item.description_hookah} photo={item.photo} price={item.price} />
          ))}

        </section>
      </div>
      <div className='flex flex-col gap-8 h-full w-full'>
        <div className='flex text-lg'>Закуски</div>
        <section id="section2" className='flex flex-row flex-wrap gap-10 justify-center items-center'>
          {MenuStore.menuSnacks.map(item => (
            <MenuKafeItems key={item.id} name={item.name_snacks} description={item.description_snacks} photo={item.photo} price={item.price} />
          ))}

        </section>
      </div>
      <div className='flex flex-col gap-8 h-full w-full'>
        <div className='flex text-lg'>Дессерты</div>
        <section id="section3" className='flex flex-row flex-wrap gap-10 justify-center items-center'>


          {MenuStore.menuDessert.map(item => (
            <MenuKafeItems key={item.id} name={item.name_dessert} description={item.description_dessert} photo={item.photo} price={item.price} />
          ))}

        </section>
      </div>
      <div className='flex flex-col gap-8 h-full w-full'>
        <div className='flex text-lg'>Коффе</div>
        <section id="section4" className='flex flex-row flex-wrap gap-10 justify-center items-center'>


          {MenuStore.menuKoffe.map(item => (
            <MenuKafeItems key={item.id} name={item.name_coffe} description={item.volume} photo={item.photo} price={item.price} />
          ))}

        </section>
      </div>

    </div>
  );
};

export default observer(MenuKafe);



