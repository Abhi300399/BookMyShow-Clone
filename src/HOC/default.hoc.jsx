import React from "react";

import { Route } from "react-router-dom";

//Layout
import DefaultLayout from "../layouts/default.layout";

const DefaultHoc=({component:Component,...rest})=>{
    return ( <>
        <Route {...rest} component={(props)=>(
            <DefaultLayout>
                <Component />
            </DefaultLayout>
        )
        } />
    </>
    );
};

export default DefaultHoc;