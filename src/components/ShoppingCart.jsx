import React from 'react';

const ShoppingCart = ({ onChange_ShowCartMood }) => {
  return (
    <div className=''>
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
        <div className=' rounded-lg p-4 bg-stone-200 sm:w-96 '>
          <div className='border-b-2 border-orange-900 text-stone-600'>

            <div className='border-b border-zinc-400'>
              <div className='flex justify-between items-center my-1 '>
                <div className='capitalize text-lg font-bold'>sushi</div>
                <div className='flex gap-2'>
                  <button className='px-3 text-orange-700 rounded-lg border border-orange-700 hover:bg-orange-700 hover:text-stone-200 duration-500'>+</button>
                  <button className='px-3 text-orange-700 rounded-lg border border-orange-700 hover:bg-orange-700 hover:text-stone-200 duration-500'>-</button>
                </div>
              </div>

              <div className='flex gap-1 md:gap-5 items-center my-1 text-sm'>
                <div className='text-orange-700'>$22.99</div>
                <span className='px-3 text-xs text-zinc-400 rounded-lg border border-zinc-400'>x 5</span>
              </div>
            </div>
            <div className='border-b border-zinc-400'>
              <div className='flex justify-between items-center my-1 '>
                <div className='capitalize text-lg font-bold'>sushi</div>
                <div className='flex gap-2'>
                  <button className='px-3 text-orange-700 rounded-lg border border-orange-700 hover:bg-orange-700 hover:text-stone-200 duration-500'>+</button>
                  <button className='px-3 text-orange-700 rounded-lg border border-orange-700 hover:bg-orange-700 hover:text-stone-200 duration-500'>-</button>
                </div>
              </div>

              <div className='flex gap-1 md:gap-5 items-center my-1 text-sm'>
                <div className='text-orange-700'>$22.99</div>
                <span className='px-3 text-xs text-zinc-400 rounded-lg border border-zinc-400'>x 5</span>
              </div>
            </div>
            <div className='border-b border-zinc-400'>
              <div className='flex justify-between items-center my-1 '>
                <div className='capitalize text-lg font-bold'>sushi</div>
                <div className='flex gap-2'>
                  <button className='px-3 text-orange-700 rounded-lg border border-orange-700 hover:bg-orange-700 hover:text-stone-200 duration-500'>+</button>
                  <button className='px-3 text-orange-700 rounded-lg border border-orange-700 hover:bg-orange-700 hover:text-stone-200 duration-500'>-</button>
                </div>
              </div>

              <div className='flex gap-1 md:gap-5 items-center my-1 text-sm'>
                <div className='text-orange-700'>$22.99</div>
                <span className='px-3 text-xs text-zinc-400 rounded-lg border border-zinc-400'>x 5</span>
              </div>
            </div>

          </div>

          <div className='flex justify-between items-center text-xs md:text-xl md:font-bold my-5'>
            <div>Total Amount</div>
            <div>$114.95</div>
          </div>

          <div className='text-end'>
            <button onClick={onChange_ShowCartMood} className='px-3 text-orange-700 bg-transparent rounded-2xl capitalize border border-orange-700 cursor-pointer hover:bg-orange-700 hover:text-stone-200 duration-500'>close</button>
            <button className='px-3 ml-2 text-stone-200 bg-orange-700 rounded-2xl capitalize cursor-pointer hover:bg-transparent hover:text-orange-700 hover:border hover:border-orange-700 duration-500'>order</button>
          </div>

        </div>
      </div>
      <div className='pop-overflow opacity-70 bg-zinc-700 h-screen w-full fixed top-0 left-0 z-30'></div>
    </div>
  );
};

export default ShoppingCart;
