import React from 'react';
import { ProductContext } from '../ProductContext/ProductContext';
import './ProductsCount.css'

function ProductsCount(){
    const {completedProducts, totalProducts} = React.useContext(ProductContext);
    return(
        <h1>
            Haz agregado {completedProducts} de {totalProducts} productos para la promocion
        </h1>
    );
}

export { ProductsCount }