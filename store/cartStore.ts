import { create } from "zustand";
import { persist } from "zustand/middleware";

export type DeliveryType = "local" | "international";

export type CartItem = {
  id: string;
  variantId: string;
  title: string;
  price: number;
  currencyCode: string;
  image: string;
  quantity: number;
  deliveryType: DeliveryType;
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
          // No mezclamos monedas diferentes
          // dentro del mismo carrito.
          const currentItems =
            state.items.length > 0 &&
            state.items[0].currencyCode !==
              item.currencyCode
              ? []
              : state.items;

          const existingItem = currentItems.find(
            (product) =>
              product.variantId === item.variantId
          );

          if (existingItem) {
            return {
              items: currentItems.map((product) =>
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
              ...currentItems,
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
                  quantity:
                    item.quantity + 1,
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
                    quantity:
                      item.quantity - 1,
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