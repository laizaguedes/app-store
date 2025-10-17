import { getShippingInfo } from "@/actions/get-shipping-info";
import { useCartStore } from "@/store/cart";

export const ShippingBoxNotLogged = () => {
    const cartStore = useCartStore(state => state);
    const handleUpdateShipping = async () => {
        if(cartStore.shippingZipCode.length > 4) {
            const shippingInfo = await getShippingInfo(cartStore.shippingZipCode);
            if (shippingInfo) {
                cartStore.setShippingCost(shippingInfo.cost);
                cartStore.setShippingDays(shippingInfo.days);
            }
        }
    }

    return (
        <div className="flex gap-4">
            <input
                type="text"
                value={cartStore.shippingZipCode}
                onChange={e => cartStore.setShippingZipCode(e.target.value)}
                placeholder="Digite seu CEP"
                className="flex-1 px-6 py-5 bg-white border border-gray-200 rounded-sm"
            />
            <button
                className="cursor-pointer px-6 py-5 bg-blue-600 text-white border-0 rounded-sm"
                onClick={handleUpdateShipping}
            >
                Calcular
            </button>
        </div>
    )
}