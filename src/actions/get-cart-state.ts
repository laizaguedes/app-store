"use server"

import { getServerCart } from "@/libs/server.-cookies";

// Pegar o carinho de compras
export const getCartState = async () => {
    const cart = await getServerCart();
    return { cart };
}