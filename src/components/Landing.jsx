import React from 'react';
import background from "../assets/images/background.jpg";
const Landing = () => {
  return (
    <div className='overflow-hidden relative'>
      <img src={background} alt="" className='min-h-96 md:-rotate-6 md:-translate-y-48 md:-translate-x-8 w-full' style={{ minWidth: "130%" }} />

      <div className="desc bg-zinc-700 text-stone-400 rounded-lg py-4 px-4 shadow-xl shadow-zinc-800 text-center absolute top-20 md:top-1/3 left-1/2 -translate-x-1/2">

        <h1 className='text-stone-300 capitalize text-base md:text-xl lg:text-2xl xl:text-3xl font-extrabold my-3 xl:my-6'>Delicious Food, Delivered To You</h1>

        <p className='text-xs md:text-sm my-3 xl:my-6'>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
        <p className='text-xs md:text-sm my-3 xl:my-6'>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
      </div>
    </div>
  );
};

export default Landing;
