import { UseCustomHooks } from '../../customHooks/productServices';
import React from 'react';

const ProductContext = React.createContext();

function ProductProvider({ children }){
    const {
        items,
        saveItemLocalStorage,
        loading,
        error
      } = UseCustomHooks('listProducts', []); //Uso el CustomHooks para hacer una experiencia a un metodo API
      const [searchValue, setSearchValue] = React.useState(''); // UseState para el input
      const [openModalState, setOpenModalState] = React.useState(false);

      const completedProducts = items.filter(x => !!x.completed).length; // !! trabaja con valores falsos o verdaderos
      const totalProducts = items.length;
    
      const searchListProduct = items.filter((x) => x.text.toLowerCase().includes(searchValue.toLowerCase()));
    
      const addProductToList = (text) => {
        const newProducts = [...items];
        newProducts.push({text, completed: false});
        saveItemLocalStorage(newProducts);
      }

      const completeProduct = (text) => {
        const newProducts = [...items];
        const indexProduct = newProducts.findIndex(
          (item) => item.text === text
        )
        newProducts[indexProduct].completed = true;
        saveItemLocalStorage(newProducts);
      }
    
      const removeProduct = (text) => {
        const newProducts = [...items];
        const indexProduct = newProducts.findIndex(
          (item) => item.text === text
        );
        newProducts.splice(indexProduct, 1)
        saveItemLocalStorage(newProducts);
    }
    return(
        <ProductContext.Provider value={{
            completedProducts,
            totalProducts,
            searchValue,
            searchListProduct,
            setSearchValue,
            completeProduct,
            removeProduct,
            loading,
            error,
            openModalState,
            setOpenModalState,
            addProductToList
        }}>
        {children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProvider }