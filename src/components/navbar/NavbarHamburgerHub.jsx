import { NavLink } from "react-router-dom"
import { useState } from "react"
import { Squash as Hamburger } from 'hamburger-react'
import { useSelector } from "react-redux"
import HomeIcon from '@mui/icons-material/Home'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LogoutIconAdmin from "../icons/desktop/LogoutIconAdmin";


export default function NavbarHamburgerHub() {

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
          <NavLink  to='/hub_raquettes-dépot' className={(nav) => (nav.isActive ? "navLink__active" : "navLink__inactive")} end>
            <div className="icons_wrapper">
              <ArrowOutwardIcon className="navBar__icon arrowOutward-to-rotate"/>
            </div>
            Dépot
          </NavLink>
        </li> 

        <li className='menuHamburger__li' onClick={() =>toggleMenuHamburger() } >
          <NavLink  to='/hub_raquettes-retrait' className={(nav) => (nav.isActive ? "navLink__active" : "navLink__inactive")} end>
            <div className="icons_wrapper">
              <ArrowOutwardIcon className="navBar__icon"/>
            </div>
              Retrait
            
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