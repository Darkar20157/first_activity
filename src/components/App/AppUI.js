import { ProductsCount } from '../ProductsCount/ProductsCount';
import { ProductSearch } from '../ProductSearch/ProductSearch';
import { ListProducts } from '../ListProducts/ListProducts';
import { CreateBtnProduct } from '../CreateBtnProducts/CreateBtnProduct';
import { ProductItem } from '../ProductItem/ProductItem';
import { Loading } from '../utils/Loading';
import { Error }  from '../utils/Error';
import { EmptyData } from '../utils/EmptyData';
import { ProductContext } from '../ProductContext/ProductContext';
import { Modal } from '../Modal/Modal';

import React from "react";

function AppUI(){
    const {
      searchListProduct, 
      completeProduct, 
      removeProduct, 
      loading, 
      error,
      openModalState,
      setOpenModalState} = React.useContext(ProductContext); //Permite traer los datos del provider ya se esta usando ese contexto
      //Tambien se puede traer los datos con el ProductContext.Consumer
  
    return (
        <React.Fragment>
          <ProductsCount/>
          <div className='App-center'>
            <ProductSearch/>
            <ListProducts>
                {loading && Array(3).fill(<Loading />) }
                {error && <Error/>  }
                {(loading && searchListProduct.length === 0) && <EmptyData/> }
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
          <CreateBtnProduct setOpenModalState={setOpenModalState} />
            {openModalState && (
              <Modal></Modal>
            )}
        </React.Fragment>
    );
}

export { AppUI };