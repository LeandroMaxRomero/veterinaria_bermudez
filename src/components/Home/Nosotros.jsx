
export const Nosotros = () => {
  return (
    <div className="container__nosotros" id="nosotros">
      <div className="nosotros__texto">
        <h2>Sobre la veterinaria</h2>
        <h4>Nos dedicamos a brindar productos y servicios de alta calidad para tus mascotas, todo en un ambiente acogedor y especializado.</h4>
        <div className="nosotros__texto--datos">
          <img src="img/ion_location-outline.svg" alt="Logo de ubicación" />
          <p><span>Dirección:</span> Avenida Sarasa 0303456, Tunuyám, Mendoza.</p>
        </div>
        <div className="nosotros__texto--datos">
          <img src="img/ph_clock.svg" alt="Logo de ubicación" />
          <p><span>Horarios de atención:</span> Lunes a viernes de 09 a 18hs.</p>
        </div>
      </div>
      <div className="nosotros__img">
        <img src="img/img-nosotros.png" alt="" />
      </div>
    </div>
  )
}
