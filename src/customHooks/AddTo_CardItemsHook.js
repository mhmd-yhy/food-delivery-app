import { useState } from 'react';

const AddTo_CardItemsHook = () => {
  const [cartItems, setCartItems] = useState([]);

  const onClick_AddToCart = (item) => {
    setCartItems((curr) => {
      if (!curr.find(val => val.mealID === item.mealID))
        return [...cartItems, item];
      else
        return curr.map(val => val.mealID === item.mealID ? { ...val, amount: val.amount + item.amount } : val);
    });
  };

  const increaseAmount = (itemID) => {
    setCartItems((curr) => {
      if (curr.find(val => val.mealID === itemID))
        return curr.map(val => val.mealID === itemID ? { ...val, amount: val.amount + 1 } : val);
    });
  };

  const decreaseAmount = (itemID) => {
    setCartItems((curr) => {
      if (curr.find(val => val.mealID === itemID).amount === 1)
        return curr.filter(val => val.mealID !== itemID);
      else return curr.map(val => val.mealID === itemID ? { ...val, amount: val.amount - 1 } : val);
    });
  };

  const clearCartItems = () => { setCartItems([]); };

  return [cartItems, onClick_AddToCart, increaseAmount, decreaseAmount, clearCartItems];
};

export default AddTo_CardItemsHook;
