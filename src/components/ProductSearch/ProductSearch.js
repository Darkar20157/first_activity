import React from "react";
import { ProductContext } from "../ProductContext/ProductContext";

function ProductSearch(){
    const { searchValue, setSearchValue } = React.useContext(ProductContext);
    return (
        <input
            placeholder="Buscar productos" 
            className="search"
            value={searchValue}
            onChange={
                (event) => {
                    setSearchValue(event.target.value);
                }
            }
        />
    )
}

export { ProductSearch };