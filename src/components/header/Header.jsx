import NavbarDesktop from "../navbar/NavbarDesktop"
import NavbarDesktopHub from "../navbar/NavbarDesktopHub"
import NavbarDesktopStringer from "../navbar/NavbarDesktopStringer"
import logo from "../../assets/LOGO.jpg"
import NavbarHamburger from "../navbar/NavbarHamburger"
import { useSelector } from "react-redux"



export default function Header() {

  const userRole = useSelector((state) => state.user.userRole)
  console.log( "userRole"+ userRole)

  return (

    <header className="header">

      <div className="header__wrapper-width">
        
          <img src={logo} alt="logo de click & raquette" className="header__logo"/>
        
        {/* Conditional rendering based on userRole */}
        {userRole === '' && <NavbarDesktop />}
        {userRole === undefined && <NavbarDesktop />}
        {userRole === 'player' && <NavbarDesktop />}
        {userRole === 'stringer' && <NavbarDesktopStringer />}
        {userRole === 'hub' && <NavbarDesktopHub />}

          <NavbarHamburger />

      </div>
      
    </header>

  )
}