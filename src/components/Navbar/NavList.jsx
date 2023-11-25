import { Link } from "react-router-dom"

export const NavList = () => {
  return (
    <div className='container__navlist'>
        <Link to="/">
            <h4>Inicio</h4>
        </Link>
        <Link>
            <h4>Cómo funciona</h4>
        </Link>
        <Link>
            <h4>Precios</h4>
        </Link>
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
