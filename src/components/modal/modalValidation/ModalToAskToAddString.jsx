import {createPortal} from 'react-dom'
import { useNavigate } from 'react-router-dom'


export default function ModalAskToAddString( props) {

  const navigate = useNavigate();
  const goToHomeAndcloseModals = function(){
    navigate("/cordez");
  }


  return createPortal(

    <>
      <div className="modal-overlay">
      
        <div className="modal__wrapper">

          <div className="modal__header">
            <h4 className="modal__title"> Veuillez ajouter la pose d'un cordage, merci !</h4>            
          </div>

          <div className="modal__body modal__body-reset-password-validation">

            <div className="modal__reset-password-wrapper" >

              <p className='reset-password-indication'>
                Les balles et accessoires viennent s'ajouter à la pose d'un cordage si vous en avez besoin ... 
              </p>

              <button
              onClick={() => { goToHomeAndcloseModals() }} 
              className="btn btn-blue "
              >                
                ok
              </button>

            </div>

          </div>

        </div>

      </div>

      <div className="modal-backdrop fade show"></div>
    </>,  document.getElementById('portal2')
  );

} 