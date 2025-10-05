import { data } from "@/data";
import { ProductList } from "../product-list";

export const MostSoldProduct = async () => {
    // TODO: Fazer a requisição dos produtos
    return (
        <div className="mt-10">
            <h2 className="text-2xl md:text-left">Produtos mais vendidos</h2>
            <p className="text-gray-500 md:text-left">Campeões de vendas da nossa loja.</p>
        
            <div className="mt-9">
                <ProductList list={data.products} />
            </div>
        </div>
    );
}