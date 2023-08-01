import NavbarDesktop from "../navbar/NavbarDesktop"
import NavbarDesktopHub from "../navbar/NavbarDesktopHub"
import NavbarDesktopStringer from "../navbar/NavbarDesktopStringer"
import logo from "../../assets/LOGO.jpg"
import NavbarHamburger from "../navbar/NavbarHamburger"
import { useSelector } from "react-redux"
import { useEffect } from "react";


export default function Header() {

  const user = useSelector((state) => state.user)
  const userRole = useSelector((state) => state.user.userRole)
  console.log( "userRole"+ userRole)
  console.log( "user"+ user)

  useEffect(() => {
    // Cette fonction s'exécutera à chaque changement de `userRole`.
    console.log("userRole a changé :", userRole);
    // Des effets secondaires ou des actions supplémentaires en fonction du changement de `userRole` peuvent être effectués ici.
  }, [userRole]);

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