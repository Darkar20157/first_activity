import React from "react";

// const API_URL = "https://fakestoreapi.com/products";

const listProducts = [
  { text: "Zapatos", completed: true},
  { text: "Medias", completed: true},
  { text: "Buso", completed: false},
  { text: "Sudadera", completed: false},
  { text: "Pantalon", completed: true},
  { text: "Jean", completed: false},
  { text: "Camisa", completed: true},
  { text: "Gorra", completed: true},
  { text: "Collar", completed: true}
]

function UseCustomHooks(itemName, initialValue){
  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if(!localStorageItem || localStorageItem === "[]"){
    localStorage.setItem("listProducts", JSON.stringify(listProducts));
    parsedItem = listProducts;
  }else{
    parsedItem = JSON.parse(localStorage.getItem("listProducts"));
  }

  const [items, setItems] = React.useState(parsedItem);

  const saveItemLocalStorage = (newItem) =>{
    localStorage.setItem("listProducts", JSON.stringify(newItem));
    setItems(newItem);
  }
  return [items, saveItemLocalStorage];
}

// const getAllProducts = async () =>{
//     try{
//         const response = await fetch(API_URL);
//         if(!response.ok){
//             throw new Error(`Error: ${response.statusText}`);
//         }
//         return await response.json();
//     }catch(err){
//         console.error("Error en getAllProducts:", err);
//         throw err;
//     }
// }

export { UseCustomHooks };