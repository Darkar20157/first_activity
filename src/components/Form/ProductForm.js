import React from "react";
import { ProductContext } from '../ProductContext/ProductContext';

function ProductForm(){

    const { addProductToList, setOpenModalState } = React.useContext(ProductContext);
    const [ newProductState, setNewProductState ] = React.useState('');

    const addProduct = (event) => {
        event.preventDefault();
        addProductToList(newProductState);
        setOpenModalState(false);
    }

    const cancelModal = (event) => {
        event.preventDefault();
        setOpenModalState(false);
    };


    const onChange = (event ) => {
        setNewProductState(event.target.value);
    }
    return (
        <form className='Modal-Container' onSubmit={addProduct}>
            <h4>Escribe tu nuevo Producto</h4>
            <textarea placeholder='Ejemplo: Short' value={newProductState} onChange={onChange}></textarea>
            <div className='Buttons'>
                <button className='Btn-Secondary' type="button" onClick={cancelModal}>Cancelar</button>
                <button className='Btn-Primary' type="submit" onClick={addProduct}>Añadir</button>
            </div>
        </form>
    )
}

export { ProductForm };