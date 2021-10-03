import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Meals.css";

const Meals = () => {
   const [inputText, setInputText] = useState("");
   const [meals, setMeals] = useState([]);
   useEffect(() => {
      let url;
      if (!inputText) {
         url = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`;
      } else {
         url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
      }
      fetch(url)
         .then((res) => res.json())
         .then((data) => setMeals(data.meals));
   }, [inputText]);

   const handleSearch = (e) => {
      const searchText = e.target.value;
      setInputText(searchText);
   };

   return (
      <div className="main">
         <div
            className="search_field"
            style={{ textAlign: "center", marginTop: "10px" }}
         >
            <TextField
               onChange={handleSearch}
               sx={{ width: "75%" }}
               id="outlined-basic"
               label="Search meal"
               variant="outlined"
            />
         </div>
         <div className="meal_container">
            <Box sx={{ flexGrow: 1 }}>
               <Grid
                  container
                  rowSpacing={2}
                  columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 12 }}
               >
                  {meals.map((meal) => (
                     <Grid
                        item
                        xs={4}
                        sm={4}
                        md={4}
                        lg={4}
                        xl={3}
                        key={meal.idMeal}
                     >
                        <Meal meal={meal}></Meal>
                     </Grid>
                  ))}
               </Grid>
            </Box>
            {/* data  */}
         </div>
      </div>
   );
};

export default Meals;
