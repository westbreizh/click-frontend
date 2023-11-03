import { useState } from "react"
import { useSelector} from 'react-redux'
import { useEffect } from "react";
import { NavLink } from "react-router-dom"
import TennisSpinner from "../../components/loadingSpinner/TennisSpinner"


export default function RacquetToTake() {

 const token = useSelector((state) => state.token);

  const [orderLogList, setOrderLogList] = useState([]) ;
  const [orderLogListByHub, setOrderLogListByHub] = useState([]) ;
  const [pageLoading, setPageLoading] = useState(true);


  // Fonction pour regrouper les commandes par hub
  const groupOrdersByHub = (orderList) => {
    const ordersByHub = {};

    for (const order of orderList) {
      const hub = order.hub;

      if (!ordersByHub[hub]) {
        ordersByHub[hub] = [];
      }

      ordersByHub[hub].push(order);
    }

    return ordersByHub;
  };

  //fonction asynchrone vers le backend pour recupérer 
  //la liste des raquettes à recuperer 
  const loadLogOrder  = async function (data) {
    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/stringer/ordertSelectedByStatus`, {
        mode: "cors",
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({ statusOrder: "initié"}),
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
        const ordersInfoByHub = result.orderListFiltered
        console.log(ordersInfoByHub);
        setOrderLogList(ordersInfoByHub)
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
    loadLogOrder();
    }
  , []);

  // Après avoir chargé les données, regrouper les commandes par hub
  useEffect(() => {
    const groupedOrdersByHub = groupOrdersByHub(orderLogList);
    setOrderLogListByHub(groupedOrdersByHub);
  }, [orderLogList]);

  return (

  <>

    <main className="order-stringer__main">

      <div className="order-stringer__bg"> </div>

      <section className="order-stringer__contenair">

        <div className='order-stringer__sub-contenair'>

            <h1 className="order-stringer__h1">
              Raquettes à récupérer 
            </h1>

            { pageLoading ? (
              <div className="loadingspinnerString">
              <TennisSpinner />
              </div>):(
              <>
                {orderLogListByHub && Object.keys(orderLogListByHub).length > 0 ? (

                  <div >

                    {Object.keys(orderLogListByHub).map((hubName, index) => (

                      <div key={index} className="order-stringer__list-contenair">
                        <h3 className="order-stringer__h3">Lieu de retrait : {hubName}</h3>

                          {orderLogListByHub[hubName].map((order, orderIndex) => (
                              <div key={orderIndex} className="order-stringer__list-row">
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
                          ))}

                      </div>
                    ))}

                  </div>

                ) : (
                  
                  <div className="loadingspinnerString">
                    Toutes les raquettes ont été récupérées
                  </div>
                )}
              </>
            )}

        </div>

      </section>

    </main>

  </>
    
  )
}