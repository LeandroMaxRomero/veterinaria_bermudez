
import { Link } from "react-router-dom"

export const NavList = () => {


  return (
    <div className='container__navlist'>
        <a href="/#home" className="navlink">
            <h4>Inicio</h4>
        </a>
        <a href="/#proceso" className="navlink">
            <h4>Cómo funciona</h4>
        </a>
        <a href="/#precios" className="navlink">
            <h4>Precios</h4>
        </a>
        <a href="/#nosotros" className="navlink">
            <h4>Nosotros</h4>
        </a>
        <Link to="/consulta">
            <button>
                <p>Consulta</p>
            </button>
        </Link>
    </div>
  )
}
