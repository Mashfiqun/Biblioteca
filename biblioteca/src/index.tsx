import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51QdDN29IVETPNH29c0wVP8G6Gj9HHElDkUgPd6K880LpqLfote4tq3JTHmgGJKjUlT8Gagoxk2qxouJaF4O82ZaT00VrvjyjD7');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Elements stripe={stripePromise}>
    <App />
  </Elements>
  </BrowserRouter>
);

