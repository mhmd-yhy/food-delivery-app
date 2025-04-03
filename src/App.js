import { useState } from "react";
import FoodMenu from "./components/FoodMenu";
import Header from "./components/Header";
import Landing from "./components/Landing";
import ShoppingCart from "./components/ShoppingCart";

export default function App() {
  const [showCart, setShowCart] = useState(false);
  const onClick_Close = () => { setShowCart(false); };
  const onClick_ShowCart = () => { setShowCart(true); };
  const onChange_ShowCartMood = () => { setShowCart(!showCart); };
  return (
    <div className="bg-zinc-700 relative" style={{ height: "100vh" }}>
      <Header onChange_ShowCartMood={onChange_ShowCartMood} />
      <Landing />
      <div>
        <FoodMenu />
      </div>
      {
        showCart && <ShoppingCart onChange_ShowCartMood={onChange_ShowCartMood} />
      }
    </div>
  );
}
