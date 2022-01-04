import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Member from "./member";
import Admin from "./admin";
import Login from "./login";
axios.defaults.withCredentials = true;

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/member' element={<Member />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
