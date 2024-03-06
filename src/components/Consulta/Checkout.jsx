
export const Checkout = () => {
    let userData = localStorage.getItem("userLocal");
      
    userData = JSON.parse(userData);
     
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
      <div className="checkout--agradecimiento">
        <h3>
        Muchas gracias por confiar en nosotros :)
        </h3>
        <p>
        Antes de enviar tu mensaje por Whatsapp, ten la seguridad de que nuestro equipo estará listo para atenderte en cuanto lo recibamos. Por favor, considera nuestros horarios de trabajo. ¡Estamos acá para ayudarte!
        </p>

      </div>

      <div className="checkout--datos">
        <h3>Datos de contacto</h3>
        <p>
          <span>Nombre:</span> {nombreUser}
        </p>
        <p>
           <span>Apellido:</span> {apellidoUser}
        </p>
        <p>
            <span>Número de WhatsApp:</span> {numeroTelUser}
        </p>
        <p>
            <span>Correo electrónico:</span> {mailUser}
        </p>
        <p>
            <span>Comentario:</span> {comentarioUser}
        </p>

        <button type="button"
         onClick={() => enviarMensaje()}>
            <a href={mensaje} id="link-enviar" >
            Enviar consulta por WhatsApp
            </a>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.55 4.91006C18.6332 3.98399 17.5412 3.24973 16.3377 2.75011C15.1341 2.25049 13.8432 1.99552 12.54 2.00006C7.08005 2.00006 2.63005 6.45006 2.63005 11.9101C2.63005 13.6601 3.09005 15.3601 3.95005 16.8601L2.55005 22.0001L7.80005 20.6201C9.25005 21.4101 10.88 21.8301 12.54 21.8301C18 21.8301 22.4501 17.3801 22.4501 11.9201C22.4501 9.27006 21.42 6.78006 19.55 4.91006ZM12.54 20.1501C11.06 20.1501 9.61005 19.7501 8.34005 19.0001L8.04005 18.8201L4.92005 19.6401L5.75005 16.6001L5.55005 16.2901C4.7278 14.977 4.29119 13.4593 4.29005 11.9101C4.29005 7.37006 7.99005 3.67006 12.53 3.67006C14.73 3.67006 16.8 4.53006 18.35 6.09006C19.1175 6.85402 19.7257 7.76272 20.1394 8.76348C20.5531 9.76425 20.7641 10.8372 20.76 11.9201C20.7801 16.4601 17.08 20.1501 12.54 20.1501ZM17.06 13.9901C16.81 13.8701 15.59 13.2701 15.37 13.1801C15.14 13.1001 14.98 13.0601 14.81 13.3001C14.64 13.5501 14.17 14.1101 14.03 14.2701C13.89 14.4401 13.74 14.4601 13.49 14.3301C13.24 14.2101 12.44 13.9401 11.5 13.1001C10.76 12.4401 10.27 11.6301 10.12 11.3801C9.98005 11.1301 10.1 11.0001 10.23 10.8701C10.34 10.7601 10.48 10.5801 10.6 10.4401C10.72 10.3001 10.77 10.1901 10.85 10.0301C10.93 9.86006 10.89 9.72006 10.83 9.60006C10.77 9.48006 10.27 8.26006 10.07 7.76006C9.87005 7.28006 9.66005 7.34006 9.51005 7.33006H9.03005C8.86005 7.33006 8.60005 7.39006 8.37005 7.64006C8.15005 7.89006 7.51005 8.49006 7.51005 9.71006C7.51005 10.9301 8.40005 12.1101 8.52005 12.2701C8.64005 12.4401 10.27 14.9401 12.75 16.0101C13.34 16.2701 13.8 16.4201 14.16 16.5301C14.75 16.7201 15.29 16.6901 15.72 16.6301C16.2 16.5601 17.19 16.0301 17.39 15.4501C17.6 14.8701 17.6 14.3801 17.53 14.2701C17.46 14.1601 17.31 14.1101 17.06 13.9901Z" fill="white"/>
            </svg>
        </button>
      </div>
    </div>
  )
}
