import { Link } from "react-router-dom"


export const Precios = () => {
  return (
    <div className="container__precios">

        <div className="column--card">
            <div className="card--precios">
                <h3>
                 <span>$4500</span> IVA incluido
                </h3>
                <ul>
                    <li> &nbsp;  Atención en el mismo día</li>
                    <li> &nbsp;  Te atendemos por WhatsApp</li>
                    <li> &nbsp;  Tiempo ilimitado de consulta</li>
                    <li> &nbsp;  Brindamos atención a todas las mascotas de hogar</li>
                </ul>
                <Link to="/consulta">
                    <button>
                        <p>Consulta</p>
                    </button>
                </Link>

            </div>

        </div>
        <div className="column--cobertura">
            <h2>Lo que Cubre Nuestra Consulta</h2>
            <p>Brindamos atención a través de WhatsApp, dedicando el tiempo necesario para resolver todas tus preguntas y preocupaciones. Nos ocupamos de todas las mascotas en tu hogar. Nuestros servicios en línea se caracterizan por su flexibilidad, accesibilidad y la confianza que ofrecemos en el cuidado de tus seres queridos peludos desde la comodidad de tu hogar.</p>
        </div>

    </div>
  )
}
