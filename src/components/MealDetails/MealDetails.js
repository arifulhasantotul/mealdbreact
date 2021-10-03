import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const MealDetails = () => {
   const [meal, setMeal] = useState({});
   const { mealId } = useParams();
   const history = useHistory();
   useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
         .then((res) => res.json())
         .then((data) => setMeal(data.meals[0]));
   }, [mealId]);

   const handleBack = () => {
      history.push("/meals");
   };

   return (
      <>
         <div
            style={{
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               margin: "2rem 12%",
               border: "1px solid goldenrod",
               borderRadius: "15px",
               overflow: "hidden",
               background: "gray",
               color: "#fff",
            }}
         >
            <img style={{ width: "400px" }} src={meal.strMealThumb} alt="" />
            <div style={{ margin: "0 4%" }}>
               <h3>{meal.strMeal}</h3>
               <small>{meal.strCategory}</small>
               <p>{meal.strInstructions?.slice(0, 1230)}</p>
            </div>
         </div>

         <Button
            style={{ margin: " 0 12%" }}
            onClick={handleBack}
            variant="outlined"
         >
            Go back
         </Button>
      </>
   );
};

export default MealDetails;
