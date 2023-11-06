import NavbarDesktop from "../navbar/NavbarDesktop"
import NavbarDesktopHub from "../navbar/NavbarDesktopHub"
import NavbarDesktopStringer from "../navbar/NavbarDesktopStringer"
import logo from "../../assets/LOGO.jpg"
import NavbarHamburger from "../navbar/NavbarHamburger"
import NavbarHamburgerHub from "../navbar/NavbarHamburgerHub"
import NavbarHamburgerStringer from "../navbar/NavbarHamburgerStringer"
import { useSelector } from "react-redux"
import { useEffect } from "react";


export default function Header() {

  const userInfo =  useSelector((state) => state.user.userInfo);
  const userRole =  "player"

  // Cette fonction s'exécutera à chaque changement de `userRole`.
  useEffect(() => {
  }, [userRole]);

  return (

    <header className="header">

      <div className="header__wrapper-width">
        
        <img src={logo} alt="logo de click & raquette" className="header__logo"/>
        
        {/* Conditional rendering based on userRole */}
        {(userRole === '' || userRole === undefined || userRole === 'player') && <NavbarDesktop />}
        {userRole === 'stringer' && <NavbarDesktopStringer />}
        {userRole === 'hub' && <NavbarDesktopHub />}

        {(userRole === '' || userRole === undefined || userRole === 'player') && <NavbarHamburger />}
        {userRole === 'stringer' && <NavbarHamburgerStringer/>}
        {userRole === 'hub' && <NavbarHamburgerHub  />}
          
      </div>
      
    </header>

  )
}