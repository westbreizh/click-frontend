import { useState } from "react";
import { Link } from "react-router-dom";

export default function SelectString(props) {

  const [isOpen, setIsOpen] = useState(false);
  const setStringFromPlayerSelected = props.setStringFromPlayerSelected

  
  return (

    <div 
      className="clubSelect__wrapper"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="clubSelect__bar-wrapper">

        <div  className="clubSelect__bar-title" >
         Choisissez ou fournissez votre cordage
        </div>
      
        <span className={`clubSelect__arrow ${isOpen ? "clubSelect__arrow-up" : "clubSelect__arrow-down" }`}/>

      </div>

      {isOpen && (

        <div className="clubSelect__submenu-contenair" >

          <ul className='clubSelect__submenu-ul'>

            <li
              className="clubSelect__submenu-li"
              onClick={() => {
                setStringFromPlayerSelected( false);
              }}
            >
              <Link className="li-choose-string" to="/cordages">
                je choisis mon cordage
              </Link>
            </li>

            <li
              className="clubSelect__submenu-li"
              onClick={() => {
                setStringFromPlayerSelected( true);  
              }}
            >

              <div>je fournis mon propre cordage</div>
                
            </li>

          </ul>

        </div>

      )}

    </div>
      
  );
}
