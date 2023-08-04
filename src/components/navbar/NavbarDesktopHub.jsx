import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LogoutIconAdmin from "../icons/desktop/LogoutIconAdmin";



export default function NavbarDesktopHub() {

  const isConnected = useSelector((state) => state.user.isConnected)



  return (
  
    <nav  className="navBar__contenair">

      <ul className="navBar__ul">

        <li className='navBar__li'>
          <NavLink  to='/hub_raquettes-dépot' className={(nav) => (nav.isActive ? "navBar__active" : "navBar__inactive")} end>
            <div className="icons_wrapper">
              <ArrowOutwardIcon className="navBar__icon arrowOutward-to-rotate"/>
              < StorefrontIcon className="navBar__icon"/>
            </div>
            Dépot
          </NavLink>
        </li> 

        <li className='navBar__li'>
          <NavLink  to='/hub_raquettes-retrait' className={(nav) => (nav.isActive ? "navBar__active" : "navBar__inactive")} end>
            <div className="icons_wrapper">
              < StorefrontIcon className="navBar__icon"/>
              <ArrowOutwardIcon className="navBar__icon"/>
            </div>
              Retrait
            
          </NavLink>
        </li> 


        <li className='navBar__li'>
          <NavLink  to="/hub_historique" className={(nav) => (nav.isActive ? "navBar__active" : "navBar__inactive")} end>
            <FormatListBulletedIcon className="navBar__icon"/>
            Historique
          </NavLink>
        </li>


        <li className='navBar__li li__logoutIcon'>
          <LogoutIconAdmin />
        </li>
        
      </ul>

    </nav>
  )
}






 
  
    
  
    
