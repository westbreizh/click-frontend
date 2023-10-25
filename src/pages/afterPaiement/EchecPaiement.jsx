import { Link } from 'react-router-dom'


export default function EchecPaiement() {

    return (

      <main className="order-back__main">

      <div className="cart__bg"></div>

      <section className="order-back__contenair">

        <div className="order-back__section">

          <h2 className="order-back__h2">Echec de paiement </h2>

          <p className="order-back__p">
            Nous sommes désolé mais le paiement de votre commande n'a pu aboutir.<br/>
            Vous pouvez réessayez si vous le souhaitez <br/>
          </p>

          <div className='modal-atc__buttons-link-wrapper'>

            <Link to="/panier" className='btn btn-white-green'>
              voire le panier
            </Link>  

            <Link to="/commande" className='btn btn-green '>
              commander
            </Link>  

          </div>

        </div>

      </section>

    </main>
    );
}





