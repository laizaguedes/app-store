import { Banner } from "@/types/banner"
import Image from "next/image"
import Link from "next/link"

type Props = {
    list: Banner[]
}

export const Banners = ({ list }: Props) => {
    return (
        <div>
            <div className="relative aspect-[3/1]">{/* com a classe relativa é possível trazer todas as imagens uma embaixo da outra utilizando o absolute */}
                {list.map((banner: any, index) => (
                    <Link
                        key={index}
                        href={banner.link}
                        className="transition-all absolute inset-0"
                    >
                        <Image
                            src={banner.img}
                            alt=""
                            width={1200}
                            height={400}
                            className="rounded-sm"
                        />
                    </Link>
                ))}
            </div>
            <div className="">
                ...
            </div>
        </div>
    )
}