import { useState, useEffect } from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { NavLink } from "react-router-dom"
import ModalConnexionOrSingupFromOrder from '../../components/modal/modalLoginOrSignup/ModalLoginOrSignupFromOrder';
import { useNavigate } from 'react-router-dom';
import { resetCart } from '../../store/cartSlice'
import { calculNumberArticle, calculTotalPrice } from '../../store/cartSlice';
//import logoPaiment from "../../assets/logo-Paiement-carte-bleu.webp"
//import logoPaypal from "../../assets/logo-paypal.jpeg"
//import { loadStripe } from '@stripe/stripe-js'

export default function Order() {

  const isConnected = useSelector(state => state.user.isConnected);
  const articleList = useSelector(state => state.cart.articleList);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const userInfo = useSelector(state => state.user.userInfo); 
  const xsrfToken = useSelector((state) => state.xsrfToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  //on récupère les infos du lieu et de la raquette depuis articleList 
  let racquetPlayer = null;
  let hubBackChoice = null;
  let hubChoice = null;
  if (articleList && articleList.length > 0) {
    for (const article of articleList) {
      if (
        article.categorie !== "balle" &&
        article.categorie !== "accessoire"
      ) {
        racquetPlayer = article.racquetPlayer;
        hubBackChoice = article.hubBackChoice;
        hubChoice = article.hubChoice;
        break; // Utilisation du break pour sortir de la boucle
      }else{
        console.log("on boucle")
      }
    }
    // Le reste de votre composant
  }

  //on arrive sur la page non connecté, le modal de connexion ou inscription s'affiche
  // transmet comme props au modal la fonction interrupteur on //off pour le X de fermeture 
  const [isModalConnexionOpen, setModalConnexionOpen] = useState(false);
  const closeModalConnexion = function(){
    setModalConnexionOpen(false);
  };

  //gestion du choix de paiement
  const [paiementInlineChecked, setPaiementInlineChecked] = useState(false);
  const [paiementInShopChecked, setPaiementInShopChecked] = useState(true);
  const handlePaiementInlineChange = () => {
    setPaiementInlineChecked(!paiementInlineChecked);
    setPaiementInShopChecked(false); // Décoche l'autre case si elle est cochée
    setShowError(false);
  };
  const handlePaiementInShopChange = () => {
    setPaiementInShopChecked(!paiementInShopChecked);
    setPaiementInlineChecked(false); // Décoche l'autre case si elle est cochée
    setShowError(false);
  };
  // gestion du cas ou pas de moyen de paiement a été selectionné
  const [showError, setShowError] = useState(false) ; 
  const  handleClickNoOptionPaiement =  (event) => {
    setShowError(true);
  }

  //logique pour paiement en ligne
  //const PUBLIC_KEY = "pk_live_51NGdYqI8HrVwrRfPvO0VCSPgquB0SZOcQeifdVeXzlryvLj2gpTf6EufvCPRJ7SD1M9iCjTY7ZTwySpWtjYibzb100TJ7uXJag"
  //const stripePromise =loadStripe (PUBLIC_KEY)
  const handleSubmitInlignePaiement =  (event) => {
    event.preventDefault();

    // Créez un formulaire virtuel pour envoyer les données
    const form = document.createElement('form');
    form.method = 'POST';

    // Traitement pour paiement en ligne
    form.action = 'https://click-backend.herokuapp.com/api/stripe/create-checkout-session';

    // Ajoutez un champ de formulaire caché avec la valeur de la liste d'articles
    const datasInput = document.createElement('input');
    datasInput.type = 'hidden';
    datasInput.name = 'datas';
    datasInput.value = JSON.stringify({ userInfo, articleList, totalPrice, hubChoice, hubBackChoice, xsrfToken, racquetPlayer });

    // Ajoutez le champ de formulaire au formulaire virtuel
    form.appendChild(datasInput);
    
    // Ajoutez le formulaire virtuel à la page et soumettez-le
    document.body.appendChild(form);
    form.submit();
  }

 //logique pour paiement en direct
 const handleClickShopPaiement = async (event) => {
    try{
      
      const response = await fetch(`https://click-backend.herokuapp.com/api/shop/paiement-in-shop`, {
        mode: "cors",
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({ userInfo, articleList, totalPrice, hubChoice, hubBackChoice, racquetPlayer }),
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
        dispatch(resetCart());
        navigate("/commande-passé")
        console.log(result)
        
      }
    }
    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }
  

  useEffect(() => {
    dispatch(calculNumberArticle());
    dispatch(calculTotalPrice());
  }, []);

  //console.log("articleList", articleList)
  //console.log("raquet player",racquetPlayer)
  //console.log("articleList",articleList)
  

  return (


    <main className="order__main">

      <div className="order__bg"></div>

      <section className="order__contenair">

        {isConnected  ? (

          <>
            {(articleList && articleList.length > 0) ? (
           <>   
          <h1 className="order__title"> Finaliser ma commande </h1>

          <div className="order__sub-contenair">

            {/*liste des articles */}
            <div className='order__contenair-cart'>

              <h2 className="order__sub-title"> récapitulatif </h2>

              <div className='order__cart-detail-wrapper'>

              {articleList.map((product, index) => {

                switch (product.categorie) {
                  case "fourniture et pose cordage":
                    return (

                      <div className='order-cart__product-wrapper-instal-with-string' key={index}>
                        {console.log("product",product)}

                        <div className='order-cart__instal-with-string-top'>

                          <div className='order-cart__text-weight-uppercase'>  Fourniture et pose cordage </div>

                          <div className='order-cart__product-price'>
                          <div>{(product.price * product.quantity).toFixed(2).toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €</div>
                          </div>

                        </div>


                          <div className='order-cart__content-on-one-line'>

                            <div className='order-cart__cordage'>

                              <div> Cordage : </div>

                              <NavLink 
                                key={index} 
                                to={`/fiche_produit/cordage/${product.stringFromShop.id}`}
                                className="order-cart__link-to-card-product"
                              >
                                { product.stringFromShop.mark  + " " + product.stringFromShop.model}
                              </NavLink>

                            </div>

                          </div>


                      </div>

                    );

                  case "pose cordage seule":
                    return (

                      <div className='order-cart__product-wrapper-installation' key={index}>

                        <div className='order-cart__product-info-wrapper-left'>

                          <div className='order-cart__text-weight-uppercase'>  Pose cordage </div>

                          <div> Cordage : votre propre cordage </div>
                          <div> {product.stringFromPlayer} </div>


                        </div>


                        <div className='order-cart__product-price'>
                        <div>{(product.price * product.quantity).toFixed(2).toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €</div>
                        </div>

                      </div>

                    );

                  case "balle": case "accessoire":

                    return (

                      <div className='order-cart__product-wrapper' key={index}>

                        <NavLink 
                          key={index} 
                          to={`/fiche_produit/${product.categorie}/${product.id}`}
                          className="order-cart__link-to-card-product"
                        >
                          <img
                            crossOrigin="anonymous"
                            src={product.image_url}
                            alt={product.model}
                            className="order-cart__image"
                          />
                        </NavLink>

                        <div className='order-cart__product-info-wrapper'>

                          <div className='order-cart__product-info-wrapper-left'>
                            <div>
                              <div className='order-cart__text-weight-uppercase'>{product.categorie}</div>
                              <div >{product.mark}</div>
                              <div>{product.model}</div>   
                              <div> Quantité : {product.quantity}</div> 
                            </div>

                          </div>

                          <div className='order-cart__product-price'>
                          <div>{(product.price * product.quantity).toFixed(2).toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €</div>
                          </div>

                        </div>

                      </div>

                    );

                  default:
                    return null;
                }

              })}
          

              </div>

              <div className='cart-summary__total-line'>
                <div> Total </div>
                <div> {totalPrice} € </div>
              </div>

            </div>

            {/*lieu de dépot et retour */}
            <div className="order__contenair-info" > 

              <h2 className="order__sub-title"> Lieu de dépot et retour </h2>

              <div className='order-hub__title'> Dépot :</div>
              <div> {hubChoice.enterprise_name} </div>
              <div> {hubChoice.road} - {hubChoice.city} </div>

              <div className='order-hub__title'> Retour de service :</div>
              <div> {hubBackChoice.enterprise_name} </div>
              <div> {hubBackChoice.road} - {hubBackChoice.city} </div>

            </div>

            {/*paiement en ligne */}
            <div className="order__contenair-info" > 

              <h2 className="order__sub-title"> Moyen de paiement </h2>

              <div className="order_paiement-mode-wrapper">

                {/*paiement en ligne en attente
                <div className="order_paiement-mode-subWrapper">

                  <label className="order_checkbox_label">
                    <input
                      type="checkbox"
                      name="paiementInline"
                      className="order_checkbox_input"
                      checked={paiementInlineChecked}
                      onChange={handlePaiementInlineChange}                    />
                    Paiement en ligne
                  </label>
                  <img src={logoPaiment} alt="logo moyen de paiement" className="logo-paiement" />
                  <img src={logoPaypal} alt="logo moyen de paiement" className="logo-paiement" />
                </div>
                */}

                <div className="order_paiement-mode-subWrapper">

                  <label className="order_checkbox_label">
                    <input
                      type="checkbox"
                      name="paiementInShop"
                      className="order_checkbox_input"
                      checked={paiementInShopChecked}
                     />
                  Paiement en boutique
                  </label>
                  <div className='order_checkbox-text-under'> 
                    Le règlement se fera lors de <br/> votre passage en boutique
                  </div>

                </div>

              </div>

            </div>

            {/*moyen de paiement*/}
            <div className="order__contenair-info order__contenair-info-button" > 

              {showError && <p className="input__error message__errorOrderPaiement">Veuillez saisir un mode de paiement, merci !</p>}

              { paiementInlineChecked===true ?
                <form onSubmit={handleSubmitInlignePaiement}>
                  <button 
                    className="btn btn-green btn-commander btn-cart" 
                    type="submit">
                      Commander
                    </button>
                </form> : ""                
              }


              { paiementInShopChecked===true ?
        
                <button 
                  onClick={handleClickShopPaiement}
                  className="btn btn-green btn-commander btn-cart" 
                  type="submit">
                    Commander
                </button>
                :   ""              

              }

              { paiementInShopChecked===false && paiementInlineChecked===false ?
        
                <button 
                  onClick={handleClickNoOptionPaiement}
                  className="btn btn-green btn-commander btn-cart" 
                  type="submit">
                    Commander
                </button>
                :   ""              

              }

            </div>

          </div>
          
          </>
            ) : ""}
          </>

          ) : (

          <ModalConnexionOrSingupFromOrder 
          closeModalConnexion={closeModalConnexion}/>

          )
        }

      </section>

    </main>
  );

}





