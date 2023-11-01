import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { useParams } from 'react-router-dom';
import BackNavArrow from '../../components/button/BackNavArrow';
import BackNavArrowStringer from "../../components/button/BackNavArrowStringer";

export default function CoordinatePlayer() {

  const [userInfo, setUserInfo] = useState("") ;
  const [address, setUserAddress] = useState("") ;


  // on récupère l'id dans l'url de la page
  const userIdParam = useParams()
  const userId = userIdParam.userId
 const token = useSelector((state) => state.token);

  //fonction asynchrone vers le backend pour recupérer 
  //les infos  joueur 
  const loadOnePlayer  = async function (data) {
    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/stringer/onePlayer`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ userId}),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        }
    })

      if (!response.ok) {
        const result = await response.json();
        throw new Error(` ${result.message}`);
      }else {
        const result = await response.json();
        setUserInfo(result.userInfo);
        console.log("userInfo", result.userInfo)
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }

  // charger la listes des commandes  au chargement de la page
  useEffect(() => {
    loadOnePlayer ()
  },[])

  //console.log(address)


  return (

  <>

    <main className="order-stringer__main">

      <div className="order-stringer__bg"> </div>

        <section className="order-stringer__contenair">

          <div className="account__contenair">

            <div className="account__header">
              <BackNavArrowStringer/>
              <BackNavArrow/>
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

              <div className="info-perso__wrapper">
                <div className="info-perso__title"> adresse :</div>
                {userInfo.road? (
                  <div className="info-perso__value">{userInfo.road}</div>
                ) : (
                  <div className="info-perso__value"> </div>
                )}
              </div>

              <div className="info-perso__wrapper">
                <div className="info-perso__title"> code postal</div>
                {userInfo.postal_code? (
                  <div className="info-perso__value">{userInfo.postal_code}</div>
                ) : (
                  <div className="info-perso__value"> </div>
                )}
              </div>

              <div className="info-perso__wrapper">
                <div className="info-perso__title"> ville :</div>
                {userInfo.city ? (
                  <div className="info-perso__value">{userInfo.city}</div>
                ) : (
                  <div className="info-perso__value"> </div>
                )}
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