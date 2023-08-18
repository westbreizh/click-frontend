import { useState } from "react"
import { useSelector} from 'react-redux'
import { useEffect } from "react";
import { NavLink } from "react-router-dom"
import TennisSpinner from "../../components/loadingSpinner/TennisSpinner"


export default function RacquetToSring() {

  const token = useSelector((state) => state.user.token);

  const [orderListFiltered, setOrderListFiltered] = useState([]) ;
  const [pageLoading, setPageLoading] = useState(true);

  //fonction asynchrone vers le backend pour recupérer 
  //la liste des raquettes en fonction du status de la commande
  const loadListOrderFiltered  = async function (data) {
    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/shop/ordertSelectedByStatus`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ statusOrder: "prêt à corder"}),

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
        const ordersInfo = result.orderListFiltered
        console.log(ordersInfo);
        setOrderListFiltered(ordersInfo)
        console.log(result.message);
        setPageLoading(false)
      }
    }
    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }

  // charger la listes des commandes  au chargement de la page 
  useEffect(() => {
    loadListOrderFiltered();
  }, []);


  return (

    <main className="order-stringer__main">

      <div className="order-stringer__bg"> </div>

      <section className="order-stringer__contenair">

        <div className='order-stringer__sub-contenair'>

          <h1 className="order-stringer__h1">
            Raquettes prêtes à corder
          </h1>

          { pageLoading ? (
            <div className="loadingspinnerString">
            <TennisSpinner />
            </div>):(
            <>
              {orderListFiltered && Object.keys(orderListFiltered).length > 0 ? (
                <div >
                  <div  className="order-stringer__list-contenair">

                        {orderListFiltered.map((order, orderIndex) => (
                            <div key={orderIndex} >

                              <div className="order-stringer__list-row">
                                <div className="order-stringer__list-row-infos"> 
                                  <div className="order-stringer__list-row-element">N° : {order.id}</div>
                                  <div className="order-stringer__list-row-element">Raquette : {order.racquetPlayerList.join(", ")}</div>
                                </div>

                                <NavLink
                                    to={`/détails_commande/${order.id}`}
                                    className="order-stringer__list-row-element"
                                >
                                    détails
                                </NavLink>

                              </div>
                              
                            </div>

                        ))}

                  </div>          
                </div>

                ):
                ( 
                  <div className="loadingspinnerString">
                    Toutes les raquettes ont été cordées
                  </div>
                  )
              }
            </>
          )}
          
        </div>

      </section>

    </main>
 
  )
}