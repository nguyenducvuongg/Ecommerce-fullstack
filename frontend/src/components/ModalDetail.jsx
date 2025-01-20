/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Modal from "react-modal";
import { MdOutlineArrowDropDown, MdOutlineClose, MdAdd } from "react-icons/md";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import toast from "react-hot-toast";

function ModalDetail({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useUserStore();
  const { addToCart } = useCartStore();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const truncateString = (str, num) => {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  };

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login to add products to cart", { id: "login" });
    } else {
      addToCart(product);
      handleCloseModal(); // Close the modal after adding the product to the cart
    }
  };

  return (
    <div>
      <button onClick={handleOpenModal}>
        <MdOutlineArrowDropDown size={50} />
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.7)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            overflow: "auto",
            backgroundColor: "transparent",
            outline: "none",
            border: "none",
            transition: "opacity 300ms ease-in-out",
            duration: "3000ms",
            zIndex: "9999",
          },
        }}
      >
        <div className="relative w-auto mx-auto overflow-hidden rounded-md">
          <div className="relative flex-auto duration-300 transform bg-zinc-900 drop-shadow-md">
            <div className="relative h-[450px] w-[550px]">
              <img
                className="h-[60%] w-full object-cover"
                src={product.image}
              />
              <div className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full cursor-pointer top-3 right-3 bg-opacity-60">
                <MdOutlineClose
                  onClick={handleCloseModal}
                  className="text-white"
                  size={18}
                />
              </div>
              <div className="absolute left-5 top-[40%] w-[80%]">
                <p className="w-full mb-4 text-base font-bold text-white md:text-xl lg:text-xl drop-shadow-xl">
                  {product.name}
                </p>
                <div className="flex flex-row items-center gap-4">
                  <button
                    className="flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium
					 	text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                    onClick={handleAddToCart}
                  >
                    <MdAdd size={22} className="mr-2" />
                  </button>
                </div>
              </div>
              <div className="py-[20px] text-white px-[20px] flex flex-col justify-around ">
                <p>
                  <span className="text-blue-500 font-bold italic">Price:</span>{" "}
                  ${product.price}
                </p>
                <p>
                  <span className="text-blue-500 font-bold italic">
                    Overview:
                  </span>{" "}
                  {truncateString(product.description, 200)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalDetail;
