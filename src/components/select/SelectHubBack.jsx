import { useState, useEffect } from "react";
import { resetHubBackChoice } from "../../store/cartSlice"; 
import { useDispatch, useSelector } from 'react-redux'


export default function SelectHubBack(props) {

  const [datasForSelectHubBack , setDatasForSelectHubBack ] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const hubBackChoice = useSelector(state => state.cart.hubBackChoice);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    const hubBackSelected = value; 
    console.log(hubBackSelected)
    dispatch(resetHubBackChoice(hubBackSelected))
  };
  
 
 //fonction asynchrone recuperant la liste des dépots de retrait
 const fetchHubWithdrawaltList = async (data) => {
  try {
    const response = await fetch('https://click-backend.herokuapp.com/api/shop/listHubWithdrawal', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const result = await response.json();
      // Gérer l'affichage ou la gestion des erreurs depuis le backend ici
      console.error(result.message);
      return []; // Ou vous pouvez renvoyer une valeur vide ou null en cas d'erreur
    }

    const result = await response.json();
    setDatasForSelectHubBack(result.listHubWithdrawal)
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    return []; // Renvoyer une valeur vide ou null en cas d'erreur
  }
};

//on charge la liste des dépots à l'initialisation du composant...
useEffect(() => {
  fetchHubWithdrawaltList ()
},[])



  return (

    <div 
      className="clubSelect__wrapper"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="clubSelect__bar-wrapper">

        <div  className="clubSelect__bar-title" >
          choisissez le lieu du retour de service
        </div>
      
        <span className={`clubSelect__arrow ${isOpen ? "clubSelect__arrow-up" : "clubSelect__arrow-down" }`}/>

      </div>

      {isOpen && (

      <div className="clubSelect__submenu-contenair" >

        <ul className='clubSelect__submenu-ul'>

          {datasForSelectHubBack.map(( option) =>

            <li
            key={option.id} // Assurez-vous que la propriété "id" est unique pour chaque élément
            className="clubSelect__submenu-li"
            onClick={() => handleChange(option)}
            >
            {option.enterprise_name} {/* Utilisez la propriété correcte ici */}
            </li>


          )}

        </ul>

      </div>
      )}

    </div>
      
  );
}





/*
  //fonction asynchrone vers le backend enregistrant les choix relatifs aux cordages de  l'utilisateur
  const clubListLoading = async function (userEmail, hubChoice, stringRopeChoice, stringChoice ) {
    try{

      const response = await fetch(`https://click-backend.herokuapp.com/api/club/clubList`, {
        mode: "cors",
        method: "POST",
        headers: {"Content-Type": "application/json"}})

        if (!response.ok) {
          const result = await response.json();
          throw new Error(` ${result.message}`);
        }else {
          const result = await response.json();
          console.log(result)
          const clubList = result.clubList
          console.log(clubList)
      }
    }

    catch(err){
      const errorMessage = err.toString();
      console.log(errorMessage);
    }
  }

  // charger une liste de cordages aléatoires au chargement de la page
  useEffect(() => {
    clubListLoading ()
  },[])
  */