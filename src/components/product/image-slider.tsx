"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
    images: string[]
}

export const ImageSlider = ({ images }: Props) => {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="max-h-sm mx-auto md:mx-0">
            <div className="border border-gray-300 bg-white p-14">
                <Image
                    src={images[activeImage]}
                    alt=""
                    width={380}
                    height={380}
                    className="max-w-full"
                />
            </div>
            <div className="grid grid-cols-4 gap-6 mt-8">
                {images.map((img, index) => (
                    <div
                        key={img}
                        className={`flex items-center justify-center cursor-pointer border p-2 bg-white ${index === activeImage ? 'border-blue-500' : 'border-gray-300'}`}
                        onClick={() => setActiveImage(index)}
                    >
                        <Image
                            src={img}
                            alt=""
                            width={80}
                            height={80}
                        />
                    </div>
                ))}
            </div>
        </div> 
    )
}