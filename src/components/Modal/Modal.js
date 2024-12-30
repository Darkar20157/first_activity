import React from 'react';
import { ProductForm } from '../Form/ProductForm';
import './Modal.css'
import ReactDOM from 'react-dom';

function Modal({ children }){
    return ReactDOM.createPortal(
        <div className='Background-Modal'>
            <div className='Modal'>
                <ProductForm> </ProductForm>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal };