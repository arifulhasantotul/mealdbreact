import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import {
   Avatar,
   Card,
   CardContent,
   CardHeader,
   CardMedia,
   IconButton,
   Rating,
   Skeleton,
   Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import PropTypes from "prop-types";
import React from "react";

const Meal = (props) => {
   const { loading = false } = props;
   let { strMeal, strCategory, strMealThumb, strTags, strInstructions } =
      props.meal;
   return (
      <div>
         <Card
            sx={{
               width: "95%",
               bgcolor: grey[200],
               margin: "0 auto",
            }}
            style={{ height: "100%" }}
         >
            <CardHeader
               avatar={
                  loading ? (
                     <Skeleton
                        animation="wave"
                        variant="circular"
                        width={40}
                        height={40}
                     />
                  ) : (
                     <Avatar alt="meal thumbnail" src={strMealThumb} />
                  )
               }
               action={
                  loading ? null : (
                     <IconButton aria-label="settings">
                        <MoreVertIcon />
                     </IconButton>
                  )
               }
               title={
                  loading ? (
                     <Skeleton
                        animation="wave"
                        height={10}
                        width="80%"
                        style={{ marginBottom: 6 }}
                     />
                  ) : (
                     `${strMeal.slice(0, 30)}`
                  )
               }
               subheader={
                  loading ? (
                     <Skeleton animation="wave" height={10} width="40%" />
                  ) : (
                     `${strCategory}`
                  )
               }
            />
            {loading ? (
               <Skeleton
                  sx={{ height: 190 }}
                  animation="wave"
                  variant="rectangular"
               />
            ) : (
               <CardMedia
                  component="img"
                  height="140"
                  image={strMealThumb}
                  alt={strMeal}
               />
            )}

            <CardContent>
               {loading ? (
                  <React.Fragment>
                     <Skeleton
                        animation="wave"
                        height={10}
                        style={{ marginBottom: 6 }}
                     />
                     <Skeleton animation="wave" height={10} width="80%" />
                  </React.Fragment>
               ) : (
                  <Typography
                     variant="body2"
                     color="text.secondary"
                     component="p"
                  >
                     {strInstructions.slice(0, 130)}
                     <br />
                     Tags:
                     {(strTags = strTags ? strTags.slice(0, 10) : "Not added")}
                     <br />
                     <Rating
                        sx={{ m: -0.5 }}
                        name="half-rating-read"
                        value={4.4}
                        precision={0.1}
                        readOnly
                     />
                     <br />
                     <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                     </IconButton>
                     <IconButton aria-label="share">
                        <ShareIcon />
                     </IconButton>
                  </Typography>
               )}
            </CardContent>
         </Card>
      </div>
   );
};
Meal.propTypes = {
   loading: PropTypes.bool,
};

export default Meal;
