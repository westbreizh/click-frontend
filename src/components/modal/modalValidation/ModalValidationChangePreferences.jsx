import {createPortal} from 'react-dom'
import { Link } from 'react-router-dom';

export default function ModalValidationChangesPreferences( props) {

  const setSubmenuValidation = props.setSubmenuValidation

  return createPortal(
    <>
      <div className="modal-overlay">
      
        <div className="modal__wrapper modal-installation-atc__wrapper">

          <div className='modal-installation-atc__message-wrapper'>  {/*atc pour add to cart*/}

            <div className="modal-installation-atc__validation-bubble-checked">
              <span>&#10003;</span>
            </div>

            <div className='modal-installation-atc__message-text'>
            Vos préférences ont été mises à jour !
            </div>

            <button
              type="button"
              className="btn-close-atc"
              aria-label="Close"
              onClick={() => setSubmenuValidation(false)}
            >
              <span >&times;</span>

            </button>

          </div>

          <div className='modal-installation-atc__buttons-link-wrapper'>


            <Link to="/" className='btn btn-green btn-installation-atc btn-last'>
              ok
            </Link>  
            
          </div>

        </div>

      </div>

      <div className="modal-backdrop fade show"></div>
    </>,  document.getElementById('portal1')
  );

} 