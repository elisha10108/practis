import React from 'react';
import Welcome from "../../components/Homepage/Welcome";
import Error from  "../../components/Error/Error"
export default
[
    {
        path: "/",
        exact: true,
        main: <Welcome/>
    },
    {
        path: "*",
        exact: false,
        main: <Error/>
    },
]
