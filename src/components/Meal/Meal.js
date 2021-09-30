import React from "react";

const Meal = (props) => {
   const { strMeal, strCategory, strMealThumb, strTags } = props.meal;
   return (
      <div>
         <img src={strMealThumb} alt="" />

         <div className="meal_detail">
            <h3>Name: {strMeal}</h3>
            <h4>Category: {strCategory}</h4>
            <h5>Tags: {strTags}</h5>
         </div>
      </div>
   );
};

export default Meal;
