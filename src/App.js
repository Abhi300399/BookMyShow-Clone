import DefaultHoc from "./HOC/default.hoc";
import MovieHOC from "./HOC/Movie.HOC";



// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//components
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/plays.page";

import { Route } from "react-router-dom";





function App() {
  return (
    <>
    
    <DefaultHoc path="/" exact component={HomePage}/>
    <MovieHOC path="/movie/:id" exact  component={Movie}/>
    <DefaultHoc path="/plays" exact component={Plays}/>

    
   </>
  );
}

export default App;
