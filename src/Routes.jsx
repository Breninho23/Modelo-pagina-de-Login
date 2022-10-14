import React from 'react'
import {Routes, Route} from 'react-router-dom';

import { Login } from './pages/Login'; './pages/Login/index'
import UserCrud from './componentes/User/UserCrud'

export default props =>(
    <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/users" element ={<UserCrud/>} />
        <Route path="*" element ={<Login/>} />
    </Routes>
);