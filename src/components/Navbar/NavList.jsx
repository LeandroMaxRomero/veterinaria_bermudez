
import { Link } from "react-router-dom"

export const NavList = () => {


  return (
    <div className='container__navlist'>
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
            <button>
                <p>Consulta</p>
            </button>
        </Link>
    </div>
  )
}
