import * as React from 'react';
import { ProductCard } from './ProductCard';

export interface ProductPageProps {
    productList: Array<Object>;
    BuyButton: React.ComponentType<{ item: Object}>
}

export const ProductPage: React.FC<ProductPageProps> = ({ productList, BuyButton }) => {
    return (
        <div className="container">
            <div className="row">
                {productList.map((product) => {
                    return (
                        <ProductCard 
                            key={product.product_id}
                            name={product.name} 
                            price={product.price} 
                            description={product.description}
                            image={product.image}
                            buyBtn={<BuyButton item={product} />} />
                    )
                })}
            </div>
        </div>
    )
}