import React from "react";
import {Routes, Route, HashRouter} from 'react-router-dom'
import Index from "../pages/Index";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import AdminMange from "../pages/admin/AdminMange";
import UserManage from "../pages/user/UserMange";
import GoodsMange from "../pages/goods/GoodsMange";

class AppRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/pages/Index" element={<Index/>}>
                        <Route path="" element={<Home/>}/>
                        <Route path="adminMange" element={<AdminMange/>}/>
                        <Route path="userManage" element={<UserManage/>}/>
                        <Route path="goodsMange" element={<GoodsMange/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        )
    }
}

export default AppRouter
