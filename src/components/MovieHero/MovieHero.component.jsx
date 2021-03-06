import React,{useContext} from 'react';

import MovieInfo from './MovieInfo.component';

//context
import { MovieContext } from '../../context/movie.context';

export const MovieHero = () => {
    const {movie}=useContext(MovieContext);
    return (
        <>
        {/* Mobile */}
        <div className="md:hidden w-full relative" style={{height:"calc(180vw)"}}>
            <div className="absolute w-full h-56 bg-opacity-50 bottom-0 bg-black z-10"/>
            <div className="absolute bottom-4 left-4 z-20">
            <MovieInfo />
            </div>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="w-full h-full" alt="poster"/>
        </div>
         {/* Medium */}
        <div className="hidden md:block lg:hidden w-full relative" style={{height:"calc(100vw)"}}>
        <div className="absolute w-full h-56 bg-opacity-50 bottom-0 bg-black z-10"/>
        <div className="absolute bottom-4 z-20">
            <MovieInfo />
        </div>
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="w-full h-full" alt="poster"/>

        </div>

         {/* PC */}
        <div className="hidden lg:block w-full relative" style={{height:"30rem"}}>
        
        <div className="absolute w-full h-full z-10" style={{backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}/>
        <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
        <div className="w-64 h-96">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster"className="w-full h-full rounded-xl"/>
        </div>
        <div>
            <MovieInfo />
        </div>
        </div>
        <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="poster"
            className="w-full h-full"
          />
        </div>
            
        </>
    )
}

export default MovieHero;
