import { useEffect, useState } from "react";
import fetchMeals from "../Api/Api";
const GetAll_MenuItemsHook = () => {
  const [mealsData, setMealsData] = useState({});

  useEffect(() => {
    const run = async () => {
      setMealsData(await fetchMeals("search.php?s="));
    }; run();
  }, []);

  return [mealsData];
};

export default GetAll_MenuItemsHook;
