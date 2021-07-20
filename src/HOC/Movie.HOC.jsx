import React from 'react';
import { Route } from "react-router-dom";


//Layout
import MovieLayout from '../layouts/Movie.layout';

export const MovieHOC = ({component:Component,...rest}) => {
    return (
        <>
        <Route {...rest} component={(props)=>(
            <MovieLayout>
                <Component {...props}/>
            </MovieLayout>
        )
        } />
        </>
    );
};

export default MovieHOC;