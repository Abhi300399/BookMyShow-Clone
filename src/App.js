import axios from "axios";

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

//axios default settings
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;


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
