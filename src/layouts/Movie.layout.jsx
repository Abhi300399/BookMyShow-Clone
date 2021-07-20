import React from 'react';

//Components
import Navbar from "../components/Navbar/Navbar.component";

export const MovieLayout = (props) => {
    return (
        <>
           <Navbar/>
            {props.children} 
        </>
    )
}

export default MovieLayout;