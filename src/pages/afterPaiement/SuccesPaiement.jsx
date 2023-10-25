import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { resetCart } from "../../store/cartSlice";


export default function SuccesPaiement() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCart());
  }, []);


  return (

    <main className="order-back__main">

      <div className="cart__bg"></div>

      <section className="order-back__contenair">

        <div className="order-back__section">

          <h2 className="order-back__h2">Confirmation de commande </h2>

          <p>
            Notre équipe a bien reçu votre commande.<br/>
            Un e-mail de confirmation vous a été envoyé par email.<br/>
            Vous pouvez retrouver votre commande et voir sa progression dans <br/>
            <Link to="/historique_commandes" className="order-back__link">  
            votre historique de commandes.  
            </Link>
          </p>

        </div>

      </section>

    </main>
  );
}





