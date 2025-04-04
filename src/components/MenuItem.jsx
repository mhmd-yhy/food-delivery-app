import React, { useState } from 'react';

const MenuItem = ({ mealID, mealName, mealDesc, mealPrice, onClick_AddToCart }) => {
  const [amount, setAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const onChange_Amount = (e) => { setAmount(parseInt(e.target.value)); };
  const handel_ClickAdd = (e) => {
    if (amount !== 0) {
      onClick_AddToCart({ mealID, amount });
      setErrorMessage("");
      setAmount(0);
    }
    else { setErrorMessage("Amount must be greater than or equal to 1"); }
  };

  return (
    <div className='border-b border-zinc-400 text-stone-600 mb-2'>
      <div className='flex justify-between items-center my-1 '>
        <div className='capitalize text-lg font-bold'>{mealName}</div>
        <div>
          <span className='capitalize font-bold mx-1'>amount:</span>
          <input value={amount} onChange={onChange_Amount} type="number" min={0} max={10} className='w-12 outline-none pl-1 rounded-md' />
        </div>
      </div>
      <div className='flex justify-between items-center my-2'>
        <div>{mealDesc}</div>
        <button onClick={handel_ClickAdd} className='py-1 px-3 rounded-3xl font-bold bg-orange-700 text-stone-200 hover:bg-orange-950 duration-500'>+ Add</button>
      </div>
      <div className='flex justify-between items-center my-1'>
        <div>${mealPrice}</div>
        <div className='text-xs text-red-600 font-extrabold'>{errorMessage}</div>
      </div>
    </div>
  );
};

export default MenuItem;
