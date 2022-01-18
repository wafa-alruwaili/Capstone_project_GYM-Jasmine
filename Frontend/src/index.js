import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home3 from './Home3';
import Home from './Home';
import App from './App';
import Members from './routes/Members';
import reportWebVitals from './reportWebVitals';
import Lessons from "./routes/Lessons";
import Employees from "./routes/Employees";
import Employe from "./routes/Employe";
import Register from "./routes/Register"
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Login from './routes/Login';
import Register_user from './routes/Register_user';
import Employee_details from "./routes/Employee_details";
import Lessons_details from './routes/Lessons_details';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="/Home" element={<Home />} />
        <Route path="/Home3" element={<Home3 />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/login2" element={<Login2 />} /> */}
        <Route path="/members" element={<Members />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/Register_user" element={<Register_user />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/Lessons_details" element={<Lessons_details />} />
        <Route path="/employe" element={<Employe />} />
        <Route path="/employee_details" element={< Employee_details />} />
        <Route path="/employees" element={< Employees />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'));