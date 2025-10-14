import { ImageSlider } from "@/components/product/image-slider";
import { ProductDescription } from "@/components/product/product-description";
import { ProductDetails } from "@/components/product/product-details";
import { RelatedProducts } from "@/components/product/related-products";
import { RelatedProductsSkeleton } from "@/components/product/related-products-skeleton";
import { data } from "@/data";
import Link from "next/link";
import { Suspense } from "react";

type Props = {
    params: Promise<{ id: string }>
}

export default async function Page({ params }: Props) {
    const { id } = await params;

    // TODO: pegar as informações do produto

    return (
        <div>
            <div className="text-gray-500 mb-4">
                <Link href={'/'}>Home</Link> &gt; <Link href={'/'}>Temporário</Link> &gt; {data.product.label}
            </div>

            <div className="flex flex-col md:flex-row gap-6 lg:gap-30 md:gap-6">
                <ImageSlider images={data.product.images} />
                <ProductDetails product={data.product} />
            </div>

            <ProductDescription description={data.product.description} />
            
            <Suspense fallback={<RelatedProductsSkeleton />}>
                <RelatedProducts id={data.product.id} />                 
            </Suspense>
        
        </div>
    )
}