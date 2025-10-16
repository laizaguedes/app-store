import { CartListItem } from "@/types/cart-list-item"
import Image from "next/image";

type Props = {
    item: CartListItem;
}

export const CartProductItem = ({ item }: Props) => {
    return (
        <div className="flex items-center p-6 gap-4 md:gap-8 border-0 md:border-b border-gray-200">
            <div className="border border-gray-200 p-1">
                <Image
                    src={item.product.image}
                    alt={item.product.label}
                    width={96}
                    height={96}
                    className="size-24 lg:size-16"
                />
            </div>
            <div className="flex-1 flex flex-col lg:flex-row justify-between items-start lg:items-center">
                <div>
                    <div className="text-sm font-bold">{item.product.label}</div>
                    <div className="hidden lg:block text-xs text-gray-500 mt-8">COD: {item.product.id}</div>
                </div>
                <div>
                    <div className="flex text-gray-500 border border-gray-200 rounded-sm text-center">
                        <div className="cursor-pointer size-10 text-2xl flex justify-center items-center">
                            -
                        </div>
                        <div className="size-10 text-lg flex justify-center items-center border-x border-gray-200">
                            {item.quantity}
                        </div>
                        <div className="cursor-pointer size-10 text-2xl flex justify-center items-center">
                            +
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-24 lg:w-40 flex flex-col lg:flex-row justify-between items-end lg:items-center">
                <div className="text-lg text-blue-700 font-bold">R$ {item.product.price.toFixed(2)}</div>
                <div>
                    <div className="cursor-pointer size-12 border border-gray-200 flex justify-center items-center rounded-sm">
                        <Image
                            src={'/assets/ui/trash.png'}
                            alt="Remover"
                            width={24}
                            height={24}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}