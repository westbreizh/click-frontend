import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {  useSelector, useDispatch } from 'react-redux'
import { calculNumberArticle, deleteArticle, calculTotalPrice  } from '../../store/cartSlice';
import DropDownSelectQuantity from '../../components/select/dropDownSelectQuantity';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom"
import ModalAskToAddString from '../../components/modal/modalValidation/ModalToAskToAddString';

export default function Cart() {

  const articleList = useSelector(state => state.cart.articleList);
  const numberArticle = useSelector(state => state.cart.numberArticle);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const [isArticleListWithoutString, setIsArticleListWithoutString] =useState(false)

  const dispatch = useDispatch();
  function handleClickDelete (index) { 
  dispatch (deleteArticle(index))
  }

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(calculNumberArticle());
    dispatch(calculTotalPrice());
  }, [articleList]);

  const isOnlyAccesories = (articleList, navigate) => {
  let containsCordages = false;

  for (const article of articleList) {
    if (
      article.categorie !== "balle" &&
      article.categorie !== "accessoire"
    ) {
      containsCordages = true;
      break; // Utilisation du break pour sortir de la boucle
    }
  }
  if (containsCordages) {
    console.log("Le panier contient des cordages.");
    setIsArticleListWithoutString(false);
    console.log("isArticleListWithoutString",isArticleListWithoutString)
    navigate("/commande")
  } else {
    console.log("Le panier ne contient que des accessoires ou des balles.");
    setIsArticleListWithoutString(true)
    console.log("isArticleListWithoutString",isArticleListWithoutString)
  }
  };

  const handleClickGoToOrder = () => {
    console.log("je vais construire ma fonction qui teste si je n'ai que des accessoires")
    isOnlyAccesories(articleList, navigate); // Passez navigate en tant qu'argument
  };


  // console.log("article dans panier",articleList )

    return (

      <main className="cart__main">

        <div className="cart__bg"></div>

        <section className="cart__contenair">

          {articleList.length > 0 ? (
            <>

              <div className='cart__content'>

                <div className='cart-content__first-line'>
                  <div className="cart-content__title"> panier </div>
                  <div className='cart-content__nbre-article'>
                    {numberArticle > 1 ? `( ${numberArticle} articles )` : `( ${numberArticle} article )`}
                  </div>
                </div>
    
                {articleList.map((product, index) => {                   

                  switch (product.categorie) {

                    case "fourniture et pose cordage":
                      return (

                        <div className='cart-content__product-wrapper-instal-with-string' key={index}>

                          <div className='cart-content__instal-with-string-top'>

                            <div className='cart-content__text-weight-uppercase'>  Fourniture et pose cordage </div>

                            <div className='cart-content__product-price'>
                            <div>{(product.price * product.quantity).toFixed(2).toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €</div>
                            </div>

                          </div>

                          <div className='cart-content__content-on-one-line'>

                            <div className='cart-content__cordage'>
                              <div> Cordage :</div>
                              <NavLink 
                                    key={index} 
                                    to={`/fiche_produit/cordage/${product.stringFromShop.id}`}
                                    className="cart-content__link-to-card-product"
                                  >
                                    {"  " + product.stringFromShop.mark + " " + product.stringFromShop.model}
                              </NavLink>
                            </div>

                          </div>
                              
                          <div> Tension cordage : {product.stringRopeChoice} kg </div>

                          <div className='cart-content__wrapper-icons'>

                              <DropDownSelectQuantity
                                quantityForOneProduct={product.quantity}
                                indexProductInArrayCart={index}
                              />
                              <DeleteIcon 
                                onClick={() => handleClickDelete(index) }
                                className="cart-content__deleteIcon" 
                              />

                          </div>

                        </div>

                      );

                    case "pose cordage seule":
                      return (

                        <div className='cart-content__product-wrapper-installation' key={index}>

                          <div className='cart-content__product-info-wrapper-left'>

                            <div className='cart-content__text-weight-uppercase'>  Pose cordage </div>

                            <div> Cordage : votre propre cordage </div>
                            <div> {product.stringFromPlayer} </div>

                            <div> Tension cordage : {product.stringRopeChoice} kg </div>

                            <div className='cart-content__wrapper-icons'>

                                <DropDownSelectQuantity
                                  quantityForOneProduct={product.quantity}
                                  indexProductInArrayCart={index}
                                />
                                <DeleteIcon 
                                  onClick={() => handleClickDelete(index) }
                                  className="cart-content__deleteIcon" 
                                />

                            </div>


                          </div>

                  
                          <div className='cart-content__product-price'>
                          <div>{(product.price * product.quantity).toFixed(2).toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €</div>
                          </div>

                        </div>

                      );

                    case "balle":  case "accessoire":

                      return (

                        <div className='cart-content__product-wrapper' key={index}>

                          <NavLink 
                            key={index} 
                            to={`/fiche_produit/${product.categorie}/${product.id}`}
                            className="cart-content__link-to-card-product"
                          >
                            <img
                              crossOrigin="anonymous"
                              src={product.image_url}
                              alt={product.model}
                              className="cart-content__image"
                            />
                          </NavLink>
    
                          <div className='cart-content__product-info-wrapper'>

                            <div className='cart-content__product-info-wrapper-left'>
                              <div>
                                <div className='cart-content__text-weight-uppercase'>{product.categorie}</div>
                                <div >{product.mark}</div>
                                <div>{product.model}</div>   
                              </div>

                              <div className='cart-content__wrapper-icons'>

                                <DropDownSelectQuantity
                                  quantityForOneProduct={product.quantity}
                                  indexProductInArrayCart={index}
                                />
                                <DeleteIcon 
                                  onClick={() => handleClickDelete(index) }
                                  className="cart-content__deleteIcon" 
                                />

                              </div>

                            </div>

                            <div className='cart-content__product-price'>
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
    
              <div className='cart__summary'>

                <div className='cart-summary__first-line'>
                    <div className="cart-summary__title"> récapitulatif </div>
                </div>

                <div className='cart-summary__detail-wrapper'>

                  <div className='cart-summary__number-product'>
                    <div>
                      {numberArticle > 1 ? ` ${numberArticle} articles ` : ` ${numberArticle} article `}
                    </div>
                    <div>  {totalPrice} € </div>
                  </div>


                </div>

                <div className='cart-summary__total-line'>
                  <div> Total </div>
                  <div> {totalPrice} € </div>
                </div>

                <button 
                  onClick={handleClickGoToOrder}
                  className='btn btn-green btn-commander btn-cart'
                  type="submit">
                    Commander
                </button>

                {isArticleListWithoutString ? <ModalAskToAddString /> : ""}

              </div>
    
            </>

          ) : (

            <h2 className="empty-cart">
              Votre panier est vide
            </h2>
          )}

        </section>

      </main>
    );
}





