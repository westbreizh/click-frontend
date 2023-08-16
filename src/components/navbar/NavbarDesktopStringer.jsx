import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LogoutIconAdmin from "../icons/desktop/LogoutIconAdmin";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';


export default function NavbarDesktopStringer() {

  const isConnected = useSelector((state) => state.user.isConnected)



  return (
  
    <nav  className="navBar__contenair">

      <ul className="navBar__ul">

        <li className='navBar__li'>
          <NavLink  to='/cordeur_raquettes-à-retirer' className={(nav) => (nav.isActive ? "navBar__active" : "navBar__inactive")} end>
          <div className="icons_wrapper">
              <ArrowOutwardIcon className="navBar__icon"/>
            </div>
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
          <div className="icons_wrapper">
              < ThumbUpAltIcon className="navBar__icon"/>
            </div>
            Prête
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






 
  
    
  
    
