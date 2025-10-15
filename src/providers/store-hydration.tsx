"use client"

import { getCartState } from "@/actions/get-cart-state";
import { useCartStore } from "@/store/cart";
import { useEffect } from "react";

export const StoreHydration = () => {
    //Pegar um item do servidor e jogar no client
    useEffect(() => {
        getCartState().then(({ cart }) => {
            if (cart.length > 0) {
                useCartStore.setState({ cart });
            };
        });
    }, []);

    return null;
};