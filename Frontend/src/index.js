import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './Home';
import Members from './routes/Members';
import reportWebVitals from './reportWebVitals';
import Lessons from "./routes/Lessons";
import Employees from "./routes/Employees";
import Register from "./routes/Register"
import Plan from "./routes/Plan";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} >
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/members" element={<Members />}>
          {/* <Route path=":m_id" element={<Member />} /> */}
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/employees" element={< Employees />} />
        <Route path="/plan" element={< Plan />} >
          {/* <Route path="/test" element={< Test />} /> */}
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'));