import { useNavigate } from "react-router-dom"
import { useDispatch, useStore } from "react-redux";
import { setUserInfo} from "../../../store/userSlice"
import { connectedToggle } from "../../../store/userSlice"; 
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export default function LogoutIcon(props) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useStore();

  function logoutAction() {
    dispatch(connectedToggle());
    store.dispatch(setUserInfo(""));
    navigate("/");
  }


  return (

    <div className="logout__wrapper" onClick={logoutAction}>

      <PowerSettingsNewIcon className="logout__icon" />
      <div className="logout__text">Déconnexion</div>

    </div>

  );

}
