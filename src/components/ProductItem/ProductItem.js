import { FaCheck } from "react-icons/fa";

import './ProductItem.css'

function ProductItem(props){
    return (
        <>
            <li className="Item">
                <span onClick={props.onAdd} className={`check ${props.completed && 'check--active'}`}><FaCheck/></span>
                <span className={`description ${props.completed && 'description--active'}`}>{props.text}</span>
                <span onClick={props.onRemove} className="delete">X</span>
            </li>
        </>
    );
}

export { ProductItem };