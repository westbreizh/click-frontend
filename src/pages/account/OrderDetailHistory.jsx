import NavbarAccount from "../../components/navbar/NavbarAccount"
import { useState, useEffect } from "react"
import { useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom"
import TennisSpinner from "../../components/loadingSpinner/TennisSpinner"
import BackNavArrow from '../../components/button/BackNavArrow';


export default function OrderDetailHistory() {

  // on récupère l'id dans l'url de la page
  const orderIdParam = useParams()
  const orderId = orderIdParam.orderId
  const token = useSelector((state) => state.user.token);
  const stringingPrice = useSelector(state => state.cart.stringingPrice);

  const [oneOrder, setOneOrder] = useState("") ;

  //fonction asynchrone vers le backend pour recupérer 
  //l'historique de la  commandes effectué par le joueur 
  const loadOneOrder  = async function (data) {
    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/user/oneOrder`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ orderId}),
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
        const orderInfo = result.data.orderInfo
        setOneOrder(orderInfo[0])

        console.log(result.message);
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }


  console.log("oneOrder : ", oneOrder);



  

  // charger la listes des commandes  au chargement de la page
  useEffect(() => {
    loadOneOrder ()
  },[])

  return (


  <>
      <NavbarAccount />

      <main className="order-log__main">

        <div className="order-log__bg"> </div>

        <section className="order-log__contenair">

          {oneOrder !== "" ? (

            <div className='oneOrder__contenair-cart'>

              <h2 className="oneOrder__sub-title">  Commande n° {oneOrder.id} </h2>

              <div className='oneOrderCart__wrapper-status'>

                <div className='oneOrderCart__first-line-status'>
                  <div >  Statut </div>
                  <div> {oneOrder.statusOrder} </div>
                </div>

                <div className='oneOrderCart__line-status'>
                  Commandé le {" "}
                    {
                      (() => {
                        const orderDate = new Date(oneOrder.orderDate);
                        const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
                        const dateFrancaise = orderDate.toLocaleDateString('fr-FR', options);
                        return dateFrancaise;
                      })()
                    } 
                </div>

                { oneOrder.statusOrder ==="initié"?
                  <div className='oneOrderCart__line-status'>
                    Raquette prête à être retirée à  {' '}
                      {
                        (() => {
                          const hub = JSON.parse(oneOrder.hub);
                          console.log( hub);
                          return hub.enterprise_name;
                        })() 
                      }
                  </div>: ""
                }

                { oneOrder.statusOrder ==="à corder"?
                  <div className='oneOrderCart__line-status'>
                    Raquette récuprérée et en cours de cordage
                      {
                        (() => {
                          const hub = JSON.parse(oneOrder.hub);
                          console.log( hub);
                          return hub.enterprise_name;
                        })() 
                      }
                  </div>: ""
                }


                { oneOrder.statusOrder ==="cordée"?
                  <div className='oneOrderCart__line-status'>
                    Raquette cordée, prête à jouer !
                      {
                        (() => {
                          const hub = JSON.parse(oneOrder.hub);
                          console.log( hub);
                          return hub.enterprise_name;
                        })() 
                      }
                  </div>: ""
                }



              </div>

              <div className='oneOrder__cart-detail-wrapper'>

                {JSON.parse(oneOrder.articleList).map((product, index) => {

                  switch (product.categorie) {

                    case "fourniture et pose cordage":
                      return (

                        <div className='oneOrderCart__product-wrapper-instal-with-string' key={index}>

                          <div className='oneOrderCart__instal-with-string-top'>

                            <div className='oneOrderCart__text-weight-uppercase'>  Fourniture et pose cordage </div>

                            <div className='oneOrderCart__product-price'>
                            <div>{(product.price * product.quantity).toFixed(2).toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €</div>
                            </div>

                          </div>

                            <div className='oneOrderCart__content-on-one-line'>
                              <div>Pose cordage </div> 
                              <div> {stringingPrice}€ </div>
                            </div>

                            <div className='oneOrderCart__content-on-one-line'>

                              <div className='oneOrderCart__cordage'>
                                <div> Cordage : </div>
                                
                              </div>

                              <div>{product.stringChoice.price} € </div>

                            </div>

                            <NavLink 
                              key={index} 
                              to={`/fiche_produit/cordage/${product.stringChoice.id}`}
                              className="oneOrderCart__link-to-card-product"
                            >
                              { product.stringChoice.mark  + " " + product.stringChoice.model}
                            </NavLink>

                        </div>

                      );

                    case "pose cordage seule":
                      return (

                        <div className='oneOrderCart__product-wrapper-installation' key={index}>

                          <div className='oneOrderCart__product-info-wrapper-left'>

                            <div className='oneOrderCart__text-weight-uppercase'>  Pose cordage </div>

                            <div> Cordage : votre propre cordage </div>

                          </div>


                          <div className='oneOrderCart__product-price'>
                              <div>{parseFloat((product.price * product.quantity).toFixed(2))} €</div>
                          </div>

                        </div>

                      );

                    case "balle":
                    case "accessoire":
                      return (

                        <div className='oneOrderCart__product-wrapper' key={index}>

                          <NavLink 
                            key={index} 
                            to={`/fiche_produit/${product.categorie}/${product.id}`}
                            className="oneOrderCart__link-to-card-product"
                          >
                            <img
                              crossOrigin="anonymous"
                              src={product.image_url}
                              alt={product.model}
                              className="oneOrderCart__image"
                            />
                          </NavLink>

                          <div className='oneOrderCart__product-info-wrapper'>

                            <div className='oneOrderCart__product-info-wrapper-left'>
                              <div>
                                <div className='oneOrderCart__text-weight-uppercase'>{product.categorie}</div>
                                <div >{product.mark}</div>
                                <div>{product.model}</div>   
                                <div> Quantité : {product.quantity}</div> 
                              </div>

                            </div>

                            <div className='oneOrderCart__product-price'>
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
                <div> {oneOrder.totalPrice} € </div>
              </div>

            </div>

            ) : (
            <div className="loadingspinnerString">
            <TennisSpinner />
            </div>
          )}

        
        </section>

      </main>
  </>
    
  )
}