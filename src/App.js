import { useState } from "react";
import FoodMenu from "./components/FoodMenu";
import Header from "./components/Header";
import Landing from "./components/Landing";
import ShoppingCart from "./components/ShoppingCart";
import GetAll_MenuItemsHook from "./customHooks/GetAll_MenuItemsHook";
import { MealsContext } from "./context/MealsContext";
import AddTo_CardItemsHook from "./customHooks/AddTo_CardItemsHook";

export default function App() {
  const [showCart, setShowCart] = useState(false);
  const onChange_ShowCartMood = () => { setShowCart(!showCart); };
  const [mealsData] = GetAll_MenuItemsHook();
  const [cartItems, onClick_AddToCart, increaseAmount, decreaseAmount, clearCartItems] = AddTo_CardItemsHook();
  const onClick_Complete = () => {
    clearCartItems();
    setShowCart(false);
  };

  return (
    <MealsContext.Provider value={{ mealsData, onClick_AddToCart, cartItems, increaseAmount, decreaseAmount, onClick_Complete }}>
      <div className="bg-zinc-700 relative" style={{ minHeight: "100vh" }}>
        <Header onChange_ShowCartMood={onChange_ShowCartMood} />
        <Landing />
        <FoodMenu />
        {
          showCart && <ShoppingCart onChange_ShowCartMood={onChange_ShowCartMood} />
        }
      </div>
    </MealsContext.Provider>
  );
}
