import { useState } from 'react'
import NavbarAccount from "../../components/navbar/NavbarAccount"
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch, useStore } from 'react-redux'
import SelectHub from '../../components/select/SelectHub';
import SelectHubBack from '../../components/select/SelectHubBack';
import SelectString from '../../components/select/SelectString';
import SelectRopeString from '../../components/select/SelectRopeString';
import { setUserInfo} from '../../store/userSlice'
import {resetStringFromShopChoice} from '../../store/cartSlice'
import ModalValidationChangesPreferences from '../../components/modal/modalValidation/ModalValidationChangePreferences';



export default function PreferencePlayer() {

  const userInfo =  useSelector((state) => state.user.userInfo);
  const xsrfToken = useSelector((state) => state.xsrfToken);
  const stringFromShop =  useSelector((state) => state.cart.stringFromShopChoice);


  const [stringFromPlayer, setStringFromPlayer] = useState(userInfo.stringFromPlayer);
  const [stringRopeChoice, setStringRopeChoice] = useState(userInfo.string_rope);
  const [hubChoice, setHubChoice] = useState(userInfo.hubInfo);
  const [stringFromPlayerSelected, setStringFromPlayerSelected] = useState(false);
  const [hubBackChoice, setHubBackChoice] = useState(userInfo.hubBackInfo);
  const [racquetPlayer, setRacquetPlayer] = useState(userInfo.racquet_player);
  const [isSubmenuValidationOpen, setSubmenuValidation] = useState(false);
  const [numberKnotChoice, setnumberKnotChoice] = useState(userInfo.numberKnot);

 

  // par défault on corde avec 4 noeuds
  if (numberKnotChoice==null){
    setnumberKnotChoice("4")
  };

  const store = useStore()


  //recupération de la saisie de la marque/type de la raquette
  const handleRacquetPlayerChange = (event) => {
    const value = event.target.value;
    setRacquetPlayer(value)
  };
  //recupération de la saisie de la marque/type du cordage fournit par le joueur
  const handleOwnStringPlayerChange = (event) => {
    const value = event.target.value;
    setStringFromPlayer(value)
  };
 

  //fonction asynchrone vers le backend pour modifier
  //les préférences de cordages 
  const savePreferencePlayer  = async function (data) {

    // met à null l'une des deux valeurs selon cordage du joueur ou du magazin choisi
    let stringFromShopId = ""
    let stringFromPlayerToSend = ""
    if( stringFromShop !== null && stringFromShop !== undefined && stringFromPlayerSelected === false  ) {
      stringFromShopId = stringFromShop.id;
      stringFromPlayerToSend = null;
    }else{       
      stringFromShopId = null;
      stringFromPlayerToSend = stringFromPlayer ;}

    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/user/savePreferencePlayer`, {
        mode: "cors",
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({ userId: userInfo.id, stringFromPlayer: stringFromPlayerToSend, stringFromShopId: stringFromShopId, 
          stringRopeChoice: stringRopeChoice,  racquetPlayer: racquetPlayer, hubChoiceId: hubChoice.id, hubBackChoiceId: hubBackChoice.id, numberKnotChoice: numberKnotChoice, }),
        headers: {
          "Content-Type": "application/json",
          "x-xsrf-token": xsrfToken   
        }
    })

      if (!response.ok) {
        const result = await response.json();
        throw new Error(` ${result.message}`);
      }else {
        const result = await response.json();
        console.log(result.message);
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }

   //fonction asynchrone vers le backend pour recuperer
  //les infos utilisateurs avec les modifications venant d'être apporté  
  const loadDataPlayerAfterModif = async function (data) {
    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/user/loadDataPlayerAfterModif`, {
        mode: "cors",
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({ email: userInfo.email }),
        headers: {
          "Content-Type": "application/json",
          "x-xsrf-token": xsrfToken 
        }
    })

      if (!response.ok) {
        const result = await response.json();
        throw new Error(` ${result.message}`);
      }else {
        const result = await response.json();
        console.log(result.message);
        const updatedPlayerData = result.updatedPlayerData
        console.log("updatedPlayerData", updatedPlayerData);
        store.dispatch(setUserInfo(updatedPlayerData));
        store.dispatch( resetStringFromShopChoice(updatedPlayerData.stringInfo))
      }
    }
    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }

  // fonction qui appele la fonction pour sauvegarder les preference joueur 
  //et ensuite reacharge les modifs  
  const onSubmit = async () => {
    try {
      await savePreferencePlayer();
      await loadDataPlayerAfterModif();
      setSubmenuValidation(true);
    } catch (err) {
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  };
  

  //console.log("numberKnotChoice", numberKnotChoice)

  //console.log("userInfo", userInfo)
  //console.log("stringFromShop", stringFromShop)
  //console.log("stringFromplayer", stringFromPlayer)

  
  return (
  <>
    <NavbarAccount />

    <main className="stringing__main">

      <div className=" stringing__bg"> </div>

      <section className=" prefPlayer__contenair ">

     
        <div className="stringing-header__wrapper">

          <h1 className="account__header__h1">
            choisissez  vos preférences 
          </h1>

        </div>

        <div className="stringing-form__contenair">

          {/* choix du cordage*/ }
          <div className=' stringing-form__section-wrapper'>

            <label className="stringing-form__label">Cordage </label>

            <SelectString setStringFromPlayerSelected={setStringFromPlayerSelected} setStringFromPlayer ={setStringFromPlayer}  />

            { stringFromShop !== null && stringFromShop !== undefined && stringFromPlayerSelected === false &&  (
              
              <>
                <div className='stringing-form__own-string-wrapper'> 

                  <div className="validation-bubble-checked">
                    <span>&#10003;</span>
                  </div>

                  <div className="stringing-form__text-h2">
                  Cordage choisi : &nbsp;
                  </div>
                  
                </div>

                <div className='stringing-form__string-wrapper '>
                  
                  <NavLink to={`/fiche_produit/cordage/${stringFromShop.id}`} 
                  className=" stringing-form__string-link ">

                    <img crossOrigin="anonymous" src={stringFromShop.image_url} 
                    alt={stringFromShop.model} className="stringing-form__string-img" />

                    <div className='stringing-form__string-product-info-wrapper '>
                      <div>{stringFromShop.mark}</div>
                      <div>{stringFromShop.model}</div>
                      <div>{stringFromShop.price} €</div>
                    </div>

                  </NavLink>
                </div>
              </>

            ) }


            {stringFromPlayerSelected === true  || (stringFromPlayer !== null && stringFromShop === null) ? (

              <div>
                <div className='stringing-form__own-string-wrapper'> 

                  <div className="validation-bubble-checked ">
                    <span>&#10003;</span>
                  </div>

                  <div className="stringing-form__text-h2">
                  Je fournis mon propre cordage (pose 10 €)
                  </div>
                  
                </div>


                <div className='stringing-form__section-wrapper string-description'>

                  <label className="stringing-form__label stringing-form__sub-label">
                    Descriptif de votre cordage 
                  </label>
                  <input
                  value={stringFromPlayer !== null ? stringFromPlayer : ""} 
                  type="text"
                    className="stringing-form__input-text"
                    onClick={() => setStringFromPlayer("")} 
                    onChange={handleOwnStringPlayerChange}
                  />

                </div>  
              </div>
            ) : null}

          </div>

          {/* choix de la tension*/ }
          <div className='stringing-form__section-wrapper'>
            <label className="stringing-form__label" > Choix de la tension  </label>
            <SelectRopeString setStringRopeChoice= {setStringRopeChoice} />

            { stringRopeChoice && stringRopeChoice !== ""? (
              
              <>
                <div className='stringing-form__own-string-wrapper'> 

                  <div className="validation-bubble-checked     ">
                    <span>&#10003;</span>
                  </div>

                  <div className="stringing-form__text-h2">
                  Tension de cordage choisi :&nbsp;
                  <span className='stringing__important-info'> 
                    {stringRopeChoice} kg 
                  </span>
                  </div>
                  
                </div>

                <div className='number-knot__wrapper'> 

                  <div className='number-knot__title'> Posé avec : </div>

                  <div className='number-knot__wrapper'>

                    <div className='number-knot__input-checkbox'>
                      <input
                        type="checkbox"
                        className="order-stringer-detail__checkbox"
                        onChange={() => setnumberKnotChoice("4")}
                        checked={numberKnotChoice === "4"}
                      />
                      <div className="order-stringer-detail__checkbox-text">
                        4 noeuds
                      </div>
                    </div>

                    <div className='number-knot__input-checkbox'>
                      <input
                        type="checkbox"
                        className="order-stringer-detail__checkbox"
                        onChange={() => setnumberKnotChoice("2")}
                        checked={numberKnotChoice === "2"}
                      />
                      <div className="order-stringer-detail__checkbox-text">
                        2 noeuds
                      </div>
                    </div>

                  </div>

                </div>
                  
              </>

            ) : null}

          </div>

          {/* saisie de la raquette*/ }
          <div className='stringing-form__section-wrapper'>

            <label className="stringing-form__label stringing-form__sub-label">
              Descriptif de votre raquette
            </label>
            <input
              value={racquetPlayer}
              type="text"
              className="stringing-form__input-text"
              onClick={() => setRacquetPlayer("")} 
              onChange={handleRacquetPlayerChange}
            />

          </div>  

          {/* choix du lieu de dépot*/ }
          <div className=' stringing-form__section-wrapper '>

            <label className="stringing-form__label" >Lieu de dépot </label>

            <SelectHub  setHubChoice={setHubChoice} />

            { hubChoice && hubChoice !== ""? (
              
              <>
                <div className='stringing-form__address-wrapper'> 

                  <div className="validation-bubble-checked     ">
                    <span>&#10003;</span>
                  </div>

                  <div className="stringing-form__text-h2">
                  Lieu de dépot choisi : &nbsp;
                  </div>

                  <span className='stringing__important-info'> 
                  {hubChoice.enterprise_name}
                  </span>

                </div>

                <div className="stringing-form__text-address">
                {hubChoice.road} - {hubChoice.city}
                </div>
                  
              </>

            ) : null}

          </div>

          {/* choix du lieu du retour*/ }
          <div className=' stringing-form__section-wrapper'>

            <label className="stringing-form__label" > Retour de service </label>

            <SelectHubBack setHubBackChoice={setHubBackChoice}/>

            { hubBackChoice && hubBackChoice !== "" ? (
              
              <>
                <div className='stringing-form__address-wrapper'> 

                  <div className="validation-bubble-checked     ">
                    <span>&#10003;</span>
                  </div>

                  <div className="stringing-form__text-h2">
                  Lieu de retour  :{""}
                  </div>

                  <span className='stringing__important-info'> 
                  {hubBackChoice.enterprise_name}
                  </span>

                </div>

                <div className="stringing-form__text-address">
                  {hubBackChoice.road} - {hubBackChoice.city}
                </div>

              </>

            ) : null}

          </div>

          <div className=" stringing-form__section-wrapper stringing-form__section-wrapper-button">
            
            <button 
              onClick={() => onSubmit()}
              type="submit"
              className="stringing-form__btn-order btn btn-blue" 
              >
              Sauvegarder mes choix
            </button>

            {isSubmenuValidationOpen && 
              <ModalValidationChangesPreferences
              setSubmenuValidation = {setSubmenuValidation}
              />
            }

            
          </div>

        </div>

      </section>

    </main>
  </>
    )
  }