import NavbarAccount from "../../components/navbar/NavbarAccount"
import { useState } from "react"
import { useSelector} from 'react-redux'
import { useEffect } from "react";
import { NavLink } from "react-router-dom"
import TennisSpinner from "../../components/loadingSpinner/TennisSpinner"
import { useNavigate } from "react-router-dom";


export default function RacquetToTake() {

  const token = useSelector((state) => state.user.token);

  const [orderLogList, setOrderLogList] = useState([]) ;
  const [orderLogListByHub, setOrderLogListByHub] = useState([]) ;
  const [selectedOrders, setSelectedOrders] = useState([]);

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
        const ordersInfoByHub = result.racquetsData
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

  //fonction asynchrone vers le backend pour valider 
  //les raquettes récupérées 
  const racquetTaken  = async function (data) {
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
        window.location.reload();
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
  }, []);

  // Après avoir chargé les données, regrouper les commandes par hub
  useEffect(() => {
    const groupedOrdersByHub = groupOrdersByHub(orderLogList);
    setOrderLogListByHub(groupedOrdersByHub);
  }, [orderLogList]);

  console.log("cases cochés", selectedOrders)

  return (


  <>


      <main className="order-stringer__main">

        <div className="order-stringer__bg"> </div>

        <section className="order-stringer__contenair">


        <div className='order-stringer__sub-contenair'>

            <h1 className="order-stringer__h1">
              Raquettes à récupérer 
            </h1>



            {orderLogListByHub && Object.keys(orderLogListByHub).length > 0 ? (
              <div >

                {Object.keys(orderLogListByHub).map((hubName, index) => (

                  <div key={index} className="order-stringer__list-contenair">
                    <h3 className="order-stringer__h3">Lieu de retrait : {hubName}</h3>


                        {orderLogListByHub[hubName].map((order, orderIndex) => (
                            <div key={orderIndex} className="order-stringer__list-row">
                                <input
                                  type="checkbox"
                                  className="order-stringer__checkbox"
                                  onChange={(e) => handleCheckboxChange(e, order.id)}
                                />
                                <div className="order-stringer__list-row-element">N° : {order.id}</div>
                                <div className="order-stringer__list-row-element">Raquette : {order.userInfo}</div>
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

              <button 
                disabled={ !isValid} 
                className={`stringing-form__btn-order btn btn-blue order-stringer__btn ${isValid ? "" : "btn-blue-invalid"}`}
                onClick={racquetTaken}>
                Raquettes récupérées
              </button>
              
              </div>

              
            ) : (
              <div className="loadingspinnerString">
                Toutes les raquettes ont été récupérées
              </div>
            )}


        </div>

        </section>

      </main>
  </>
    
  )
}