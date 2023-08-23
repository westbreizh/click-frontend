
import { useState } from 'react'
import { useSelector } from "react-redux"
import NavbarAccount from "../../components/navbar/NavbarAccount"
import ModalCreateOrUploadCoordinate from "../../components/modal/modalReset/ModalCreateOrUploadCoordinates"


export default function PreferencePlayer() {

  const userInfo =  useSelector((state) => state.user.userInfo);
  console.log("userInfo", userInfo)


  const hubString = userInfo.hub;
  const hub = JSON.parse(hubString);
  console.log("hub", hub);



  // gestion de l'ouverture du modale change e-mail
  const [isModalChangeEmailOpen, setModalChangeEmailOpen] = useState(false) ;
  const handleClickToOpenModalEmail = () => {
    setModalChangeEmailOpen(true);
  };
  const hideModalEmail = function(){
    setModalChangeEmailOpen(false);
  };

  // gestion de l'ouverture du modale change password
  const [isModalChangePasswordOpen, setModalChangePasswordOpen] = useState(false) ;
  const handleClickToOpenModalPassword = () => {
    setModalChangePasswordOpen(true);
  };
  const hideModalPassword = function(){
    setModalChangePasswordOpen(false);
  };

  // gestion de l'ouverture du modale de l'adresse
  const [isModalCreateOrUploadAdressOpen, setModalCreateOrUploadAdressOpen] = useState(false) ;
  const handleClickToOpenModalAdress = () => {
    setModalCreateOrUploadAdressOpen(true);
  };
  const hideModalCreateOrUploadAdress = function(){
  setModalCreateOrUploadAdressOpen(false);
  };


  return (

  <>
      <NavbarAccount />

      <main className="account__main">

        <div className="account__bg"> </div>

        <section className="account__contenair">

          <div className="account__contenair">

            <div className="account__header">

              <h1 className="account__header__h1">
                Vos prérences 
              </h1>

            </div>

            <div className="submenu__wrapper">

              <h3 className="submenu__title">
                Vos préférences cordages
              </h3>





              <div className='modal-atc__message-text'>
                Lieu de dépot choisi :
               </div>

  

               <button  className={"info-login__button"} onClick={handleClickToOpenModalAdress}>
                Renseignez ou modifier vos préférences
              </button>

              {isModalCreateOrUploadAdressOpen && <ModalCreateOrUploadCoordinate onClose={hideModalCreateOrUploadAdress}/>}






      
          </div>




          </div>

        
   









      
        </section>

      </main>

  </>
    
  )
}