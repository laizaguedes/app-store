import { CartItem } from "@/types/cart-item";
import { create } from "zustand";

type CartState = {
    cart: CartItem[];
    shippingZipCode: string;
    shippingCost: number;
    shippingDays: number;
    selectedAddressId: number | null;
    addItem: (cartItem: CartItem) => void;
    removeItem: (productId: number) => void;
    updateQuantity: (productId: string | number, quantity: number) => void;
    setShippingZipCode: (zipCode: string) => void;
    setShippingCost: (cost: number) => void;
    setShippingDays: (days: number) => void;
    setSelectedAddressId: (id: number | null) => void;
    clearCart: () => void;
    clearShipping: () => void;
}

export const useCartStore =create<CartState>((set) => ({
    cart: [],
    shippingZipCode: '',
    shippingCost: 0,
    shippingDays: 0,
    selectedAddressId: null,
    addItem: ({ productId, quantity }) => set((state) => {
        const existingItem = state.cart.find(item => item.productId === productId);
        let newCart;
        if (existingItem) {
            newCart = state.cart.map(item => (item.productId === productId) ? { ...item, quantity: item.quantity + quantity } : item);
        } else {
            newCart = [...state.cart, { productId, quantity }];
        }
        return { cart: newCart };
    }),
    removeItem: (productId) => set((state) => { 
        const newCart = state.cart.filter(item => item.productId !== productId);
        return { cart: newCart };
     }),
    updateQuantity: (productId, quantity) => set((state) => {
        const newCart = state.cart.map(item => (item.productId === productId) ? { ...item, quantity } : item);
        return { cart: newCart };
    }),
    setShippingZipCode: (zipCode) => set({ shippingZipCode: zipCode }),
    setShippingCost: (cost) => set({ shippingCost: cost }),
    setShippingDays: (days) => set({ shippingDays: days }),
    setSelectedAddressId: (id) => set({ selectedAddressId: id }),
    clearCart: () => set({ cart: [], shippingZipCode: '', shippingCost: 0, shippingDays: 0, selectedAddressId: null }),
    clearShipping: () => set({ shippingZipCode: '', shippingCost: 0, shippingDays: 0, selectedAddressId: null }),
}));