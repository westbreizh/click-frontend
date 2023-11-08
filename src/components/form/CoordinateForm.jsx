import { useState } from "react"
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { useStore } from "react-redux"
import { useSelector } from "react-redux"
import { shemaInputCoordonate} from '../../Utils/shemaInput'
import { setUserAddress, setUserInfo} from '../../store/userSlice'
import ModalValidationMessageModif from "../modal/modalValidation/ModalValidationMessageModif";


export default function CoordinateForm( props ) {


  const onClose = props.onClose

  const playerId = useSelector((state) => state.user.userInfo.id);
  const telephone = useSelector((state) => state.user.userInfo.telephone);
  const address = useSelector((state) => state.user.userAddress);
  const xsrfToken = useSelector((state) => state.xsrfToken);

  const [isPErrorFromBackEndOpen, setShowErrorFromBackEnd] = useState(false) ;
  const [messageFromBackEnd, setMessageFromBackend] = useState("") ;

  const store = useStore()




 
  //gestion de l'ouverture du modal de validation et fermeture des 2 modales (modalValidation et modalChangeEmail...)

  const [isModalValidationMessageOpen, setModalValidationMessageOpen] = useState(false);

  const showModalValidation = function(){
  setModalValidationMessageOpen(true);
  };
  const hideModal = function(){
  setModalValidationMessageOpen(false);
  onClose();
  };

  // gestion de la valeure de la réponse backend 
  const showPErrorFromBackend = () => {
   setShowErrorFromBackEnd( true );
  };
 function changeMessageFromBackEnd(messageFromBack) {
  setMessageFromBackend(messageFromBack);
  }

  // gestion du contôle de la validité des inputs 
  const { register , formState, handleSubmit,   formState: { errors }  } =
   useForm({
    resolver: yupResolver(shemaInputCoordonate),
    mode: 'onTouched',
    shouldFocusError: true,
  });
  const { isValid } = formState;

  //fonction asynchrone vers le backend modifiant les coordonnées de l'utilisateur
  const onSubmit = async function (data) {

    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/user/createOrUploadCoordinate`, {
        mode: "cors",
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({playerId: playerId, telephone: data.telephone.replace(/(\d{2})(?=\d)/g, '$1 '), road: data.road, city: data.city, postalCode : data.postalCode.replace(/^(\d{2})(\d{3})$/, '$1 $2')}),
        headers: {
          "Content-Type": "application/json",
          "x-xsrf-token": xsrfToken  
        }
      })

        if (!response.ok) {
          const result = await response.json();
          changeMessageFromBackEnd(result.message);
          showPErrorFromBackend();
          throw new Error(` ${result.message}`);
        }else {
        const result = await response.json();
        const updatedPlayerData = result.updatedPlayerData
        console.log("données user mis àjour", updatedPlayerData)
        store.dispatch(setUserInfo(updatedPlayerData));
        showModalValidation();

      }
    }
    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }


  return (

  <>

    <form onSubmit={handleSubmit(onSubmit)} className="form__wrapper">

      <label className="input__label"> Numéro de téléphone   </label>
      <input type="tel"  {...register('telephone')} className="input__text" defaultValue={telephone}  />
      <p className="input__error">{errors.telephone?.message}</p>  

      <label className="input__label"> Adresse (nom et numéro de la voirie) </label>
      <input
        type="text"
        {...register("road")}
        className="input__text"
        defaultValue={address && address.road ? address.road : ""}
      />
      <p className="input__error">{errors.road?.message}</p>

      <label className="input__label"> Ville  </label>
      <input
        type="text"
        {...register("city")}
        className="input__text"
        defaultValue={address && address.city ? address.city : ""}
      />
      <p className="input__error">{errors.city?.message}</p>

      <label className="input__label"> Code postal  </label>
      <input
        type="text"
        {...register("postalCode")}
        className="input__text"
        defaultValue={address && address.postalCode ? address.postalCode : ""}
      />
      <p className="input__error">{errors.postalCode?.message}</p>

      {isPErrorFromBackEndOpen ?  
        <p className="input__error message__error">{messageFromBackEnd}</p>
        :""}

      <div className="buttons-wrapper-ModalChange">

        <button 
          disabled={ !isValid} 
          type="submit" 
          className={isValid ? "btn btn-blue" : "btn btn-blue-invalid"}>
            valider
        </button>

        <button
          onClick={() => onClose() } 
          className={"btn btn-white-blue btn-last"}>                
            annuler
        </button>

      </div>

    </form>

    {isModalValidationMessageOpen && 
      <ModalValidationMessageModif 
      onClose={hideModal} 
      title=" Vos coordonnées ont été mise à jour !"/>
    }

   </>
  )
}



