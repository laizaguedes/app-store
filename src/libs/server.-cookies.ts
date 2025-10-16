import { CartItem } from "@/types/cart-item";
import { cookies } from "next/headers";

// AUTH COOKIES
export const getServerAuthToken = async() => {
    const cookieStore = await cookies();
    return cookieStore.get('auth_token')?.value || null;
}

export const setServerAuthToken = async (token: string) => {
    const cookieStore = await cookies();
    cookieStore.set('auth_token', token, { httpOnly: true });
}

export const clearServerAuthToken = async () => {
    const cookieStore = await cookies();
    cookieStore.delete('auth_token');
}

// CART COOKIES
// Pegar os cookies do navegador
export const getServerCart = async(): Promise<CartItem[]> => {
    const cookieStore = await cookies();
    const value = cookieStore.get('cart')?.value;
    if(!value) return [];

    try {
        return JSON.parse(value);
    } catch {
        return [];
    }
}

// Transformar o cookie em um objeto JSON
export const setServerCart = async (cart: CartItem[]) => {
    const cookieStore = await cookies();
    cookieStore.set('cart', JSON.stringify(cart), { httpOnly: true });
}

// Limpar o carinho de compras
export const clearServerCart = async () => {
    const cookieStore = await cookies();
    cookieStore.delete('cart');
}