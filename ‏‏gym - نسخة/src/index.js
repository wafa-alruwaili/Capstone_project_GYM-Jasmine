import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Lesson from "./routes/Lesson";
import Employees from "./routes/Employees";
import Register from "./routes/register"
import Plan from "./routes/Plan";


ReactDOM.render(

<BrowserRouter>.
    <Routes>
      <Route path="/" element={<App />}/>
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="lesson" element={<Lesson />}>
          <Route path="l_id" element={<Lesson />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="employees" element={<Employees />} >
          <Route path="l_id" element={<Employees />} />
        </Route>

        <Route path="plan" element={<Plan />} >
          <Route path="l_id" element={<Plan />} />
        </Route>
     
    </Routes>
  </BrowserRouter> ,
  document.getElementById('root')
);