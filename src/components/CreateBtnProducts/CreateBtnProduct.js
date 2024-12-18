import { MdAdd } from "react-icons/md";

import './CreateBtnProduct.css'

function CreateBtnProduct(){
    return (
        <button
            className="BtnPrimary"
            title="Add Product"
            color="#841584"
            ><MdAdd size={50} className="Icon"/></button>
    );
}

export { CreateBtnProduct };