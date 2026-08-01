import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  variantId: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];

  addItem: (
    item: Omit<CartItem, "quantity">
  ) => void;

  removeItem: (
    variantId: string
  ) => void;

  increaseQuantity: (
    variantId: string
  ) => void;

  decreaseQuantity: (
    variantId: string
  ) => void;

  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find(
            (product) =>
              product.variantId === item.variantId
          );

          if (existingItem) {
            return {
              items: state.items.map((product) =>
                product.variantId === item.variantId
                  ? {
                      ...product,
                      quantity:
                        product.quantity + 1,
                    }
                  : product
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                ...item,
                quantity: 1,
              },
            ],
          };
        }),

      removeItem: (variantId) =>
        set((state) => ({
          items: state.items.filter(
            (item) =>
              item.variantId !== variantId
          ),
        })),

      increaseQuantity: (variantId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.variantId === variantId
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        })),

      decreaseQuantity: (variantId) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.variantId === variantId
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            )
            .filter(
              (item) => item.quantity > 0
            ),
        })),

      clearCart: () =>
        set({
          items: [],
        }),
    }),
    {
      name: "dcv-cart",
    }
  )
);