import NavbarDesktop from "../navbar/NavbarDesktop"
import NavbarDesktopHub from "../navbar/NavbarDesktopHub"
import NavbarDesktopStringer from "../navbar/NavbarDesktopStringer"
import logo from "../../assets/LOGO.jpg"
import NavbarHamburger from "../navbar/NavbarHamburger"
import { useSelector } from "react-redux"
import { useEffect } from "react";


export default function Header() {

  const userInfo =  useSelector((state) => state.user.userInfo);
  const userRole =  userInfo.userRole

  console.log( "userRole"+ userRole)
  console.log( "userInfo"+ userInfo)

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
        {userRole === 'client' && <NavbarDesktop />}
        {userRole === 'stringer' && <NavbarDesktopStringer />}
        {userRole === 'hub' && <NavbarDesktopHub />}

          <NavbarHamburger />

      </div>
      
    </header>

  )
}