import { create } from "zustand";

type CartItem = {
  id: number;
  title: string;
  price: string;
  image: string;
};

type CartStore = {
  items: CartItem[];

  addItem: (item: CartItem) => void;

  removeItem: (id: number) => void;

  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({

  items: [],

  addItem: (item) =>
    set((state) => {
      console.log("Producto agregado:", item);
  
      return {
        items: [...state.items, item],
      };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  clearCart: () =>
    set({
      items: [],
    }),

}));