import { NavLink } from "react-router-dom"
import { useState } from "react"
import { Squash as Hamburger } from 'hamburger-react'
import { useSelector } from "react-redux"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LogoutIconAdmin from "../icons/desktop/LogoutIconAdmin";
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

export default function NavbarHamburgerStringer() {

  const isConnected = useSelector((state) => state.user.isConnected);
  const [isMenuHamburgerOpen, setToggleMenuHamburger] = useState(false)

  function toggleMenuHamburger() { 
    setToggleMenuHamburger(!isMenuHamburgerOpen);
  }
  
  return (

    <nav  className="navHamburger__contenair">

      <Hamburger  toggled={isMenuHamburgerOpen} toggle={setToggleMenuHamburger}/>

      <ul className={`menuDropdownHamburger ${isMenuHamburgerOpen ? " showMenuDropdownHamburger" : ""}`}>

        <li className='menuHamburger__li' onClick={() =>toggleMenuHamburger() } >
          <NavLink  to='/cordeur_raquettes-à-retirer' className={(nav) => (nav.isActive ? "navLink__active" : "navLink__inactive")} end>
          <div className="icons_wrapper">
              <ArrowOutwardIcon className="navBar__icon"/>
            </div>
            A retirer
          </NavLink>
        </li> 


        <li className='menuHamburger__li' onClick={() =>toggleMenuHamburger() } >
          <NavLink  to="/cordeur_raquettes-à-corder" className={(nav) => (nav.isActive ? "navLink__active" : "navLink__inactive")} end>
            <SportsTennisIcon className="navBar__icon"/>
            A corder 
          </NavLink>
        </li>

        <li className='menuHamburger__li' onClick={() =>toggleMenuHamburger() } >
          <NavLink  to="/cordeur_raquettes-à-déposer" className={(nav) => (nav.isActive ? "navLink__active" : "navLink__inactive")} end>
          <div className="icons_wrapper">
              < ThumbUpAltIcon className="navBar__icon "/>
            </div>
            Prête 
          </NavLink>
        </li>


        <li className='menuHamburger__li' onClick={() =>toggleMenuHamburger() } >
          <NavLink  to="/hub_historique" className={(nav) => (nav.isActive ? "navLink__active" : "navLink__inactive")} end>
            <FormatListBulletedIcon className="navBar__icon"/>
            Historique
          </NavLink>
        </li>


        <li className='menuHamburger__li' onClick={() =>toggleMenuHamburger() } >
          <LogoutIconAdmin />
        </li>


      </ul>

    </nav>

  )}