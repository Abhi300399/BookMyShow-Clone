import React,{useEffect,useContext} from 'react';
import { useParams } from 'react-router';

//context
import { MovieContext } from '../context/movie.context';


//Components
import MovieNavbar from '../components/Navbar/movieNavbar.component';
import axios from 'axios';

 const MovieLayout = (props) => {
        const {id}=useParams();
        const {movie,setMovie}=useContext(MovieContext);

        useEffect(() => {
            
            const requestMovie= async () => {
                const getMovie=await axios.get(`/movie/${id}`);
                setMovie(getMovie.data)
            }
            requestMovie();
        }, []);

    return (
        <>
           <MovieNavbar/>
            {props.children} 
        </>
    )
}

export default MovieLayout;