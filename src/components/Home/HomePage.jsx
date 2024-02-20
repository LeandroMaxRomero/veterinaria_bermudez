import { Header } from "./Header"
import { Nosotros } from "./Nosotros"
import { Precios } from "./Precios"
import { Proceso } from "./Proceso"
import { Slider } from "./Slider"
import {imagenVeterinariaContent} from "../data/data" 

export const HomePage = () => {
  return (
    <div className="container__home" id="home">
      <Header />
      <Proceso />
      <Precios />
      <Nosotros />
      <Slider data={imagenVeterinariaContent.img}/>
    </div>
  )
}
