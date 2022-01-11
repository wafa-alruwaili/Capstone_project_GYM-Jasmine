import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './Home';
import Home2 from './Home2';
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
import Employee_details from "./routes/Employee_details";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="/Home2" element={<Home2 />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/members" element={<Members />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/employe" element={<Employe />} />
        <Route path="/employee_details" element={< Employee_details />} />
        <Route path="/employees" element={< Employees />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'));