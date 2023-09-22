import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import PagesNotFound from "./Pages/PagesNotFound";
import "./App.css"


const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/menu" element={<Menu/>} />
  <Route path="*" element={<PagesNotFound/>} />
</Routes>
</BrowserRouter>
    </div>
  );
};

export default App;
