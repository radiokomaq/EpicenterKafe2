// import React from 'react'
// import myImage from '../../../photos/ModelHeader.png'

// const StaticKafe = () => {
//     return (
//         <div className='flex flex-col  gap-3'>
//             <div className='flex flex-row gap-3 justify-center content-center  '>
//                 <div className='basis-1/2 flex-col justify-center   bg-white rounded-lg h-32 '>
//                     <div className='flex justify-center items-center '> 99%</div>
//                     <div className='flex justify-center items-center'>довольных клиентов</div>
//                 </div>
//                 <div className='basis-1/4 bg-white rounded-lg h-32'><img src={myImage} className='w-14 h-14'/></div>
//             </div>
//             <div className='flex flex-row gap-3 justify-center '>
//                 <div className='basis-1/4 bg-white rounded-lg '>foto</div>
//                 <div className='basis-1/2 flex-row bg-white rounded-lg py-14'> 
//                 <div className='flex justify-center'>24/7</div>
//                 <div className='flex justify-center'>мы работаем круглосуточно</div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default StaticKafe



import React from 'react';
import myImage1 from '../../../photos/FotoModel3.png';
import myImage2 from '../../../photos/FotoModel6.png';

const StaticKafe = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-row gap-3 justify-center  content-center h-64'>
        <div className='basis-full flex flex-col justify-center items-center bg-[#e3e3ff] rounded-lg '>
          <div className='flex justify-center text-xl'>99%</div>
          <div className='flex justify-center text-base'>довольных клиентов</div>
        </div>
        <div className='basis-6/12 bg-[#e3e3ff] rounded-lg  flex items-center justify-center'>
          <img src={myImage2} className='w-28 h-44' alt='My Image' />
        </div>
      </div>
      <div className='flex flex-row gap-3 justify-center h-64'>
        <div className='basis-6/12 bg-[#e3e3ff] rounded-lg flex items-center justify-center'>          <img src={myImage1} className='w-28 h-44' alt='My Image' /></div>
        <div className='flex basis-full flex-col bg-[#e3e3ff] rounded-lg justify-center items-center'>
          <div className='flex text-xl '>24/7</div>
          <div className='flex   text-base'>мы работаем круглосуточно</div>
        </div>
      </div>
    </div>
  );
};

export default StaticKafe;