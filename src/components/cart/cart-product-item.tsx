import { setCartState } from "@/actions/set-cart-state";
import { useCartStore } from "@/store/cart";
import { CartListItem } from "@/types/cart-list-item"
import Image from "next/image";

type Props = {
    item: CartListItem;
}

export const CartProductItem = ({ item }: Props) => {
    const cartStore = useCartStore(state => state);

    const updateCookie = async() => {
        const updateCart = useCartStore.getState().cart;
        await setCartState(updateCart);
    }

    const handleMinus = async() => {
        if (item.quantity > 1) {
            cartStore.updateQuantity(item.product.id, item.quantity - 1);
            await updateCookie();
        } else {
            await handleRemove();
        }
    }

    const handlePlus = async() => {
        cartStore.updateQuantity(item.product.id, item.quantity + 1);
        await updateCookie();
    }

    const handleRemove = async() => {
        cartStore.removeItem(item.product.id);
        await updateCookie();
    }

    return (
        <div className="flex items-center p-6 gap-4 md:gap-8 border-0 md:border-b border-gray-200">
            <div className="border border-gray-200 p-1">
                <Image
                    src={item.product.image}
                    alt={item.product.label}
                    width={96}
                    height={96}
                    className="size-18 sm:size-24 lg:size-16"
                />
            </div>
            <div className="flex-1 flex flex-col lg:flex-row justify-between items-start lg:items-center">
                <div>
                    <div className="text-sm font-bold mb-2">{item.product.label}</div>
                    <div className="hidden lg:block text-xs text-gray-500">COD: {item.product.id}</div>
                </div>
                <div>
                    <div className="w-21 sm:w-30 flex text-gray-500 border border-gray-200 rounded-sm text-center">
                        <div onClick={handleMinus} className="cursor-pointer size-7 sm:size-10 text-2xl flex justify-center items-center">
                            -
                        </div>
                        <div className="size-7 sm:size-10 text-lg flex justify-center items-center border-x border-gray-200">
                            {item.quantity}
                        </div>
                        <div onClick={handlePlus} className="cursor-pointer size-7 sm:size-10 text-2xl flex justify-center items-center">
                            +
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-24 lg:w-40 flex flex-col lg:flex-row justify-between items-end lg:items-center">
                <div className="text-lg text-blue-700 font-bold">R$ {item.product.price.toFixed(2)}</div>
                <div>
                    <div onClick={handleRemove} className="cursor-pointer size-8 sm:size-12 border border-gray-200 flex justify-center items-center rounded-sm">
                        <Image
                            src={'/assets/ui/trash.png'}
                            alt="Remover"
                            width={24}
                            height={24}
                            className="size-4 sm:size-6"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}