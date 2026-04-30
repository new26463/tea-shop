import { create } from "zustand";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  decreaseQuantity: (productId) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === productId);
      if (existingItem?.quantity === 1) {
        return {
          cart: state.cart.filter((item) => item.id !== productId),
        };
      }
      return {
        cart: state.cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      };
    }),
  clearCart: () => set({ cart: [] }),
  getCartTotal: () =>
    get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
  getCartCount: () =>
    get().cart.reduce((count, item) => count + item.quantity, 0),
}));
