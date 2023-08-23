import { useNavigate } from "react-router-dom"
import { useDispatch, useStore } from "react-redux";
import {  setUserInfo} from "../../../store/userSlice"
import { connectedToggle } from "../../../store/userSlice"; 
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export default function LogoutIconMobile(props) {

  const toggleMenuHamburgerAndSubmenu=props.toggleMenuHamburgerAndSubmenu
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useStore();

  function logoutAction() {
    toggleMenuHamburgerAndSubmenu();
    dispatch(connectedToggle());
    store.dispatch(setUserInfo("")); 
    navigate("/");
  }

  return (

    <div className="logout__wrapper" onClick={logoutAction}  >
        <PowerSettingsNewIcon className="logout__icon" />
        <div className="logout__text">Déconnexion</div>
    </div>

  )
}




