// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDeliveryFormStore } from "../stores/useDeliveryFormStore"; 

const DeliveryForm = () => {
  const {
    deliveryDetails,
    setDeliveryDetails,
    // submitDelivery,
    // loading,
  } = useDeliveryFormStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails({ [name]: value });
  };

//   const handleSubmit = async () => {
//     await submitDelivery();
//   };

  return (
    <motion.div
      className="space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm sm:p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <p className="text-xl font-semibold text-emerald-400">Delivery</p>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Full name
          </label>
          <input
            name="recipientName" // Cập nhật name cho input
            value={deliveryDetails.recipientName}
            onChange={handleChange}
            placeholder="Full name"
            type="text"
            className="block w-full rounded-lg border border-gray-600 bg-gray-700 
            p-2.5 text-sm text-white placeholder-gray-400 focus:border-emerald-500 
            focus:ring-emerald-500"
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Address
          </label>
          <input
            name="address" // Cập nhật name cho input
            value={deliveryDetails.address}
            onChange={handleChange}
            placeholder="Address"
            type="text"
            className="block w-full rounded-lg border border-gray-600 bg-gray-700 
            p-2.5 text-sm text-white placeholder-gray-400 focus:border-emerald-500 
            focus:ring-emerald-500"
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Phone number
          </label>
          <input
            name="phoneNumber" // Cập nhật name cho input
            value={deliveryDetails.phoneNumber}
            onChange={handleChange}
            placeholder="Phone number"
            type="text"
            className="block w-full rounded-lg border border-gray-600 bg-gray-700 
            p-2.5 text-sm text-white placeholder-gray-400 focus:border-emerald-500 
            focus:ring-emerald-500"
          />
        </div>

        {/* <motion.button
          type="button"
          onClick={handleSubmit}
          className="flex w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading} // Vô hiệu hóa nút khi đang tải
        >
          {loading ? "Submitting..." : "Submit"}
        </motion.button> */}
      </div>
    </motion.div>
  );
};

export default DeliveryForm;