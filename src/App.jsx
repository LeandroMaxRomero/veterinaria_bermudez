import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./components/Home/HomePage";
import { Consulta } from "./components/Consulta/Consulta";
import { NavbarMobile } from "./components/Navbar/NavbarMobile";
import { Checkout } from "./components/Consulta/Checkout";
import { TermAndCond } from "./components/TerminosCondiciones/TermAndCond";
import { Pago } from "./components/Pago/Pago";

function App() {
  
  return (
    <React.Fragment>
      <BrowserRouter>
          <Navbar />
          <NavbarMobile />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/consulta" element={<Consulta />}/>
            <Route path="/pago" element={<Pago />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/terminosycondiciones" element={<TermAndCond />}/>
            <Route path="/*" element={<h1>404 NOT FOUND</h1>}/>

          </Routes>
          <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
