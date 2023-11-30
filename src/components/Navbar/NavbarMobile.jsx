import { LogoNavbar } from "./LogoNavbar"
import { MenuDesplegable } from "./MenuDesplegable"


export const NavbarMobile = () => {
  return (
    <div className="container__navbar--mobile">
        <LogoNavbar />
        <MenuDesplegable />
    </div>
  )
}
