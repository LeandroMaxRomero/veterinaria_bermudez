import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./components/Home/HomePage";
import { Soporte } from "./components/Soporte/Soporte";
import { Consulta } from "./components/Consulta/Consulta";


function App() {
  
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/" element={<Soporte />}/>
          <Route path="/" element={<Consulta />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
