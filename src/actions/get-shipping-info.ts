"use server"

type getShippingInfoResponse = {
    zipCode: string
    cost: number
    days: number
}

export const getShippingInfo = async (zipCode: string): Promise<getShippingInfoResponse | false> => {
    // TODO: requisição para pegar info do cep
    return {
        zipCode: '12345',
        cost: 7,
        days: 3
    }
}