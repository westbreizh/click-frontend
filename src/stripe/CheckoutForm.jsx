import { useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = () => {

  const stripe = useStripe();

  const handleCheckout = async () => {
    console.log("je suis dans checkout")
    // Créez une session de paiement avec les détails appropriés
    const response = await fetch(' https://click-backend.herokuapp.com/api/stripe/create-checkout-session ', {
      mode: "cors",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    const data = await response.json();
    console.log(data);
    console.log("hello");
    const sessionUrl = data.sessionUrl;
    // Redirigez l'utilisateur vers la page de paiement Stripe
    stripe.redirectToCheckout({
      sessionId: sessionUrl,
    });


  };

  return (
    <form onSubmit={handleCheckout}>
      <button 
      className='btn btn-green btn-commander btn-cart'
      type="submit">
        Commander 
      </button>

    </form>
  );
};

export default CheckoutForm;
