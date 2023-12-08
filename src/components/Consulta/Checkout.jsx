
export const Checkout = () => {
    let userData = localStorage.getItem("userLocal");
      // console.log(userData)
      // console.log(typeof userData)

      userData = JSON.parse(userData);
      // console.log(userData);
      // console.log(typeof userData);

      let {nombreUser,apellidoUser,numeroTelUser, mailUser, comentarioUser} = userData;
    let mensaje = '';
    const enviarMensaje = () =>{

        const textoWats = [
            "*MENSAJE AUTOMÁTICO*. Mi nombre es ",
            "Mi número es: ",
            "Mi mail de contacto es: ",
            "Descripción del problema: "
          ]
          
          const btnEnvio = document.querySelector('#link-enviar');
    
          mensaje =  `https://api.whatsapp.com/send?phone=542622314506&text=${textoWats[0]}${nombreUser}%20${apellidoUser}%0D%0A${textoWats[1]}${numeroTelUser}%0D%0A${textoWats[2]}${mailUser}%0D%0A${textoWats[3]}${comentarioUser}`;
          btnEnvio.href = mensaje;
    }


  return (
    <div className="container__checkout">
        <p>
        Nombre: {nombreUser}
        </p>
        <p>
            Apellido: {apellidoUser}
        </p>
        <p>
            WhatsApp: {numeroTelUser}
        </p>
        <p>
            Mail: {mailUser}
        </p>
        <p>
            Comentario: {comentarioUser}
        </p>

        <button type="button"
         onClick={() => enviarMensaje()}>
            <a href={mensaje} id="link-enviar" >
            Enviar consulta por WhatsApp
            </a>
        </button>

    </div>
  )
}
