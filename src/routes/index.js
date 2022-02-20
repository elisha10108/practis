import React from "react";
import Homepage from "./Homepage/homepage";
import UserList from "./user/list";

import {BrowserRouter, Route, Routes} from 'react-router-dom';

export default function Routing() {
    const links = [
        ...Homepage,
        ...UserList,
    ];

    return (
        <BrowserRouter>
            <Routes>
                {links.map((route, index) => (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        element={(route.main)}/>
                ))}
            </Routes>
        </BrowserRouter>
    )
}

