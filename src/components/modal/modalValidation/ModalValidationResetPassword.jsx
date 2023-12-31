import {createPortal} from 'react-dom'
import { useNavigate } from 'react-router-dom'


export default function ModalValidationResetPassword( props) {

  const onClose = props.onClose
  const navigate = useNavigate();
  const goHomeAndcloseModal = function(){
    onClose();
    navigate("/");
  }

  return createPortal(
    <>
      <div className="modal-overlay">
      
        <div className="modal__wrapper">

          <div className="modal__header">
            <h4 className="modal__title"> Votre mot de passe a bien été modifié </h4>             
          </div>

            <div className="modal__body">

              <div className="modal__button-wrapper" >

                <button
                  onClick={() => {goHomeAndcloseModal() }} 
                  className={"btn btn-blue"}
                >                
                  ok
                </button>

              </div>

            </div>

        </div>

      </div>

      <div className="modal-backdrop fade show"></div>
    </>,  document.getElementById('portal1')
  );

} 