import './App.css';
import {loadStripe} from '@stripe/stripe-js';
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const stripePromise = loadStripe("pk_test_51HovUuGrsk6YKqSY9QDzjN8NT9UKWOsaVdHBIqxe2cMEs87Ft7h9AL1Wi1AovfFtcjZA5KFcGVjT5yxSAL7gf9C600bI6LwSDM")


const CheckoutForm = () => {


  const stripe = useStripe();
  const elements = useElements(); 


  const handleSubmit = async (e) => {
    e.preventDefault();
  
   const {error, paymentMethod} = await stripe.createPaymentMethod({
     type: 'card',
     card: elements.getElement(CardElement)
   });

  }

  return <form onSubmit={handleSubmit}>
 <CardElement/>
<button>
  Buy
</button>

  </form>
}

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm/>
    </Elements>
  );
}

export default App;
