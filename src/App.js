import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Meals from "./components/Meals/Meals";
import NotFound from "./components/NotFound/NotFound";

function App() {
   return (
      <Router>
         <Header></Header>

         {/* switch start  */}
         <Switch>
            {/* route 1  */}
            <Route exact path="/">
               <Home></Home>
            </Route>

            {/* route 2  */}
            <Route path="/home">
               <Home></Home>
            </Route>
            {/* route 3  */}
            <Route path="/meals">
               <Meals></Meals>
            </Route>

            {/* route 4  */}
            <Route path="/about">
               <About></About>
            </Route>

            {/* route 5  */}
            <Route path="/about">
               <About></About>
            </Route>

            {/* route 6  */}
            <Route path="*">
               <NotFound></NotFound>
            </Route>

            {/* route end  */}
         </Switch>
         {/* switch end  */}
      </Router>
   );
}

export default App;
