/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState , useEffect } from "react";
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

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? handleCloseModal() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, []);

  const truncateString = (str, num) => {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  };

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login to add products to cart", { id: "login" });
    } else {
      addToCart(product);
      handleCloseModal(); 
    }
  };

  return (
    <button onClick={handleOpenModal}>
        <MdOutlineArrowDropDown size={50} />
        <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={{
          overlay: {
            backgroundColor: "transparent",
            zIndex : "9997",
            position : "fixed"
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
            zIndex : "9999"
          },
        }}
      >
        <div className="relative w-auto mx-auto overflow-hidden rounded-md" onClick={handleOverlayClick}>
          <div className="relative flex-auto duration-300 transform bg-zinc-900 drop-shadow-md">
            <div className="relative h-[450px] w-[550px]">
              <img
                className="h-[60%] w-full object-cover"
                src={product.image}
              />
              <div className='absolute inset-0 bg-black bg-opacity-20' />
              <div className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full cursor-pointer top-3 right-3 bg-opacity-60">
                <MdOutlineClose
                  onClick={handleCloseModal}
                  className="text-white"
                  size={18}
                />
              </div>
              <div className="absolute left-5 top-[40%] w-[80%]">
                <p className="text-2xl text-emerald-400 font-bold font-roboto-slab mb-3">
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
      </button>
  );
}

export default ModalDetail;
