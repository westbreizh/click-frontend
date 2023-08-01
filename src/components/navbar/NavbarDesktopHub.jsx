import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import HomeIcon from '@mui/icons-material/Home'
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import ShopIcon from "../icons/desktop/ShopIcon";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LoginIcon from "../icons/desktop/LoginIcon"
import AccountIcon from "../icons/desktop/AccountIcon"


export default function NavbarDesktopHub() {

  const isConnected = useSelector((state) => state.user.isConnected)



  return (
  
    <nav  className="navBar__contenair">

      <ul className="navBar__ul">

        <li className='navBar__li'>
          <NavLink  to='/hub_raquettes-depot-ou-retrait' className={(nav) => (nav.isActive ? "navBar__active" : "navBar__inactive")} end>
            <HomeIcon className="navBar__icon"/>
            Dépot/retrait
          </NavLink>
        </li> 


        <li className='navBar__li'>
          <NavLink  to="/hub_historique" className={(nav) => (nav.isActive ? "navBar__active" : "navBar__inactive")} end>
            <SportsTennisIcon className="navBar__icon"/>
            Historique
          </NavLink>
        </li>


      </ul>

    </nav>
  )
}






 
  
    
  
    
