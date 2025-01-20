import { create } from "zustand";
import axios from "../lib/axios";
import { toast } from "react-hot-toast";

export const useDeliveryFormStore = create((set) => ({
  deliveryDetails: {
    address: '',
    recipientName: '',
    phoneNumber: '',
  },
  loading: false,

  setDeliveryDetails: (details) => set((state) => ({
    deliveryDetails: { ...state.deliveryDetails, ...details },
  })),

  submitDelivery: async () => {
    set({ loading: true });
    try {
      const res = await axios.post("/delivery/create", useDeliveryFormStore.getState().deliveryDetails);
      toast.success("Delivery created successfully!");
      set({ deliveryDetails: { address: '', recipientName: '', phoneNumber: '' }, loading: false });
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message || "An error occurred while creating delivery");
      set({ loading: false });
    }
  },
}));