// import { useState } from 'react';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
// import ResponsiveAppBar from './Components/Navbar.js'
import Home from './Components/Home.js'
import About from './Components/About.js'
import Contact from './Components/Contact.js';
import Design from './Components/Design.js';
import Service from './Components/Service.js';
// import Form from './Components/Form.js'

function App() {

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Home' element={()=> <Navigate to = '/'/>} />
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Design' element={<Design />}></Route>
          <Route path='/Service' element={<Service />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    // <div className="App">
    //   <ResponsiveAppBar/>
    //   <Form />
    // </div>
  );
}

export default App;
