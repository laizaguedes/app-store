"use client"

import Image from "next/image";
import { useState } from "react";

type Props = {
    description: string
}

export const ProductDescription = ({ description }: Props) => {
    const [opened, setOpened] = useState(true);
    return (
        <div className="bg-white border border-gray-200 px-6 md:px-12 mt-20">
            <div className={`flex justify-between items-center py-7 ${opened ? 'border-b' : 'border-0'} border-gray-200`}>
                <div className="text-2xl">Informações do Produto</div>
                <div
                    onClick={() => setOpened(!opened)}
                    className={`cursor-pointer size-10 border border-gray-200 flex justify-center items-center rounded-sm`}
                >
                    <Image
                        src={'/assets/ui/arrow-left-s-line.png'}
                        alt="Opened/Closed"
                        width={24}
                        height={24}
                        className={`transition-all ${opened ? 'rotate-180' : 'rotate-0'}`}
                    />
                </div>
            </div>
            {opened &&
            <div className="text-gray-500 mt-12 pb-12">{description}</div>
            }
        </div>
    )
}