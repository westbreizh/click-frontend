import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import HomeIcon from '@mui/icons-material/Home'
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import ShopIcon from "../icons/desktop/ShopIcon";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LoginIcon from "../icons/desktop/LoginIcon"
import AccountIcon from "../icons/desktop/AccountIcon"
import LogoutIcon from "../icons/desktop/LogoutIcon";


export default function NavbarDesktopStringer() {

  const isConnected = useSelector((state) => state.user.isConnected)



  return (
  
    <nav  className="navBar__contenair">

      <ul className="navBar__ul">

        <li className='navBar__li'>
          <NavLink  to='/cordeur_raquettes-à-retirer' className={(nav) => (nav.isActive ? "navBar__active" : "navBar__inactive")} end>
            <HomeIcon className="navBar__icon"/>
            A retirer
          </NavLink>
        </li> 


        <li className='navBar__li'>
          <NavLink  to="/cordeur_raquettes-à-corder" className={(nav) => (nav.isActive ? "navBar__active" : "navBar__inactive")} end>
            <SportsTennisIcon className="navBar__icon"/>
            A corder 
          </NavLink>
        </li>

        <li className='navBar__li'>
          <NavLink  to="/cordeur_raquettes-à-déposer" className={(nav) => (nav.isActive ? "navBar__active" : "navBar__inactive")} end>
            <SportsTennisIcon className="navBar__icon"/>
            A déposer 
          </NavLink>
        </li>

        <li className='navBar__li'>
          <NavLink  to="/cordeur_raquettes-historique" className={(nav) => (nav.isActive ? "navBar__active" : "navBar__inactive")} end>
            <SportsTennisIcon className="navBar__icon"/>
            historique
          </NavLink>
        </li>

        <LogoutIcon />

      </ul>

    </nav>
  )
}






 
  
    
  
    
