import NavbarAccount from "../../components/navbar/NavbarAccount"
import { useState } from "react"
import { useSelector} from 'react-redux'
import { useEffect } from "react";
import { NavLink } from "react-router-dom"
import TennisSpinner from "../../components/loadingSpinner/TennisSpinner"

export default function RacquetToTake() {

  const token = useSelector((state) => state.user.token);


  const [orderLogList, setOrderLogList] = useState([]) ;


  //fonction asynchrone vers le backend pour recupérer 
  //l'historique des commandes effectué par le joueur 
  const loadLogOrder  = async function (data) {
    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/shop/racquetToTakeLog`, {
        mode: "cors",
        method: "POST",
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
        const ordersInfoByHub = result.ordersInfoByHub
        console.log(ordersInfoByHub);
        setOrderLogList(ordersInfoByHub)
        console.log(result.message);
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }


  console.log("orderLogList : ", orderLogList);
  console.log("orderLogList premier élément : ", orderLogList[0]);
  

  // charger la listes des commandes  au chargement de la page
  useEffect(() => {
    loadLogOrder ()
  },[])

  return (


  <>
      <NavbarAccount />

      <main className="order-log__main">

        <div className="order-log__bg"> </div>

        <section className="order-log__contenair">


        <div className='oneOrder__contenair-cart'>

            <h1 className="order-log__h1">
              Raquette à récupérer 
            </h1>


            {orderLogList.length > 0 ? (
              <div className="order-log__list-contenair">

                {orderLogList.slice().reverse().map((order, index) => (
                  <div 
                  key={`${index}`}
                  className="order-log__list-row"
                  >
                    <div className="order-log__list-row-element">
                      n° {order.id}
                    </div>

                    <div className="order-log__list-row-element">
                    date :  {" "}
                      {
                        (() => {
                          const orderDate = new Date(order.orderDate);
                          const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
                          const dateFrancaise = orderDate.toLocaleDateString('fr-FR', options);
                          return dateFrancaise;
                        })()
                      }

                    </div>

                    <div className="order-log__list-row-element">
                      status : {order.statusOrder}
                    </div>

                    

                    <NavLink 
                    to={`/historique_commandes/${order.id}`}
                    className="order-log__list-row-element"
                    >
                      détail 
                    </NavLink>

                  </div>

                ))}
                






              </div>

              ) : (
                <div className="loadingspinnerString">
                <TennisSpinner />
                </div>
            )}

        </div>

        </section>

      </main>
  </>
    
  )
}