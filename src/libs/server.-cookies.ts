import { CartItem } from "@/types/cart-item";
import { cookies } from "next/headers";

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