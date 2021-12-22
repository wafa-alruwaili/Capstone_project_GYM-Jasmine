import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Lesson from "./routes/Lesson";
// import Employees from "./routes/Employees";
import Register from "./routes/register"
// import Plan from "./routes/Plan";



ReactDOM.render(
  <BrowserRouter>.
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="register" element={<Register/>} />
        {/* <Route path="triage" element={<Triages />}>
          <Route path=":NationalId" element={<Triage />} />
        </Route> */}
        {/* <Route path="registers" element={<Registers />} /> */}
        {/* <Route path="doctors" element={<Doctors />} >
          <Route path=":NationalId" element={<Doctor />} /> */}
        {/* </Route> */}

        {/* <Route path="histories" element={<Histories />} >
          <Route path=":NationalId" element={<History />} />
        </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'));