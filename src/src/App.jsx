import React from "react";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import CineAi from "./Pages/CineAi";
import CinePublishing from "./Pages/CinePublishing";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Artist from "./Pages/Artist";
import Press from "./Pages/press";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist" element={<Artist/>}/>
       <Route path="/contact" element={<Contact />} />
        <Route path="/cine-ai" element={<CineAi />} />
        <Route path="/press" element={<Press />}/>
        <Route path="/cine-publishing" element={<CinePublishing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </BrowserRouter>
  );
}
export default App;
