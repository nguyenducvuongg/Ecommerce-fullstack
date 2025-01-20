/* eslint-disable no-unused-vars */
import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { useCartStore } from "../stores/useCartStore";
import axios from "../lib/axios";
import { motion } from "framer-motion";

function BtnPayment() {
    const stripePromise = loadStripe("pk_test_51QfQJfLLGtCGUmeaS2T3pe0hIKb87nvMCEtfi9Uq6QPZU23A6Ar45t3vEkf4JF88bnCya7ggIuSlKcrCb6mCVUVL00kU5WwxmM");
    const { coupon, cart } = useCartStore();
    const handlePayment = async () => {
		const stripe = await stripePromise;
		const res = await axios.post("/payments/create-checkout-session", {
			products: cart,
			couponCode: coupon ? coupon.code : null,
		});

		const session = res.data;
		console.log("here",session);
		const result = await stripe.redirectToCheckout({
			sessionId: session.id,
		});

		if (result.error) {
			console.error("Error:", result.error);
		}
	};

  return (
    <motion.button
    className='flex w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300'
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={handlePayment}
>
    Proceed to Checkout
</motion.button>
  )
}

export default BtnPayment