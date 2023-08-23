
import { useState } from 'react'
import { useSelector } from "react-redux"
import NavbarAccount from "../../components/navbar/NavbarAccount"
import ModalCreateOrUploadCoordinate from "../../components/modal/modalReset/ModalCreateOrUploadCoordinates"


export default function Coordinate() {

  const userInfo =  useSelector((state) => state.user.userInfo);

  console.log("userInfo", userInfo)


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
                edition de compte 
              </h1>

            </div>

            <div className="submenu__wrapper">

              <h3 className="submenu__title">
                Informations personnelles
              </h3>

              <div className="info-perso__wrapper">
                <div className="info-perso__title">Civilité :  </div>
                <div className="info-perso__value">{userInfo.civilite}</div>
              </div>

              <div className="info-perso__wrapper">
                <div className="info-perso__title">prénom : </div>
                <div className="info-perso__value">{userInfo.forename}</div>
              </div>

              <div className="info-perso__wrapper">
                <div className="info-perso__title">nom :  </div>
                <div className="info-perso__value">{userInfo.lastname}</div>
              </div>


              <div className="info-login__wrapper">
                <div className="info-login__title">E-Mail : </div>
                <div className="info-login__data">{userInfo.email}</div>
              </div>

            
            </div>


            <div className="submenu__wrapper">

              <h3 className="submenu__title">
                Coordonnées
              </h3>

              <button  className={"info-login__button"} onClick={handleClickToOpenModalAdress}>
                Renseignez ou modifier vos coordonnées
              </button>

              {isModalCreateOrUploadAdressOpen && <ModalCreateOrUploadCoordinate onClose={hideModalCreateOrUploadAdress}/>}


              <div className="info-perso__wrapper">
                <div className="info-perso__title"> adresse : </div>
                <div className="info-perso__value">{userInfo.road}</div>
              </div>


              <div className="info-perso__wrapper">
                <div className="info-perso__title"> code postal : </div>
                <div className="info-perso__value">{userInfo.postal_code}</div>
              </div>


              <div className="info-perso__wrapper">
                <div className="info-perso__title"> ville :</div>
                <div className="info-perso__value">{userInfo.city}</div>
              </div>

              <div className="info-perso__wrapper">
                <div className="info-perso__title"> Numéro de téléphone : </div>
                {userInfo.telephone ? (
                  <div className="info-perso__value">{userInfo.telephone}</div>
                ) : (
                  <div className="info-perso__value"> </div>
                )}
              </div>

              
            </div>

          </div>
      
        </section>

      </main>

  </>
    
  )
}