import React from "react";
import {Routes, Route, Router, HashRouter} from 'react-router-dom'
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import {Index} from "../pages/Index";

class AppRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/pages/Index" element={<Index/>}/>
                    <Route path="/pages/Home" element={<Home/>}/>
                </Routes>
            </HashRouter>
        )
    }
}

export default AppRouter
