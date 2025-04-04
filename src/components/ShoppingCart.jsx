import React, { useContext, useState } from 'react';
import CartItem from './CartItem';
import { MealsContext } from '../context/MealsContext';

const ShoppingCart = ({ onChange_ShowCartMood }) => {
  const { mealsData, cartItems, increaseAmount, decreaseAmount, onClick_Complete } = useContext(MealsContext);

  const showCartItems = cartItems.map(item => {
    const meal = mealsData.find(val => val.idMeal === item.mealID);
    return meal && { mealID: item.mealID, amount: item.amount, mealName: meal.strMeal };
  });

  const totalCost = showCartItems.reduce((acc, curr) => {
    return parseInt(curr.mealID.slice(3, 5)) * curr.amount + acc;
  }, 0);

  const [completeMessage, setCompleteMessage] = useState("");
  const handle_Complete = () => {
    setCompleteMessage("Order is completed");
    setTimeout(() => { onClick_Complete(); }, 2000);
  };

  return (
    <div className=''>
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
        <div className=' rounded-lg p-4 bg-stone-200 sm:w-96 '>
          <div className='border-b-2 border-orange-900 text-stone-600'>

            {showCartItems.length > 0 ?
              showCartItems.map((item, i) => <CartItem key={i} mealID={item.mealID} mealName={item.mealName} amount={item.amount} increaseAmount={increaseAmount} decreaseAmount={decreaseAmount} />)
              : <div className='text-lg text-center text-orange-800 font-extrabold py-10'>Shopping cart is empty !</div>
            }

          </div>
          <div className='flex justify-between items-center text-xs md:text-xl md:font-bold my-5'>
            <div>Total Cost</div>
            <div>${totalCost}</div>
          </div>
          <div className=' text-green-600 font-bold'>{completeMessage}</div>
          <div className='text-end'>
            <button onClick={onChange_ShowCartMood} className='px-3 text-orange-700 bg-transparent rounded-2xl capitalize border border-orange-700 cursor-pointer hover:bg-orange-700 hover:text-stone-200 duration-500'>close</button>

            {cartItems.length > 0 &&
              <button onClick={handle_Complete} className='px-3 ml-2 text-stone-200 bg-orange-700 rounded-2xl capitalize cursor-pointer hover:bg-transparent hover:text-orange-700 hover:border hover:border-orange-700 duration-500'>order</button>
            }
          </div>

        </div>
      </div>
      <div className='pop-overflow opacity-70 bg-zinc-700 h-screen w-full fixed top-0 left-0 z-30'></div>
    </div>
  );
};

export default ShoppingCart;
