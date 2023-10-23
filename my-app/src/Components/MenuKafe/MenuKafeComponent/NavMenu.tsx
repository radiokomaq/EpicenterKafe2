import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId) as HTMLElement;
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };
  return (
    <div className='flex flex-row justify-center gap-10 ' ref={containerRef}>
      <Link to="/menu#section1" className='flex text-base basis-1/4 justify-end hover:text-[22px] hover:text-[#808080]'> Кальян</Link>
      <Link to="/menu#section2" className='flex justify-center text-base basis-1/4 hover:text-[#808080] hover:text-[22px]'> Закуски</Link>
      <Link to="/menu#section3" className='flex justify-center text-base basis-1/4 hover:text-[#808080] hover:text-[22px]'> Дессерты</Link>
      <Link to="/menu#section4" className='flex justify-start text-base basis-1/4 hover:text-[#808080] hover:text-[22px]' > Кофе</Link>

    </div>
  );
};

export default NavMenu;



