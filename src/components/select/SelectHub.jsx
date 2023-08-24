import { useState,useEffect } from "react";
import { resetHubChoice } from "../../store/cartSlice"; 



export default function SelectHub(props) {

  const [datasForSelectHub , setDatasForSelectHub ] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const setHubChoice = props.setHubChoice

  const handleChange = (value) => {
    const hubSelected = value; 
    console.log("hubselected", hubSelected)
    setHubChoice(hubSelected)
  };
  

  //fonction asynchrone recuperant la liste des dépots de collecte
  const fetchHubCollectList = async (data) => {
    try {
      const response = await fetch('https://click-backend.herokuapp.com/api/shop/listHubCollect', {
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
      setDatasForSelectHub(result.listHubCollect)
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      return []; // Renvoyer une valeur vide ou null en cas d'erreur
    }
  };
  
  //on charge la liste des dépots à l'initialisation du composant...
  useEffect(() => {
    fetchHubCollectList ()
  },[])



  return (

    <div 
      className="clubSelect__wrapper"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="clubSelect__bar-wrapper">

        <div  className="clubSelect__bar-title" >
          choisissez le lieu de dépot 
        </div>
      
        <span className={`clubSelect__arrow ${isOpen ? "clubSelect__arrow-up" : "clubSelect__arrow-down" }`}/>

      </div>

      {isOpen && (

      <div className="clubSelect__submenu-contenair" >

        <ul className='clubSelect__submenu-ul'>

        {datasForSelectHub.map((option) => (
          <li
            key={option.id} // Assurez-vous que la propriété "id" est unique pour chaque élément
            className="clubSelect__submenu-li"
            onClick={() => handleChange(option)}
          >
            {option.enterprise_name} {/* Utilisez la propriété correcte ici */}
          </li>
        ))}
        
        </ul>

      </div>
      )}

    </div>
      
  );
}




