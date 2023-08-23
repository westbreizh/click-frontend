import { useNavigate } from "react-router-dom"
import { useDispatch, useStore } from "react-redux";
import { setUserInfo} from "../../../store/userSlice"
import { connectedToggle } from "../../../store/userSlice"; 
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export default function LogoutIconAdmin(props) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useStore();

  function logoutAction() {
    dispatch(connectedToggle());
    store.dispatch(setUserInfo(""));
    navigate("/");
  }


  return (

    <div className="navBar__inactive signOut_wrapper" onClick={logoutAction}>

      <PowerSettingsNewIcon className="navBar__icon " />
      Déconnexion

    </div>

  );

}
