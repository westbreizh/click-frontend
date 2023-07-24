// problème de mise en forme avec l'input mot de passe un trait apparait
// les inputs n'ont pas la même couleur non plus une fois rempli

import { useState } from 'react'
import ModalValidationSignup from "../../components/modal/modalValidation/ModalValidationSignup"
import SignupFormHub from '../../components/form/SignupFormHub';


export default function SignupHub() {

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
                Création de compte Click & Raquette hub !
              </h1>

              <div className="form-signup__littleBitText">
                Nous sommes heureux de vous voir ici, bienvenue parmis nous.
              </div>

            </div>

            <div className="form-signup__field-wrapper">
                <SignupFormHub  showModal={showModal}/>
            </div>

        </section>

        {isModalValidationMessageOpen &&
         <ModalValidationSignup 
         onClose={hideModal} 
         />}

    </main>
  )
}



