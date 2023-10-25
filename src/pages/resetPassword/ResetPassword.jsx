import { useState } from 'react'
import ModalValidationResetPassword from '../../components/modal/modalValidation/ModalValidationResetPassword';
import NewPasswordForm from '../../components/form/NewPasswordForm ';


export default function Signup() {


  const [isModalValidationMessageOpen, setModalValidationMessageOpen] = useState(false);
  const showModal = function(){
    setModalValidationMessageOpen(true);
  };
  const hideModal = function(){
    setModalValidationMessageOpen(false);
  };

  
  return (

    <main className="main-signup">

      <div className="bg-signup"> </div>

        <section className="signup-contenair">

          <div className="form-signup__header">

            <h1 className="form-signup__header__h1">
              Réanitialisation du mot de passe  !
            </h1>

          </div>

          <div className="form-signup__field-wrapper">
              <NewPasswordForm  showModal={showModal}/>
          </div>

        </section>

        {isModalValidationMessageOpen &&
         <ModalValidationResetPassword
         onClose={hideModal} 
         />}

    </main>
  )
}



