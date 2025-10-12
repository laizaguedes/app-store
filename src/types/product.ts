export type Product = {
    id: number;
    label: string;
    price: number;
    image: string;
    liked: boolean
}

export type ProductComplete = {
    id: number;
    label: string;
    description: string;
    price: number;
    images: string[];
    liked: boolean
}