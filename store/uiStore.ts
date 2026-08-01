import { create } from "zustand";

type UIStore = {
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

export const useUIStore = create<UIStore>((set) => ({
  cartOpen: false,

  openCart: () =>
    set({
      cartOpen: true,
    }),

  closeCart: () =>
    set({
      cartOpen: false,
    }),
}));