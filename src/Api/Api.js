const fetchMeals = async (url) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/${url}`);
  const data = await response.json();
  return data.meals?.slice(0, 5);
};
export default fetchMeals;