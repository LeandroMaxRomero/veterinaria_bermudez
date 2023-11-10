import { Header } from "./Header"
import { Precios } from "./Precios"
import { Proceso } from "./Proceso"

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Proceso />
      <Precios />
    </div>
  )
}
