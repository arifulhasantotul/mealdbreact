import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Meals.css";

const Meals = () => {
   const [meals, setMeals] = useState([]);
   useEffect(() => {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => setMeals(data.meals));
   }, []);

   return (
      <div className="meal_container">
         <h3>Display Meal Items: {meals.length}</h3>

         {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
         ))}
      </div>
   );
};

export default Meals;
