import { UseCustomHooks } from '../../customHooks/productServices';
import { AppUI } from './AppUI';
import React  from 'react';
import './App.css';


function App() {
  const {
    items : item,
    saveItemLocal: saveItemLocal,
    loading: loading,
    error: error
  } = UseCustomHooks('listProducts', []); //Uso el CustomHooks para hacer una experiencia a un metodo API

  const [searchValue, setSearchValue] = React.useState(''); // UseState para el input
  const completedProducts = item.filter(x => !!x.completed).length; // !! trabaja con valores falsos o verdaderos
  const totalProducts = item.length;

  const searchListProduct = item.filter((x) => x.text.toLowerCase().includes(searchValue.toLowerCase()));

  const completeProduct = (text) => {
    const newProducts = [...item];
    const indexProduct = newProducts.findIndex(
      (item) => item.text === text
    )
    newProducts[indexProduct].completed = true;
    saveItemLocal(newProducts);
  }

  const removeProduct = (text) => {
    const newProducts = [...item];
    const indexProduct = newProducts.findIndex(
      (item) => item.text === text
    );
    newProducts.splice(indexProduct, 1)
    saveItemLocal(newProducts);
  }

  return (
    <AppUI
      completedProducts={completedProducts}
      totalProducts={totalProducts}
      searchValue={searchValue}
      searchListProduct={searchListProduct}
      setSearchValue={setSearchValue}
      completeProduct={completeProduct}
      removeProduct={removeProduct}
      loading={loading}
      error={error}
    />
  )
}

export default App;
