import { Link } from "react-router-dom"

export const Consulta = () => {
  return (
    <div className="container__consulta">
      <div className="consulta__formulario">
        <form className="form">
        <h2>Datos de contacto</h2>
        <div className="input-doble">
          <input type="text" placeholder="Nombre*" className="campo-texto form-nombre"/>
          <input type="text" placeholder="Apellido*" className="campo-texto form-apellido"/>
        </div>
        <input type="text" placeholder="Número de WhatsApp*" className="campo-texto form-tel"/>
        <input type="text" placeholder="Dirección de correo electrónico*" className="campo-texto form-mail"/>

        <h2>Motivo de la consulta</h2>
        <textarea name="" id="" cols="30" rows="10" placeholder="Cuéntanos brevemente qué le sucede a tu mascota. Tu descripción nos ayudará a entender mejor su situación y brindarte la asistencia adecuada." className="campo-texto textarea"></textarea>
        </form>

      </div>
      <div className="consulta__pedido">
        <div>
          <h2>Consulta</h2>
          <div className="box--precio">
            <p>Precio de consulta: $4.500</p>
            <p>Total: $4.500</p>
          </div>
        </div>

        <div className="boton-pedido">
          <button>Realizar el pedido</button>
          <p>Al continuar aceptas nuestros <Link><u>términos y condiciones</u></Link></p>
        </div>

      </div>

    </div>
  )
}
