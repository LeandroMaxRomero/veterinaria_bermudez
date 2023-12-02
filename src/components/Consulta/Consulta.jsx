import { useState } from "react"
import { Link } from "react-router-dom"


export const Consulta = () => {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [numeroTel, setNumeroTel] = useState('')
  const [comentario, setComentario] = useState('')
  const [mail, setMail] = useState('')

  let mensaje = '';

  

  const handleSubmit = () =>{

   

    if(nombre == '' || apellido =='' || numeroTel == '' || mail == ''|| comentario == ''){
        alert("Debe completar todos los campos")
    }else{
       let usuario = {
          nombreUser: nombre,
          apellidoUser: apellido,
          numeroTelUser: numeroTel,
          mailUser: mail,
          comentarioUser: comentario
      }
      
      console.log(usuario);

      const textoWats = [
        "*MENSAJE AUTOMÁTICO*. Mi nombre es ",
        "Mi número es: ",
        "Mi mail de contacto es: ",
        "Descripción del problema: "
      ]
      
      const btnEnvio = document.querySelector('#link-enviar');

      let {nombreUser,apellidoUser,numeroTelUser, mailUser, comentarioUser} = usuario;

      console.log("Este es nombre prueba: "+ nombreUser);
      console.log("Este es apellido prueba: "+ apellidoUser);
      console.log("Este es número prueba: "+ numeroTelUser);
      mensaje =  `https://api.whatsapp.com/send?phone=542622314506&text=${textoWats[0]}${nombreUser}%20${apellidoUser}%0D%0A${textoWats[1]}${numeroTelUser}%0D%0A${textoWats[2]}${mailUser}%0D%0A${textoWats[3]}${comentarioUser}`;
      btnEnvio.href = mensaje;
    }
    // console.log(usuario);
    
  
    // const enviar = (usuario) => {
  // }

  }


  return (
    <div className="container__consulta">
      <div className="consulta__formulario">

      <form
    className="form"
    onSubmit={handleSubmit}>

    <h2>Datos de contacto</h2>

    <div className="input-doble">
      <input type="text" placeholder="Nombre*" className="campo-texto form-nombre"
      value={nombre}
      onChange={({target}) => setNombre(target.value)}
      required
      />
      <input type="text" placeholder="Apellido*" className="campo-texto form-apellido"
      value={apellido}
      onChange={({target}) => setApellido(target.value)}
      required
      />
    </div>
    <input type="" placeholder="Número de WhatsApp*" className="campo-texto form-tel"
    value={numeroTel}
    onChange={({target}) => setNumeroTel(target.value)}
    required
    />
    <input type="text" placeholder="Dirección de correo electrónico*" className="campo-texto form-mail"
    value={mail}
    onChange={({target}) => setMail(target.value)}
    required
    />

    <h2>Motivo de la consulta</h2>
    <textarea name="" id="" cols="30" rows="10" placeholder="Cuéntanos brevemente qué le sucede a tu mascota. Tu descripción nos ayudará a entender mejor su situación y brindarte la asistencia adecuada." className="campo-texto textarea"
    value={comentario}
    onChange={({target}) => setComentario(target.value)}
    ></textarea>
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


          <button type="submit"
          onClick={() => handleSubmit()}>
            <a href={mensaje} id="link-enviar" >
              Realizar el pedido
            </a>
          </button>
          
          <p>Al continuar aceptas nuestros <Link><u>términos y condiciones.</u></Link></p>
        </div>

      </div>

    </div>
  )
}