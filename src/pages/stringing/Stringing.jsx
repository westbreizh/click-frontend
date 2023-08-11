
import { useState, useEffect } from 'react';
import {  useSelector, useDispatch } from 'react-redux'
import { addInstallationString, calculNumberArticle, updateStringingPrice, updateRacquetPlayer } from "../../store/cartSlice"
import { NavLink } from 'react-router-dom';
import SelectHub from '../../components/select/SelectHub';
import SelectHubBack from '../../components/select/SelectHubBack';
import SelectString from '../../components/select/SelectString';
import SelectRopeString from '../../components/select/SelectRopeString';
import ModalValidationAddToCartInstallation from '../../components/modal/modalValidation/ModalValidationAddToCartInstallation';



export default function Stringing() {



  let hubChoice = useSelector(state => state.cart.hubChoice);
  const hubBackChoice = useSelector(state => state.cart.hubBackChoice);
  const stringRopeChoice = useSelector(state => state.cart.stringRopeChoice);
  const stringChoice = useSelector(state => state.cart.stringChoice[0]);
  const stringingPrice = useSelector(state => state.cart.stringingPrice);
  const raquetPlayerStoreReduxCart = useSelector(state => state.cart.racquetPlayer);
  console.log("raquet edux", raquetPlayerStoreReduxCart)
  //const isConnected = useEffect(state => state.user.isConnected)

  const [isSubmenuValidationOpen, setSubmenuValidation] = useState(false);
  const [racquetPlayer, setRacquetPlayer] = useState(raquetPlayerStoreReduxCart);


  //const racquetPlayer = useSelector(state => state.user.userInfo.racquet_player);

  console.log("racquetplayer", racquetPlayer)

  const dispatch = useDispatch();
  dispatch(updateStringingPrice(10));

  const handleRacquetPlayerChange = (event) => {
    const value = event.target.value;
    setRacquetPlayer(value)
  };




  // gestion de l'état de validation du bouton pour ajouter le produit  
  const isValid =
    hubChoice !== "" &&
    hubBackChoice !== "" &&
    stringRopeChoice !== "" &&
    stringChoice.id !== "" &&
    racquetPlayer !== "" && 
    racquetPlayer !== null;
    ;

  // fonction qui ajoute, enrgistre la pose du cordage et ses options dans le panier du  store redux 
  const onSubmit= () => {
    if (stringChoice.id === "cordage fourni par le joueur") { 
      const article = {
        categorie:"pose cordage seule",
        quantity: 1,
        price: stringingPrice, 
        stringRopeChoice, 
        stringChoice}
        console.log(article)
        dispatch(addInstallationString(article))
        dispatch(updateRacquetPlayer(racquetPlayer))
        setSubmenuValidation(true)
        //registerPreferencePlayer(userEmail, hubChoice, stringRopeChoice, stringChoice )
    } else{ 
      const article = {
        categorie:"fourniture et pose cordage", 
        price: (stringingPrice+ parseFloat(stringChoice.price)).toFixed(2),
        quantity: 1,
        stringRopeChoice, 
        stringChoice
      }
      console.log(article)
      dispatch(addInstallationString(article))
      setSubmenuValidation(true)
      dispatch(calculNumberArticle());
      dispatch(updateRacquetPlayer(racquetPlayer))
      //registerPreferencePlayer(userEmail, hubChoice, stringRopeChoice, stringChoice )
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

          <div className="stringing-header__littleBitText">
            Le forfait de la pose du cordage est de {stringingPrice} €.  Le tarif du cordage dépend du model choisi.
          </div>

          <div className="stringing-header__littleBitText">
            Vous pouvez également déposez votre propre cordage avec votre raquette.
          </div>

        </div>


        <div className="stringing-form__contenair">


          <div className='string stringing-form__section-wrapper'>

            <label className="stringing-form__label">Cordage</label>

            <SelectString  />

            { stringChoice.id !== "cordage fourni par le joueur" && stringChoice.id !== "" ? (
              
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
                  <NavLink to={`/fiche_produit/cordage/${stringChoice.id}`} 
                  className=" stringing-form__string-link cart-content__link-to-card-product">

                    <img crossOrigin="anonymous" src={stringChoice.image_url} 
                    alt={stringChoice.model} className="stringing-form__string-img" />

                    <div className='stringing-form__string-product-info-wrapper '>
                      <div>{stringChoice.mark}</div>
                      <div>{stringChoice.model}</div>
                      <div>{stringChoice.price} €</div>
                    </div>

                  </NavLink>
                </div>
              </>

            ) : null}


            {stringChoice.id === "cordage fourni par le joueur"  ?  (

                <div className='stringing-form__own-string-wrapper'> 

                  <div className="stringing-form__validation-bubble-checked     ">
                    <span>&#10003;</span>
                  </div>

                  <div className='modal-atc__message-text'>
                  Je fournis mon propre cordage
                  </div>
                  
                </div>

            ) : null}

          </div>

          <div className=' rope stringing-form__section-wrapper'>
            <label className="stringing-form__label" > Choix de la tension  </label>
            <SelectRopeString />

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

            <SelectHub  />

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

            <SelectHubBack />

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

                <div>
                {hubBackChoice.enterprise_name}
                </div>

                <div>
                {hubBackChoice.road} - {hubBackChoice.city}
                </div>
                  
              </>

            ) : null}

          </div>




          <div className='string stringing-form__section-wrapper'>

            <label className="stringing-form__label">Descriptif raquette</label>
            <div> Veuillez saisir la marque et le modèle de votre raquette dans la zone de texte ci-dessous merci !</div>
            <input
              placeholder = {racquetPlayer}
              type="text"
              className="stringing-form__input-text"
              onChange={handleRacquetPlayerChange}
            />

          </div>  





          <div className=" stringing-form__section-wrapper stringing-form__section-wrapper-button">

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



