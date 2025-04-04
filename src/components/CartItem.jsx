import React from 'react';

const CartItem = ({ mealID, mealName, amount, increaseAmount, decreaseAmount }) => {
  return (
    <div className='border-b border-zinc-400'>

      <div className='flex justify-between items-center my-1 '>
        <div className='capitalize text-lg font-bold'>{mealName}</div>
        <div className='flex gap-2'>
          <button onClick={() => increaseAmount(mealID)} className='px-3 text-orange-700 rounded-lg border border-orange-700 hover:bg-orange-700 hover:text-stone-200 duration-500'>+</button>
          <button onClick={() => decreaseAmount(mealID)} className='px-3 text-orange-700 rounded-lg border border-orange-700 hover:bg-orange-700 hover:text-stone-200 duration-500'>-</button>
        </div>
      </div>

      <div className='flex gap-1 md:gap-5 items-center my-1 text-sm'>
        <div className='text-orange-700'>${mealID.slice(3, 5)}</div>
        <span className='px-3 text-xs text-zinc-400 rounded-lg border border-zinc-400'>x {amount}</span>
      </div>
    </div>
  );
};

export default CartItem;
