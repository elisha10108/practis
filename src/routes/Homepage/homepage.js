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
        main: <Error type={'danger'} position={'center'} title={"Page not found"} icon={true}>
            We're sorry, we couldn't find the page you requested.
        </Error>
    },
]
