import NavbarAccount from "../../components/navbar/NavbarAccount"
import { useState } from "react"
import { useSelector} from 'react-redux'
import { useEffect } from "react";
import { NavLink } from "react-router-dom"
import TennisSpinner from "../../components/loadingSpinner/TennisSpinner"


export default function OrderHistory() {


  const email = useSelector((state) => state.user.userInfo.email);
  const xsrfToken = useSelector((state) => state.xsrfToken);

  const [orderLogList, setOrderLogList] = useState([]) ;
  const [orderLogListEmpty, setOrderLogListEmpty] = useState(true) ;


  console.log("xsrfToken test1 ",xsrfToken);

  //fonction asynchrone vers le backend pour recupérer 
  //l'historique des commandes effectué par le joueur 
  const loadLogOrder  = async function (data) {
    try{
      console.log("xsrfToken test2 ",xsrfToken);
      const response = await fetch(`https://click-backend.herokuapp.com/api/user/orderLog`, {
        mode: "cors",
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({ email:email}),
        headers: {
          "Content-Type": "application/json",
          "x-xsrf-token": xsrfToken // Envoyez le xsrfToken dans l'en-tête de la requête
        }
    })

      if (!response.ok) {
        const result = await response.json();
        throw new Error(` ${result.message}`);
      }else {
        const result = await response.json();
        const ordersInfo = result.data.ordersInfo
        const messageFromBackend = result.message
        if (messageFromBackend==="Vous n'avez pas encore effectué de commande."){
        };
        console.log("message du backend",result.message);
        console.log("liste des commandes",ordersInfo);
        setOrderLogList(ordersInfo)
        setOrderLogListEmpty(false)
      }
    }
    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }

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
              Historique des commandes 
            </h1>

            {orderLogList.length > 0 ? (

              <div className="order-log__list-contenair">

                {orderLogList.slice().reverse().map((order, index) => (
                  <div 
                  key={`${index}`}
                  className="order-log__list-row"
                  >
                    <div className="order-stringer__list-row-infos"> 

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

            {orderLogListEmpty?
              <div> Vous n'avez pas encore passée de commmande </div> : ""
            }
              
          </div>

        </section>

      </main>
    </>
    
  )
}