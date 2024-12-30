import { MdAdd } from "react-icons/md";

import './CreateBtnProduct.css'

function CreateBtnProduct({setOpenModalState}){
    return (
        <button
            className="BtnPrimary"
            title="Add Product"
            color="#841584"
            onClick={() => 
                setOpenModalState(state => !state)
            }
            ><MdAdd size={50} className="Icon"/></button>
    );
}

export { CreateBtnProduct };