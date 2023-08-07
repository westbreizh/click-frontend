import { useEffect, useState } from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { NavLink } from "react-router-dom"
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import ModalConnexionOrSingupFromOrder from '../../components/modal/modalLoginOrSignup/ModalLoginOrSignupFromOrder';
import CheckoutForm from '../../stripe/CheckoutForm';
import logoPaiment from "../../assets/logo-Paiement-carte-bleu.webp"
import logoPaypal from "../../assets/logo-paypal.jpeg"


export default function Order() {

  const isConnected = useSelector(state => state.user.isConnected);
  const hubChoice = useSelector(state => state.cart.hubChoice);
  const articleList = useSelector(state => state.cart.articleList);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const stringingPrice = useSelector(state => state.cart.stringingPrice);
  const hubBackChoice = useSelector(state => state.cart.hubBackChoice);
  const userInfo = useSelector(state => state.user.userInfo);

  const token = useSelector((state) => state.user.token);
  const PUBLIC_KEY = "pk_live_51NGdYqI8HrVwrRfPvO0VCSPgquB0SZOcQeifdVeXzlryvLj2gpTf6EufvCPRJ7SD1M9iCjTY7ZTwySpWtjYibzb100TJ7uXJag"
   const stripePromise =loadStripe (PUBLIC_KEY)

  const dispatch = useDispatch();

  //ne sert qu'à envoyer une prop qui avait été défini dans les composant enfant
  const [isModalConnexionOpen, setModalConnexionOpen] = useState(false);
  const closeModalConnexion = function(){
    setModalConnexionOpen(false);
  };

  const [paiementInlineChecked, setPaiementInlineChecked] = useState(false);
  const [paiementInShopChecked, setPaiementInShopChecked] = useState(false);

  const handlePaiementInlineChange = () => {
    setPaiementInlineChecked(!paiementInlineChecked);
    setPaiementInShopChecked(false); // Décoche l'autre case si elle est cochée
  };

  const handlePaiementInShopChange = () => {
    setPaiementInShopChecked(!paiementInShopChecked);
    setPaiementInlineChecked(false); // Décoche l'autre case si elle est cochée
  };



 // gestion de l'affichage de l'erreur dans la balise p
 const [showError, setShowError] = useState(false) ;



  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Créez un formulaire virtuel pour envoyer les données
    const form = document.createElement('form');
    form.method = 'POST';

    if (!paiementInlineChecked && !paiementInShopChecked) {
      setShowError(true);
      return; // Arrêter la soumission du formulaire en cas d'erreur
    }
  
    if (paiementInlineChecked) {
      // Traitement pour paiement en ligne
      form.action = 'https://click-backend.herokuapp.com/api/stripe/create-checkout-session';
  
      // Ajoutez un champ de formulaire caché avec la valeur de la liste d'articles
      const datasInput = document.createElement('input');
      datasInput.type = 'hidden';
      datasInput.name = 'datas';
      datasInput.value = JSON.stringify({ userInfo, articleList, totalPrice, hubChoice, hubBackChoice, token });
  
      // Ajoutez le champ de formulaire au formulaire virtuel
      form.appendChild(datasInput);
    } else if (paiementInShopChecked) {
      // Traitement pour paiement en shop
      form.action = 'https://click-backend.herokuapp.com/api/autre-endpoint-paiement-in-shop';
  
      const shopInput = document.createElement('input');
      shopInput.type = 'hidden';
      shopInput.name = 'montant';
      shopInput.value = JSON.stringify({ userInfo, articleList, totalPrice, hubChoice, hubBackChoice, token });
      form.appendChild(shopInput);
    }
  
    // Ajoutez le formulaire virtuel à la page et soumettez-le
    document.body.appendChild(form);
    form.submit();
  };
  
  
  



  return (


    <main className="order__main">

      <div className="order__bg"></div>

      <section className="order__contenair">

        {isConnected ? (

          <>

          <h1 className="order__title"> Finaliser ma commande </h1>

          <div className="order__sub-contenair">


            <div className='order__contenair-cart'>

              <h2 className="order__sub-title"> récapitulatif </h2>

              <div className='order__cart-detail-wrapper'>

              {articleList.map((product, index) => {

                switch (product.categorie) {

                  case "fourniture et pose cordage":
                    return (

                      <div className='order-cart__product-wrapper-instal-with-string' key={index}>

                        <div className='order-cart__instal-with-string-top'>

                          <div className='order-cart__text-weight-uppercase'>  Fourniture et pose cordage </div>

                          <div className='order-cart__product-price'>
                          <div>{(product.price * product.quantity).toFixed(2).toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €</div>
                          </div>

                        </div>

                          <div className='order-cart__content-on-one-line'>
                            <div>Pose cordage </div> 
                            <div> {stringingPrice}€ </div>
                          </div>

                          <div className='order-cart__content-on-one-line'>

                            <div className='order-cart__cordage'>
                              <div> Cordage : </div>
                              
                            </div>

                            <div>{product.stringChoice.price} € </div>

                          </div>

                          <NavLink 
                            key={index} 
                            to={`/fiche_produit/cordage/${product.stringChoice.id}`}
                            className="order-cart__link-to-card-product"
                          >
                            { product.stringChoice.mark  + " " + product.stringChoice.model}
                          </NavLink>

                      </div>

                    );

                  case "pose cordage seule":
                    return (

                      <div className='order-cart__product-wrapper-installation' key={index}>

                        <div className='order-cart__product-info-wrapper-left'>

                          <div className='order-cart__text-weight-uppercase'>  Pose cordage </div>

                          <div> Cordage : votre propre cordage </div>

                        </div>


                        <div className='order-cart__product-price'>
                            <div>{parseFloat((product.price * product.quantity).toFixed(2))} €</div>
                        </div>

                      </div>

                    );

                  case "balle":
                  case "accessoire":
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
                            <div>{parseFloat((product.price * product.quantity).toFixed(2))} €</div>
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

            <div className="order__contenair-info" > 

              <h2 className="order__sub-title"> Lieu de dépot et retour </h2>

              <div className='order-hub__title'> Dépot :</div>
              <div>
                {hubChoice.enterprise_name}
                </div>

                <div>
                {hubChoice.road} - {hubChoice.city}
                </div>


              <div className='order-hub__title'> Retour de service :</div>
              <div>
                {hubBackChoice.enterprise_name}
                </div>

                <div>
                {hubBackChoice.road} - {hubBackChoice.city}
                </div>




            </div>


            <div className="order__contenair-info" > 

              <h2 className="order__sub-title"> Moyen de paiement </h2>

              <div className="order_paiement-mode-wrapper">

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

                <div className="order_paiement-mode-subWrapper">

                  <label className="order_checkbox_label">
                    <input
                      type="checkbox"
                      name="paiementInShop"
                      className="order_checkbox_input"
                      checked={paiementInShopChecked}
                      onChange={handlePaiementInShopChange}                  />
                  Paiement en boutique
                  </label>
                  <div className='order_checkbox-text-under'> 
                    Le règlement se fera lors de <br/> votre passage en boutique
                  </div>

                </div>

              </div>

            </div>


            <div className="order__contenair-info order__contenair-info-button" > 



            {showError && <p className="input__error message__error">Veuillez saisir un mode de paiement, merci !</p>}
              <form onSubmit={handleSubmit}>
                  <button 
                  className="btn btn-green btn-commander btn-cart" 
                  type="submit">
                    Commander
                  </button>
              </form>

            </div>



          </div>

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





