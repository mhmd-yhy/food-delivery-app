import React from 'react';

const FoodMenu = () => {
  return (
    <div className='container m-auto xl:px-64'>
      <div className=' rounded-lg p-4 bg-stone-200'>

        <div className='border-b border-zinc-400 text-stone-600 mb-2'>
          <div className='flex justify-between items-center my-1 '>
            <div className='capitalize text-lg font-bold'>sushi</div>
            <div><span className='capitalize font-bold mx-1'>amount:</span> <input type="number" min={0} max={10} className='w-12 outline-none pl-1 rounded-md' name="" /></div>
          </div>
          <div className='flex justify-between items-center my-2'>
            <div>Finest fish and veggies</div>
            <div className='py-1 px-3 rounded-3xl font-bold bg-orange-700 text-stone-200 hover:bg-orange-950 duration-500'><button>+ Add</button></div>
          </div>
          <div className='my-1'>
            <span>$22.99</span>
          </div>
        </div>


      </div>
    </div>
  );
};

export default FoodMenu;
