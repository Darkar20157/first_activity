import './ProductsCount.css'

function ProductsCount({ productsAdd, totalProducts }){
    return(
        <h1>
            Haz agregado {productsAdd} de {totalProducts} productos para la promocion
        </h1>
    );
}

export { ProductsCount }