import { ProductsCount } from '../ProductsCount/ProductsCount';
import { ProductSearch } from '../ProductSearch/ProductSearch';
import { ListProducts } from '../ListProducts/ListProducts';
import { CreateBtnProduct } from '../CreateBtnProducts/CreateBtnProduct';
import { ProductItem } from '../ProductItem/ProductItem';

import React from "react";

function AppUI(
    {
        completedProducts,
        totalProducts,
        searchValue,
        searchListProduct,
        setSearchValue,
        completeProduct,
        removeProduct
    }
){
    return (
        <React.Fragment>
          <ProductsCount productsAdd={completedProducts} totalProducts={totalProducts}/>
          <div className='App-center'>
            <ProductSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />
            <ListProducts>
              {searchListProduct.map((item, index) => (
                <ProductItem 
                  key={index} 
                  text={item.text} 
                  completed={item.completed} 
                  onAdd={() => completeProduct(item.text)}
                  onRemove={() => removeProduct(item.text)}
                />
              ))}
          </ListProducts>
          </div>
          <CreateBtnProduct/>
        </React.Fragment>
    );
}

export { AppUI };