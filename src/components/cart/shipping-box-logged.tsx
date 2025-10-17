"use client"

import { getShippingInfo } from "@/actions/get-shipping-info";
import { getUserAddress } from "@/actions/get-user-address";
import { useAuthStore } from "@/store/auth";
import { useCartStore } from "@/store/cart";
import { Address } from "@/types/address";
import { ChangeEvent, useEffect, useState, useTransition } from "react";
import { AddressModal } from "./address-modal";

export const ShippingBoxLogged = () => {
    const { token, hydrated } = useAuthStore(state => state);
    const cartStore = useCartStore(state => state);
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [modalOpened, setModalOpened] = useState(false);
    const [pedding, startTransition] = useTransition();

    useEffect(() => {
        if(hydrated){
            startTransition(() => {
                getUserAddress(token).then(setAddresses);
            });
        }
    }, [token, hydrated])

    //quando o endereço for trocado é atualizada as informacoes de frete
    useEffect(() => {
        if (cartStore.selectedAddressId) {
            updateShippingInfo()
        }
    }, [cartStore.selectedAddressId])

    const handleSelectAddress = async(e: ChangeEvent<HTMLSelectElement>) => {
        cartStore.clearShipping();
        const id = parseInt(e.target.value);

        if (id) {
            const address = addresses.find(item => item.id === id);
            if (address) {
                cartStore.setShippingZipCode(address.zipCode);
                cartStore.setSelectedAddressId(id);
            }
        }
    }

    const updateShippingInfo = async () => {
        if (cartStore.shippingZipCode.length > 4) {
            const shippingInfo = await getShippingInfo(cartStore.shippingZipCode);
            if (shippingInfo) {
                cartStore.setShippingCost(shippingInfo.cost);
                cartStore.setShippingDays(shippingInfo.days);
            }
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <select
                value={cartStore.selectedAddressId ?? ''}
                onChange={handleSelectAddress}
                className="flex-1 px-6 py-5 bg-white border border-gray-200 rounded-sm"
            >
                <option value="">
                    {addresses.length === 0 ? 'Nenhum endereço cadastrado' : 'Selecione um endereço'}
                </option>
                {addresses.map(item => (
                    <option key={item.id} value={item.id}>
                        {item.street}, {item.number} - {item.city} ({item.zipCode})
                    </option>
                ))}
            </select>
            <button
                onClick={() => setModalOpened(true)}
                className="cursor-pointer py-3 bg-blue-600 hover:bg-blue-700 text-white border-0 rounded-sm"
            >
                Adicionar um novo endereço
            </button>
            <AddressModal
                open={modalOpened}
                onClose={() => setModalOpened(false)}
            />
        </div>
    )
}