import { useState } from "react";
import { datasForSelectHub } from "../../Utils/localDataBase";
import { resetHubChoice } from "../../store/cartSlice"; 
import { useDispatch, useSelector } from 'react-redux'


export default function SelectHub(props) {

  const [isOpen, setIsOpen] = useState(false);
  const hubChoice = useSelector(state => state.cart.hubChoice);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    const hubSelected = value; 
    console.log(hubSelected)
    dispatch(resetHubChoice(hubSelected))
  };
  
 
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

          {datasForSelectHub.map(( option) =>

            <li key={option.value} 
            className="clubSelect__submenu-li"  
            onClick={() => handleChange(option)}>
              {option.value} 
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