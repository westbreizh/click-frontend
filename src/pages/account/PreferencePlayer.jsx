
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
  const stringFromShop =  useSelector((state) => state.cart.stringFromShopChoice);
  const token = useSelector(state => state.user.token);

  const [stringFromPlayer, setStringFromPlayer] = useState(userInfo.stringFromPlayer);
  const [stringRopeChoice, setStringRopeChoice] = useState(userInfo.string_rope);
  const [hubChoice, setHubChoice] = useState(userInfo.hubInfo);
  const [stringFromPlayerSelected, setStringFromPlayerSelected] = useState(false);
  const [hubBackChoice, setHubBackChoice] = useState(userInfo.hubBackInfo);
  const [racquetPlayer, setRacquetPlayer] = useState(userInfo.racquet_player);
  const [isSubmenuValidationOpen, setSubmenuValidation] = useState(false);
  const [stringFromPlayerOrigin, setStringFromPlayerOrigin] = useState(userInfo.stringFromPlayerOrigin);
  const [numberKnotChoice, setnumberKnotChoice] = useState(userInfo.numberKnot);

  console.log("numberKnotChoice", numberKnotChoice)
  console.log("stringFromPlayerOrigin", stringFromPlayerOrigin)

  // par défault on corde avec 4 noeuds
  if (numberKnotChoice==null){
    setnumberKnotChoice("4")
  };

  const dispatch = useDispatch()
  const store = useStore()

  console.log("userInfo", userInfo)

  console.log("stringFromShop", stringFromShop)
  console.log("stringFromplayer", stringFromPlayer)



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
        body: JSON.stringify({ userId: userInfo.id, stringFromPlayer: stringFromPlayerToSend, stringFromShopId: stringFromShopId, 
          stringRopeChoice: stringRopeChoice,  racquetPlayer: racquetPlayer, hubChoiceId: hubChoice.id, hubBackChoiceId: hubBackChoice.id, stringFromPlayerOrigin: stringFromPlayerOrigin, numberKnotChoice: numberKnotChoice, }),
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
        console.log(result.message);
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }
    //fonction asynchrone vers le backend pour recuperer
  //les infos utilisateurs avec les modifications veant d'être apporté  
  const loadDataPlayerAfterModif = async function (data) {
    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/user/loadDataPlayerAfterModif`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ email: userInfo.email }),
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

  // fonction qui appele la fonction pour sauvegarder les preference joueur et ensuite reacharge les modifs  
  //  
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

          <div className='string stringing-form__section-wrapper'>

            <label className="stringing-form__label">Cordage</label>

            <SelectString setStringFromPlayerSelected={setStringFromPlayerSelected}   />

            { stringFromShop !== null && stringFromShop !== undefined && stringFromPlayerSelected === false &&  (
              
              <>
                <div className='stringing-form__own-string-wrapper'> 

                  <div className="stringing-form__validation-bubble-checked     ">
                    <span>&#10003;</span>
                  </div>

                  <div className='modal-atc__message-text'>
                  Cordage choisi :
                  </div>
                  
                </div>

                <div className='stringing-form__string-wrapper  modal-atc__product-wrapper'>
                  <NavLink to={`/fiche_produit/cordage/${stringFromShop.id}`} 
                  className=" stringing-form__string-link cart-content__link-to-card-product">

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

                  <div className="stringing-form__validation-bubble-checked     ">
                    <span>&#10003;</span>
                  </div>

                  <div className='modal-atc__message-text'>
                  Je fournis mon propre cordage
                  </div>


                </div>

                <div className='stringing-form__wrapper-input-checkbox'>
                    <input
                        type="checkbox"
                        className="order-stringer-detail__checkbox"
                        onClick={() => setStringFromPlayerOrigin("shop")}
                        checked={stringFromPlayerOrigin === "shop"}
                        />                  
                      <div className="order-stringer-detail__checkbox-text"> 
                         acheté en boutique (12 € la pose)
                      </div>
                  </div> 

                  <div className='stringing-form__wrapper-input-checkbox'>
                    <input
                        type="checkbox"
                        className="order-stringer-detail__checkbox"
                        onClick={() => setStringFromPlayerOrigin("anotherwhere")}
                        checked={stringFromPlayerOrigin === "anotherwhere"}
                        />                  
                      <div className="order-stringer-detail__checkbox-text"> 
                          acheté hors boutique (15 € la pose)
                      </div>
                  </div> 


                <div className='string stringing-form__section-wrapper'>

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

          <div className=' rope stringing-form__section-wrapper'>
            <label className="stringing-form__label" > Choix de la tension  </label>
            <SelectRopeString setStringRopeChoice= {setStringRopeChoice} />

            { stringRopeChoice && stringRopeChoice !== ""? (
              
              <>
                <div className='stringing-form__own-string-wrapper'> 

                  <div className="stringing-form__validation-bubble-checked     ">
                    <span>&#10003;</span>
                  </div>

                  <div className='modal-atc__message-text'>
                  Tension de cordage choisi :
                  </div>
                  
                </div>

                <div>
                {stringRopeChoice} kg
                </div>

                <div className='title_number-knot'> Posé avec : </div>

                <div className='wrapper_number-knot' >

                  <div className='stringing-form__wrapper-input-checkbox-knot'>
                      <input
                          type="checkbox"
                          className="order-stringer-detail__checkbox"
                          onClick={() => setnumberKnotChoice("4")}
                          checked={numberKnotChoice === "4"}
                          />                  
                        <div className="order-stringer-detail__checkbox-text"> 
                          4 noeuds
                        </div>
                  </div> 

                  <div className='stringing-form__wrapper-input-checkbox-knot'>
                    <input
                        type="checkbox"
                        className="order-stringer-detail__checkbox"
                        onClick={() => setnumberKnotChoice("2")}
                        checked={numberKnotChoice === "2"}
                      />                  
                      <div className="order-stringer-detail__checkbox-text"> 
                          2 noeuds
                      </div>
                  </div> 

                </div>


                  
              </>

            ) : null}

          </div>

          <div className='club stringing-form__section-wrapper '>

            <label className="stringing-form__label" >Lieu de dépot </label>

            <SelectHub  setHubChoice={setHubChoice} />


            { hubChoice && hubChoice !== ""? (
              
              <>
                <div className='stringing-form__own-string-wrapper'> 

                  <div className="stringing-form__validation-bubble-checked     ">
                    <span>&#10003;</span>
                  </div>

                  <div className='modal-atc__message-text'>
                  Lieu de dépot choisi :
                  </div>
                  
                </div>

                <div>
                {hubChoice.enterprise_name}
                </div>

                <div>
                {hubChoice.road} - {hubChoice.city}
                </div>
                  
              </>

            ) : null}

          </div>

          <div className=' club stringing-form__section-wrapper'>

            <label className="stringing-form__label" > Retour de service </label>

            <SelectHubBack setHubBackChoice={setHubBackChoice}/>

            { hubBackChoice && hubBackChoice !== "" ? (
              
              <>
                <div className='stringing-form__own-string-wrapper'> 

                  <div className="stringing-form__validation-bubble-checked     ">
                    <span>&#10003;</span>
                  </div>

                  <div className='modal-atc__message-text'>
                  Lieu de retour de service choisi :
                  </div>
                  
                </div>

                <div>{hubBackChoice.enterprise_name}</div>
                <div>{hubBackChoice.road} - {hubBackChoice.city} </div>


                  
              </>

            ) : null}

          </div>

          <div className='string stringing-form__section-wrapper'>

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