import React from "react";
import banner from "../../assets/banner-main.png";
import bannerShadow from "../../assets/bg-shadow.png";

const Banner = () => {
  return (
    
    <div className="relative flex justify-center  items-center mt-3 h-64 md:h-full">
        <img src={bannerShadow} alt=""  className="object-cover w-full h-full bg-black md:rounded-2xl"/>
        <img src={banner} alt="" className="absolute z-10 top-1/12 w-[90px] md:w-[150px] lg:w-auto"/>
        <h3 className="absolute z-10 top-6/12 font-bold text-[14px] md:text-3xl lg:text-4xl text-white ">Assemble Your Ultimate Dream 11 Cricket Team</h3>
        <h3 className="absolute z-10 top-7/12 font-medium text-[12px] md:text-xl lg:text-2xl text-white/70 mt-2">Beyond Boundaries Beyond Limits</h3>
        <div className="absolute z-10 top-9/12 bg-black border border-[#E7FE29] rounded-2xl p-1 lg:p-2">
            <button className="text-sm lg:text-lg md:font-bold   bg-[#E7FE29] py-2 px-3 lg:py-3 lg:px-4 rounded-2xl">Claim Free Credit</button>
        </div>
    </div>
);
    
  
};

export default Banner;

//  <div className='relative w-full h-64  '>
//             <img src={bannerShadow} alt="" className='  bg-black ' />
//             <div className='absolute left-2/4 top-0  flex justify-center items-center'>
//                 <img src={banner} alt="" className= 'object-cover' />
//             </div>

//         </div>







{/* <div className="relative w-full h-64 ">
      
      <div className="flex justify-center items-center ">
        
        <img src={banner} alt="" className=" object-cover mt-15 z-10" />
      </div>
      <img
        src={bannerShadow}
        alt=""
        className="absolute left-0 top-0 bg-black "
      />
    </div> */}