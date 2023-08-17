import { useState } from "react"
import { useSelector} from 'react-redux'
import { useEffect } from "react";
import { NavLink } from "react-router-dom"
import TennisSpinner from "../../components/loadingSpinner/TennisSpinner"


export default function RacquetReady() {

  const token = useSelector((state) => state.user.token);

  const [orderLogList, setOrderLogList] = useState([]) ;
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [shouldReload, setShouldReload] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  // gestion de l'état de validation du bouton pour ajouter le produit  
  const isValid =
  selectedOrders.length  !== 0;
  ;

  //fonction qui ajoute l'id de la commande à la liste
  const handleCheckboxChange = (e, orderId) => {
      const isChecked = e.target.checked;

      if (isChecked) {
          setSelectedOrders((prevSelectedOrders) => [...prevSelectedOrders, orderId]);
      } else {
          setSelectedOrders((prevSelectedOrders) =>
              prevSelectedOrders.filter((id) => id !== orderId)
          );
      }
  };



  //fonction asynchrone vers le backend pour recupérer 
  //la liste des raquettes à corder 
  const loadLogOrder  = async function (data) {
    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/shop/racquetToStringLog`, {
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
        const ordersInfo = result.racquetsDataToString 
        console.log(ordersInfo);
        setOrderLogList(ordersInfo)
        console.log(result.message);
        setPageLoading(false)
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }

  //fonction asynchrone vers le backend pour valider 
  //les raquettes récupérées 
  const racquetStringed  = async function (data) {
    try{
      const response = await fetch(`https://click-backend.herokuapp.com/api/shop/racquetTaken`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ selectedOrders}),
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
        setShouldReload(true); // Mettre à jour l'état racquetsTaken
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }





  // charger la listes des commandes  au chargement de la page et lorsque racquetTaken est appelé
  useEffect(() => {
    loadLogOrder();
    if (shouldReload) {
      setShouldReload(false);

    }
  }, [shouldReload]);



  console.log("cases cochés", selectedOrders)

  return (


  <>


      <main className="order-stringer__main">

        <div className="order-stringer__bg"> </div>

        <section className="order-stringer__contenair">


        <div className='order-stringer__sub-contenair'>

            <h1 className="order-stringer__h1">
              Commandes prêtes
            </h1>

            { pageLoading ? (
              <div className="loadingspinnerString">
              <TennisSpinner />
              </div>):""
            }

            {orderLogList && Object.keys(orderLogList).length > 0 ? (
              <div >



                  <div  className="order-stringer__list-contenair">

                        {orderLogList.map((order, orderIndex) => (
                            <div key={orderIndex} >
                              <div className="order-stringer__list-row">
                                <input
                                  type="checkbox"
                                  className="order-stringer__checkbox"
                                  onChange={(e) => handleCheckboxChange(e, order.id)}
                                />
                                <div className="order-stringer__list-row-element">N° : {order.id}</div>
                                <div className="order-stringer__list-row-element">Raquette : {order.racquetPlayerList.join(", ")}</div>
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
                

              <button 
                disabled={ !isValid} 
                className={`stringing-form__btn-order btn btn-blue order-stringer__btn ${isValid ? "" : "btn-blue-invalid"}`}
                onClick={() => racquetStringed()}> 
                Raquettes cordées
              </button>
              
              </div>

              
            ) : (
              
              <div className="loadingspinnerString">
                Toutes les raquettes ont été cordées
              </div>
            )}


        </div>




        </section>

      </main>
  </>
    
  )
}