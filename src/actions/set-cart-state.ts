"use server"//executada no servidor

import { setServerCart } from "@/libs/server.-cookies";
import { CartItem } from "@/types/cart-item";

// Colocar o carrinho no cookie
export const setCartState = async (cart: CartItem[]) => {
    await setServerCart(cart);
}