import { useState, useEffect } from "react"
import { useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import { NavLink, useNavigate } from "react-router-dom"
import TennisSpinner from "../../components/loadingSpinner/TennisSpinner"
import BackNavArrowStringer from "../../components/button/BackNavArrowStringer";

export default function OrderDetailForStringer() {

  // on récupère l'id dans l'url de la page
  const orderIdParam = useParams()
  const orderId = orderIdParam.orderId
  const token = useSelector((state) => state.user.token);
  const stringingPrice = useSelector(state => state.cart.stringingPrice);
  const [oneOrder, setOneOrder] = useState("") ;
  const [selectedOrder, setSelectedOrder] = useState([]);


  // gestion de l'état de validation du bouton pour ajouter le produit  
  const isValid =
  selectedOrder.length  !== 0;
  ;
  const navigate = useNavigate();

  //fonction asynchrone vers le backend pour recupérer 
  //l'historique de la  commandes effectué par le joueur 
  const loadOneOrder  = async function (data) {
    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/shop/oneOrder`, {
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
        console.log("oderInfo", orderInfo)
        setOneOrder(orderInfo[0])
        console.log(result.message);
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }

  //fonction asynchrone vers le backend pour valider 
  //le changement de status
  const changeStatusOrder  = async function (data) {
    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/shop/change-status-order`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ orderId: selectedOrder, statusOrder: oneOrder.statusOrder}),
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
        navigate(-1);
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }

  //fonction qui ajoute l'id de la commande à la liste
  const handleCheckboxChange = (e, orderId) => {
    const isChecked = e.target.checked;

    if (isChecked) {
        setSelectedOrder((prevSelectedOrders) => [...prevSelectedOrders, orderId]);
    } else {
        setSelectedOrder((prevSelectedOrders) =>
            prevSelectedOrders.filter((id) => id !== orderId)
        );
    }
};


  // charger la listes des commandes  au chargement de la page
  useEffect(() => {
    loadOneOrder ()
  },[])


  return (

  <>


    <main className="order-stringer__main">

      <div className="order-stringer__bg"> </div>

         <section className="order-stringer__contenair">

          {oneOrder !== "" ? (

              <div className='oneOrder__contenair-cart oneOrder-stringer__contenair-cart'>

                <BackNavArrowStringer/>

                <h2 className="oneOrder__sub-title oneOrder-stringer__sub-tittle">  Commande n° {oneOrder.id} </h2>

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
                      Prêt à être retiré à  {' '}
                        {
                          (() => {
                            const hub = JSON.parse(oneOrder.hub);
                            return hub.enterprise_name;
                          })() 
                        }
                    </div>: ""
                  }


                  { oneOrder.statusOrder ==="prêt à corder"?
                    <div className='oneOrderCart__line-status'>
                      Raquette collectée le  {' '}
                      {
                        (() => {
                          const orderDate = new Date(oneOrder.racquetTakenDate);
                          const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
                          const dateFrancaise = orderDate.toLocaleDateString('fr-FR', options);
                          return dateFrancaise;
                        })()
                      } 
                    </div>: ""
                  }


                  { oneOrder.statusOrder ==="prête"?
                    <>
                      <div className='oneOrderCart__line-status'>
                      Raquette collectée le  {' '}
                      {
                        (() => {
                          const orderDate = new Date(oneOrder.racquetTakenDate);
                          const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
                          const dateFrancaise = orderDate.toLocaleDateString('fr-FR', options);
                          return dateFrancaise;
                        })()
                      } 
                      </div>

                      <div className='oneOrderCart__line-status'>
                        Raquette cordée le  {' '}
                        {
                          (() => {
                            const orderDate = new Date(oneOrder.racquetTakenDate);
                            const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
                            const dateFrancaise = orderDate.toLocaleDateString('fr-FR', options);
                            return dateFrancaise;
                          })()
                        } 
                      </div>
                    </> : ""
                  }

                  { oneOrder.statusOrder ==="commande validée"?
                    <>
                    <div className='oneOrderCart__line-status'>
                    Raquette collectée le  {' '}
                    {
                      (() => {
                        const orderDate = new Date(oneOrder.racquetTakenDate);
                        const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
                        const dateFrancaise = orderDate.toLocaleDateString('fr-FR', options);
                        return dateFrancaise;
                      })()
                    } 
                    </div>

                    <div className='oneOrderCart__line-status'>
                      Raquette cordée le  {' '}
                      {
                        (() => {
                          const orderDate = new Date(oneOrder.racquetTakenDate);
                          const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
                          const dateFrancaise = orderDate.toLocaleDateString('fr-FR', options);
                          return dateFrancaise;
                        })()
                      } 
                    </div>

                    <div className='oneOrderCart__line-status'>
                      Commande validée le  {' '}
                      {
                        (() => {
                          const orderDate = new Date(oneOrder.orderValidateDate);
                          const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
                          const dateFrancaise = orderDate.toLocaleDateString('fr-FR', options);
                          return dateFrancaise;
                        })()
                      } 
                    </div>

                  </> : ""

                  }


                </div>

                <div className='oneOrder__cart-detail-wrapper'>

                  {JSON.parse(oneOrder.articleList).map((product, index) => {

                    switch (product.categorie) {

                      case "fourniture et pose cordage":
                        return (

                          <div className='oneOrderCart__product-wrapper-instal-with-string' key={index}>
                                {console.log(product)}
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
                                  <div> Cordage :   

                                    <NavLink 
                                      key={index} 
                                      to={`/fiche_produit/cordage/${product.stringChoice.id}`}
                                      className="oneOrderCart__link-to-card-product"
                                    >
                                    { product.stringChoice.mark  + " " + product.stringChoice.model}
                                    </NavLink> </div>
                                  
                                </div>

                                <div>{product.stringChoice.price} € </div>

                              </div>


                              <div> Tension de cordage : <span className="order-stringer__important-info"> {product.stringRopeChoice} kg</span>  </div>
                              <div > Raquette : <span className="order-stringer__important-info"> {product.racquetPlayer} </span> </div> 

                          </div>

                        );

                      case "pose cordage seule":
                        return (

                          <div className='oneOrderCart__product-wrapper-installation' key={index}>

                            <div className='oneOrderCart__product-info-wrapper-left'>

                              <div className='oneOrderCart__text-weight-uppercase'>  Pose cordage </div>

                              <div> Cordage : votre propre cordage </div>
                              <div> {product.ownStringPlayer} </div>
                             
                              <div> Tension de cordage : <span className="order-stringer__important-info"> {product.stringRopeChoice} kg</span>  </div>
 
                              <div > Raquette : <span className="order-stringer__important-info"> {product.racquetPlayer} </span> </div> 

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


                <div className='oneOrderCart__wrapper-status'>

                  <div className='oneOrderCart__first-line-status'>
                    <div>Joueur</div>
                  </div>

                  {(() => {
                      const userInfo = JSON.parse(oneOrder.userInfo);
                      return (
                        <>
                          <div> {userInfo.forename} {userInfo.lastname}</div>
                          <div>                            
                            <NavLink 
                              to={`/fiche_joueur/${userInfo.id}`}
                              className="oneOrderCart__link-to-card-product"
                            >
                              Fiche joueur
                            </NavLink>
                          </div>
                        </>
                      );
                  })()}

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

            <div >

              { oneOrder.statusOrder !=="commande validée"?

                <div className="order-stringer-detail__checkbox-wrapper">
                  <input
                    type="checkbox"
                    className="order-stringer-detail__checkbox"
                    onChange={(e) => handleCheckboxChange(e, oneOrder.id)}
                  />
                  { oneOrder.statusOrder ==="initié"?
                  
                    <div className="order-stringer-detail__checkbox-text"> 
                      Valider la collecte de la raquette
                    </div>
                      : ""
                  }
                  { oneOrder.statusOrder ==="prêt à corder"?
                    <div className="order-stringer-detail__checkbox-text"> 
                      Valider le cordage de la raquette
                    </div>
                      : ""
                  }
                  { oneOrder.statusOrder ==="prête"?
                    <div className="order-stringer-detail__checkbox-text"> 
                      Valider la récupération de la commande
                    </div>
                      : ""
                  }
                </div>
                : ""
              }

              { oneOrder.statusOrder ==="initié"?
                  <button 
                  disabled={ !isValid} 
                  className={`stringing-form__btn-order btn btn-blue order-stringer__btn ${isValid ? "" : "btn-blue-invalid"}`}
                  onClick={() => changeStatusOrder()}> 
                  Raquette collectée
                  </button>
                    : ""
              }
              { oneOrder.statusOrder ==="prêt à corder"?
                <button 
                disabled={ !isValid} 
                className={`stringing-form__btn-order btn btn-blue order-stringer__btn ${isValid ? "" : "btn-blue-invalid"}`}
                onClick={() => changeStatusOrder()}> 
                Raquette cordée
                </button>
                  : ""
              }
              { oneOrder.statusOrder ==="prête"?
                <button 
                disabled={ !isValid} 
                className={`stringing-form__btn-order btn btn-blue order-stringer__btn ${isValid ? "" : "btn-blue-invalid"}`}
                onClick={() => changeStatusOrder()}> 
                Commande validée
                </button>
                  : ""
              }

            </div>

        </section>

      </main>
  </>
    
  )
}