import { useState } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux'
import { addInstallationString, calculNumberArticle, updateStringingPrice } from "../../store/cartSlice"
import { NavLink } from 'react-router-dom';
import SelectHub from '../../components/select/SelectHub';
import SelectHubBack from '../../components/select/SelectHubBack';
import SelectString from '../../components/select/SelectString';
import SelectRopeString from '../../components/select/SelectRopeString';
import ModalValidationAddToCartInstallation from '../../components/modal/modalValidation/ModalValidationAddToCartInstallation';
import { setUserInfo} from '../../store/userSlice'
import {resetStringFromShopChoice} from '../../store/cartSlice'

export default function Stringing() {

  const userInfo =  useSelector((state) => state.user.userInfo);
  const stringFromShop =  useSelector((state) => state.cart.stringFromShopChoice);
  const stringingPriceWithStringFromShop = useSelector(state => state.cart.stringingPriceWithStringFromShop);
  const stringingPriceWithStringFromAnotherWhere= useSelector(state => state.cart.stringingPriceWithStringFromAnotherWhere);
  const stringingPrice= useSelector(state => state.cart.stringingPrice);

  const isConnected = useSelector(state => state.user.isConnected);
  const token = useSelector(state => state.user.token);

  const [stringFromPlayer, setStringFromPlayer] = useState(userInfo.stringFromPlayer);


  const [stringRopeChoice, setStringRopeChoice] = useState(userInfo.string_rope);
  const [hubChoice, setHubChoice] = useState(userInfo.hubInfo);
  const [stringFromPlayerSelected, setStringFromPlayerSelected] = useState(false);
  const [stringFromPlayerOrigin, setStringFromPlayerOrigin] = useState(null);
  const [hubBackChoice, setHubBackChoice] = useState(userInfo.hubBackInfo);
  const [racquetPlayer, setRacquetPlayer] = useState(userInfo.racquet_player);
  const [isSubmenuValidationOpen, setSubmenuValidation] = useState(false);
  const [isCheckBoxChecked, setCheckBoxChecked] = useState(false);

  const dispatch = useDispatch()
  const store = useStore()

  console.log("userInfo", userInfo)
  //console.log("stringFromShop", stringFromShop)
  //console.log("stringFromplayer", stringFromPlayer)
  console.log("prix de la pose cordage ", stringingPrice)

 console.log("prix de la pose cordage fourni ", stringingPriceWithStringFromAnotherWhere)
  
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
 


  // gestion de l'état de validation du bouton pour ajouter le produit
  const isValid =
  (hubChoice ?? null) !== null &&   (hubBackChoice ?? null) !== null &&   (stringRopeChoice ?? null) !== null &&  racquetPlayer !== "" &&   racquetPlayer !== null && racquetPlayer !== undefined &&  
  ( ( stringFromPlayer !== "" && stringFromPlayer !== undefined  && stringFromPlayer !== null && stringFromPlayerOrigin !== null)  || (stringFromShop ?? null) !== null );
 
  


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
        body: JSON.stringify({ userId: userInfo.id, stringFromPlayer: stringFromPlayerToSend, stringFromShopId: stringFromShopId, stringRopeChoice: stringRopeChoice, racquetPlayer: racquetPlayer, hubChoiceId: hubChoice.id, hubBackChoiceId: hubBackChoice.id, }),
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

  // fonction qui ajoute, enrgistre la pose du cordage dans le panier du  store redux 
  // si la case "sauvegarder mes choix " est cliqué on envoit au backend les infos pour sauvegardes préférences cordages 
  const onSubmit = async () => {
    try {
      if (isCheckBoxChecked) {
        await savePreferencePlayer();
        await loadDataPlayerAfterModif();
      }
  
      let article = {};
  
      if (stringFromPlayer !== null && stringFromShop === null) {
        if (stringFromPlayerOrigin === "shop") {
          article = {
            categorie: "pose cordage seule",
            quantity: 1,
            price: stringingPriceWithStringFromShop,
          };
        } else if (stringFromPlayerOrigin === "anotherwhere") {
          article = {
            categorie: "pose cordage seule",
            quantity: 1,
            price: stringingPriceWithStringFromAnotherWhere,
          };
        }
        article = {
          ...article,
          stringRopeChoice,
          stringFromPlayer,
          racquetPlayer,
          hubChoice,
          hubBackChoice,
        };
      } else if (stringFromShop !== null && stringFromPlayerSelected === false) {
        article = {
          categorie: "fourniture et pose cordage",
          price: parseFloat(stringFromShop.price).toFixed(2),
          quantity: 1,
          stringRopeChoice,
          stringFromShop,
          racquetPlayer,
          hubChoice,
          hubBackChoice,
        };
        dispatch(calculNumberArticle());
      }
  
      console.log(article);
      dispatch(addInstallationString(article));
      setSubmenuValidation(true);
    } catch (err) {
      const errorMessage = err.toString();
      console.log(errorMessage);
      // Gérer les erreurs ici si nécessaire
    }
  };
  
  
   
  


  return (

    <main className="stringing__main">

      <div className=" stringing__bg"> </div>

      <section className="stringing__contenair">

        <div className="stringing-header__wrapper">

          <h1 className="stringing-header__title">
            Commandez votre cordage!
          </h1>

        </div>


        <div className="stringing-form__contenair">

          <div className='string stringing-form__section-wrapper'>

            <label className="stringing-form__label">Cordage</label>

            <SelectString setStringFromPlayerSelected={setStringFromPlayerSelected} setStringFromPlayer ={setStringFromPlayer}  />

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
                        Cordage acheté en boutique
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
                        Cordage acheté hors boutique
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
            
            {isConnected === true  ?  (  
              <div className='stringing-form__wrapper-input-checkbox'>
                <input
                    type="checkbox"
                    className="order-stringer-detail__checkbox"
                    onClick={() => setCheckBoxChecked(!isCheckBoxChecked)}                />                  
                  <div className="order-stringer-detail__checkbox-text"> 
                    Sauvegarder mes choix
                  </div>
              </div> 
            ) : null}
 
            <button 
              onClick={() => onSubmit()}
              disabled={ !isValid} 
              type="submit" 
              className={`stringing-form__btn-order btn btn-blue ${isValid ? "" : "btn-blue-invalid"}`}
              >
              Push cordage in the popoche
            </button>


            {isSubmenuValidationOpen && 
              <ModalValidationAddToCartInstallation
              setSubmenuValidation = {setSubmenuValidation}
              />
            }

          </div>

        </div>

      </section>

    </main>

    )
  }



