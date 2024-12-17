import React from "react";

function ProductSearch({searchValue, setSearchValue}){
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