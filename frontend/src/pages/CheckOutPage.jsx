// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from "framer-motion";
import BtnPayment from '../components/BtnPayment';
import DeliveryForm from '../components/DeliveryForm';
import OrderSummary from '../components/OrderSummary';

export default function CheckOutPage() {
  return (
    <div className=' py-12 md:py-16'>
      <div className='container mx-auto px-4 max-w-7xl'>
        <motion.div 
          className='grid lg:grid-cols-2 gap-8 items-start'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Phần Form Delivery */}
          <motion.div 
            className='w-full'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DeliveryForm />
          </motion.div>

          {/* Phần Order Summary */}
          <motion.div 
            className='w-full'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <OrderSummary />
          </motion.div>
        </motion.div>

        {/* Nút Checkout */}
        <motion.div 
          className='mt-8 flex justify-center w-1/4'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <BtnPayment />
        </motion.div>
      </div>
    </div>
  )
}