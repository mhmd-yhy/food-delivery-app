import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';

const Header = ({ onChange_ShowCartMood }) => {
  return (
    <div className='bg-orange-700 text-stone-300 py-3 z-50'>
      <div className='container m-auto xl:px-36 md:flex justify-between items-center '>
        <div className='text-3xl font-extrabold capitalize text-center'>foodDelivery</div>
        <div onClick={onChange_ShowCartMood} className='bg-orange-950 py-2 px-4 rounded-2xl cursor-pointer flex justify-center items-center gap-3 text-lg font-bold m-auto md:m-0 my-2 w-60 hover:bg-orange-900 duration-500'>
          <div className="icon text-2xl"><TiShoppingCart /></div>
          <div className='capitalize'>Your Cart</div>
          <div className='bg-orange-700 rounded-3xl px-3'>1</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
