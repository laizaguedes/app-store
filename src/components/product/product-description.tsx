"use client"

type Props = {
    description: string
}

export const ProductDescription = ({ description }: Props) => {
    return (
        <div>
            {description}
        </div>
    )
}