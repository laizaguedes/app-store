"use server"

import { data } from "@/data"
import { Address } from "@/types/address"

export const getUserAddress = async (token: string | null): Promise<Address[]> => {
    // TODO: requisição para pegar endereço do usuário pelo token

    return data.addresses;
}