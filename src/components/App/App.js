import { AppUI } from './AppUI';
import React  from 'react';
import './App.css';
import { ProductProvider } from '../ProductContext/ProductContext';


function App() {

  return (
    <ProductProvider>
      <AppUI/>
    </ProductProvider>
  )
}

export default App;
