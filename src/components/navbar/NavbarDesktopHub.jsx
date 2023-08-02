import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


import LogoutIcon from "../icons/desktop/LogoutIcon";


export default function NavbarDesktopHub() {

  const isConnected = useSelector((state) => state.user.isConnected)



  return (
  
    <nav  className="navBar__contenair">

      <ul className="navBar__ul">

        <li className='navBar__li'>
          <NavLink  to='/hub_raquettes-dépot' className={(nav) => (nav.isActive ? "navBar__active" : "navBar__inactive")} end>
            < StorefrontIcon className="navBar__icon"/>
            <ArrowOutwardIcon className="navBar__icon"/>
            Dépot
          </NavLink>
        </li> 

        <li className='navBar__li'>
          <NavLink  to='/hub_raquettes-retrait' className={(nav) => (nav.isActive ? "navBar__active" : "navBar__inactive")} end>
            < StorefrontIcon className="navBar__icon"/>
            <ArrowOutwardIcon className="navBar__icon"/>
            Retrait
          </NavLink>
        </li> 


        <li className='navBar__li'>
          <NavLink  to="/hub_historique" className={(nav) => (nav.isActive ? "navBar__active" : "navBar__inactive")} end>
            <FormatListBulletedIcon className="navBar__icon"/>
            Historique
          </NavLink>
        </li>


        <LogoutIcon />
        
      </ul>

    </nav>
  )
}






 
  
    
  
    
