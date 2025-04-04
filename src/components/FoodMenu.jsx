import React, { useContext } from 'react';
import MenuItem from './MenuItem';
import { MealsContext } from '../context/MealsContext';

const FoodMenu = () => {
  const { mealsData, onClick_AddToCart } = useContext(MealsContext);
  return (
    <div className='container m-auto xl:px-64 pb-10 pt-10 md:pt-0'>
      <div className=' rounded-lg p-4 bg-stone-200'>

        {mealsData.length > 0 && mealsData.map((item, i) =>
          <MenuItem key={i} mealID={item.idMeal} mealName={item.strMeal} mealDesc={item.strIngredient1 + " " + item.strIngredient2} mealPrice={item.idMeal.slice(3, 5)} onClick_AddToCart={onClick_AddToCart} />)
        }

      </div>
    </div>
  );
};

export default FoodMenu;
