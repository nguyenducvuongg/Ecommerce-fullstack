/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { MdOutlineArrowDropDown, MdOutlineClose, MdAdd } from "react-icons/md";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import toast from "react-hot-toast";

// Đảm bảo Modal được set up đúng
Modal.setAppElement('#root'); // Thêm dòng này nếu chưa có

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
    const closeOnEscapeKey = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
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
    <>
      <button onClick={handleOpenModal}>
        <div className="flex items-center gap-2">
          <MdOutlineArrowDropDown size={30} />
          <p>Details</p>
        </div>
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.5)", // Thêm opacity để dễ click đóng
            zIndex: 9997,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          content: {
            position: 'relative',
            top: 'auto',
            left: 'auto',
            right: 'auto',
            bottom: 'auto',
            padding: 0,
            border: 'none',
            background: 'transparent',
            borderRadius: '8px',
            maxWidth: '550px',
            width: '100%',
            margin: 'auto',
          },
        }}
      >
        <div 
          className="relative w-full mx-auto overflow-hidden rounded-md"
          onClick={handleOverlayClick}
        >
          <div className="relative flex-auto duration-300 transform bg-zinc-900 drop-shadow-md rounded-md">
            <div className="relative h-[450px] w-full">
              <img
                className="h-[60%] w-full object-cover"
                src={product.image}
                alt={product.name}
              />
              <button 
                onClick={handleCloseModal} 
                className="absolute flex items-center justify-center w-8 h-8 bg-black rounded-full cursor-pointer top-3 right-3 bg-opacity-60 hover:bg-opacity-80 transition-all"
              >
                <MdOutlineClose className="text-white" size={20} />
              </button>
              <div className="absolute left-5 top-[40%] w-[80%]">
                <p className="text-2xl text-emerald-400 font-bold font-roboto-slab mb-3">
                  {product.name}
                </p>
                <div className="flex flex-row items-center gap-4">
                  <button
                    className="flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                    onClick={handleAddToCart}
                  >
                    <MdAdd size={22} className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="py-[20px] text-white px-[20px] flex flex-col justify-around">
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
    </>
  );
}

export default ModalDetail;