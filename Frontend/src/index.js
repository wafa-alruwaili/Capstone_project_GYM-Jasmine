import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './Home';
import App from './App';
import Members from './routes/Members';
import reportWebVitals from './reportWebVitals';
import Lessons from "./routes/Lessons";
import Employees from "./routes/Employees";
import Register from "./routes/Register"
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="invoices" element={<Invoices />}>
      <Route path=":invoiceId" element={<Invoice />} />
    </Route>
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
        <Route path="/Home" element={<Home />} /> 
        <Route path="/members" element={<Members />}>
       
          {/* <Route path=":m_id" element={<Member />} /> */}
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/employees" element={< Employees />} />
        {/* <Route path="/plan" element={< Plan />} > */}
          {/* <Route path="/test" element={< Test />} /> */}
        
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'));