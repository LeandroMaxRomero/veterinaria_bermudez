import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./components/Home/HomePage";
import { Soporte } from "./components/Soporte/Soporte";
import { Consulta } from "./components/Consulta/Consulta";
import { NavbarMobile } from "./components/Navbar/NavbarMobile";


function App() {
  
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <NavbarMobile />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/soporte" element={<Soporte />}/>
          <Route path="/consulta" element={<Consulta />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
