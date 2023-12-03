import { useState } from "react"
import { LogoNavbar } from "./LogoNavbar"
import { Link } from "react-router-dom";
// import { MenuDesplegable } from "./MenuDesplegable"



export const NavbarMobile = () => {

  const [active, setActive] = useState(true);

  return (
    <div className={(active === false ? "show" : "") + " container__navbar--mobile"}>
        <LogoNavbar />
        <div onClick={() => setActive(!active)} className="container__desplegable">
        <div className="boton__menuDesplegable">
            {active === true
            ?
            <img src="img/menu.svg" alt="Menú desplegable" />
            :
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L16.8492 16.8492" stroke="#343434" strokeWidth="3" strokeLinecap="round"/>
              <path d="M2 2L16.8492 16.8492" stroke="#343434" strokeWidth="3" strokeLinecap="round"/>
              <path d="M2 2L16.8492 16.8492" stroke="#343434" strokeWidth="3" strokeLinecap="round"/>
              <path d="M2 16.8492L16.8492 2" stroke="#343434" strokeWidth="3" strokeLinecap="round"/>
              <path d="M2 16.8492L16.8492 2" stroke="#343434" strokeWidth="3" strokeLinecap="round"/>
              <path d="M2 16.8492L16.8492 2" stroke="#343434" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            }
        </div>
        <div className={(active === false ? "show" : "") + " navlist--mobile"}>
        <a href="/#home">
            <h4>Inicio</h4>
        </a>
        <a href="/#proceso">
            <h4>Cómo funciona</h4>
        </a>
        <a href="/#precios">
            <h4>Precios</h4>
        </a>
        <Link to="/soporte">
            <h4>Soporte</h4>
        </Link>
        <Link to="/consulta">
            <h4>Consulta</h4>
        </Link>

        </div>
    </div>
    </div>
  )
}
