import { link } from "fs";

export const data = {
    banners: [
        { img: '/assets/banners/banner-1.png', link: '' },
        { img: '/assets/banners/banner-2.png', link: '' },
        { img: '/assets/banners/banner-3.png', link: '' },
        { img: '/assets/banners/banner-4.png', link: '' },
    ],
    products: [
        { id: 1, label: 'Camisa PHP', price: 49.90, image: '/assets/products/camiseta-php.png', liked: false },
        { id: 2, label: 'Camisa Node', price: 39.90, image: '/assets/products/camiseta-node.png', liked: false },
        { id: 3, label: 'Camisa Laravel', price: 59.90, image: '/assets/products/camiseta-laravel-branca.png', liked: false },
        { id: 4, label: 'Camisa React', price: 49.90, image: '/assets/products/camiseta-react-azul.png', liked: false },
    ],
    product: {
        id: 1,
        label: 'Camisa PHP',
        price: 49.90,
        liked: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nunc, eu aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nunc, eu aliquam nisl nisl sit amet lorem.',
        images: [
            '/assets/products/camiseta-php.png',
            '/assets/products/camiseta-node.png',
            '/assets/products/camiseta-laravel-branca.png',
            '/assets/products/camiseta-react-azul.png',
        ]
    }
}