
import { useState } from 'react'
import { useSelector } from "react-redux"
import NavbarAccount from "../../components/navbar/NavbarAccount"
import ModalCreateOrUploadCoordinate from "../../components/modal/modalReset/ModalCreateOrUploadCoordinates"
import { NavLink } from 'react-router-dom';

export default function PreferencePlayer() {

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

            <div className="submenu__wrapper">


            <div className="account__header">

              <h1 className="account__header__h1">
                Préférences cordages 
              </h1>

            </div>




            <div className="submenu__wrapper">

              <div className="prefPlayer__wrapper">
                <div className="prefPlayer__title"> Votre raquette : </div>
                <div className="prefPlayer__value">{userInfo.racquet_player}</div>
              </div>

              <div className="prefPlayer__wrapper">
                <div className="prefPlayer__title">Cordage :  </div>
                
                <NavLink to={`/fiche_produit/cordage/${userInfo.stringInfo.id}`} 
                  className=" stringing-form__string-link cart-content__link-to-card-product">
                  <div className="prefPlayer__value">{userInfo.stringInfo.mark} / {userInfo.stringInfo.model}</div>
                </NavLink>

                <div className="prefPlayer__value">{userInfo.ownString_player}</div>


              </div>

              <div className="prefPlayer__wrapper">
                <div className="prefPlayer__title"> Tension de cordage  : </div>
                <div className="prefPlayer__value">{userInfo.string_rope} kg</div>
              </div>



              <div className="prefPlayer__wrapper">
                <div className="prefPlayer__title"> Lieu de dépot  : </div>
                <div>
                {userInfo.hubInfo.enterprise_name}
                </div>

                <div>
                {userInfo.hubInfo.road} - {userInfo.hubInfo.city}
                </div>
              </div>


              <div className="prefPlayer__wrapper">
                <div className="prefPlayer__title"> Lieu de retour  : </div>
                <div>
                {userInfo.hubBackInfo.enterprise_name}
                </div>

                <div>
                {userInfo.hubBackInfo.road} - {userInfo.hubBackInfo.city}
                </div>
              </div>




            
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