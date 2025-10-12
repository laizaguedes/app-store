"use client"

import { useQueryString } from "@/hooks/use-querystring";
import { useState } from "react";
import { FilterGroup } from "./filter-group";
import { data } from "@/data";
import { ProductItem } from "../product-item";

export const ProdutListFilter = () => {
    const queryString = useQueryString();
    const [filterOpened, setFilterOpened] = useState(false);
    
    const order = queryString.get('order') || 'views';
    
    const handleSelectChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        queryString.set('order', value);
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                <div className="text-3xl">
                    <strong>{data.products.length}</strong> Produto{data.products.length !== 1 ? 's' : ''}
                </div>
                <div className="md:max-w-70 flex flex-row gap-5">
                    <select
                        defaultValue={order}
                        onChange={handleSelectChanged}
                        className="h-14 flex-1 flex items-center px-6 bg-white border border-gray-200 rounded-sm text-gray-500"
                    >
                        <option value="views">Popularidade</option>
                        <option value="price">Por preço</option>
                        <option value="selling">Mais vendidos</option>
                    </select>
                    <div 
                        onClick={() => setFilterOpened(!filterOpened)}
                        className="h-14 flex-1 flex md:hidden items-center px-6 bg-white border border-gray-200 rounded-sm text-gray-500"
                    >
                        Filtrar por
                    </div>
                </div>
            </div>
            <div className="mt-8 flex flex-col md:flex-row gap-8">
                <div className={`flex-1 md:max-w-70 ${filterOpened ? 'block' : 'hidden'} md:block`}>
                    <FilterGroup id="tech" name="Tecnolocias" />
                    <FilterGroup id="color" name="Cores" />
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.products.map(product => (
                        <ProductItem data={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}