import { Header } from "./Header"
import { Precios } from "./Precios"
import { Proceso } from "./Proceso"

export const HomePage = () => {
  return (
    <div className="container__home" id="home">
      <Header />
      <Proceso />
      <Precios />
    </div>
  )
}
