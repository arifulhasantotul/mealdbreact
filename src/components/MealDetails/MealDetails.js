import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const MealDetails = () => {
   const [meal, setMeal] = useState({});
   const { mealId } = useParams();
   useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
         .then((res) => res.json())
         .then((data) => setMeal(data.meals[0]));
   }, [mealId]);

   return (
      <div
         style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "2rem 12%",
            border: "1px solid goldenrod",
            borderRadius: "10px",
            overflow: "hidden",
            background: "gray",
            color: "#fff",
         }}
      >
         <img style={{ width: "400px" }} src={meal.strMealThumb} alt="" />
         <div style={{ margin: "0 4%" }}>
            <h3>{meal.strMeal}</h3>
            <small>{meal.strCategory}</small>
            <p>{meal.strInstructions}</p>
         </div>
      </div>
   );
};

export default MealDetails;
