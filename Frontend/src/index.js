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
import Register_employe from "./routes/Register_employe";
import Register from "./routes/Register"
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Login from './routes/Login';
import Employee_details from "./routes/Employee_details";
import Lessons_details from './routes/Lessons_details';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
      </Route>
      <Route path="/Home" element={<Home />} />
      <Route path="/Home3" element={<Home3 />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/members" element={<Members />} />
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/Lessons_details" element={<Lessons_details />} />
    
      <Route path="/Register_employe" element={<Register_employe />} />
      <Route path="/employee_details" element={< Employee_details />} />
      <Route path="/employees" element={< Employees />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'));