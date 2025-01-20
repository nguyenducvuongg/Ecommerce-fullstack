// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

function BtnCheckOut() {
  return (
    <div>
      <Link to="/checkout">
        <motion.button
          className="flex w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Pay now
        </motion.button>
      </Link>

      <div className="flex items-center justify-center gap-2">
        <span className="text-sm font-normal text-gray-400">or</span>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 underline hover:text-emerald-300 hover:no-underline"
        >
          Continue Shopping
          <MoveRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default BtnCheckOut;
