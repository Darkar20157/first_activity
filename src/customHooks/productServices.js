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
  const [items, setItems] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);

  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() =>  {
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if(!localStorageItem || localStorageItem === "[]"){
          localStorage.setItem("listProducts", JSON.stringify(listProducts));
          parsedItem = listProducts;
        }else{
          parsedItem = JSON.parse(localStorage.getItem(itemName));
        }
        setItems(parsedItem);
        setLoading(false);
      }catch(err){
        setError(err);
      }finally{
        setLoading(false);
      }
    }, 2000)
  }, []);

  const saveItemLocalStorage = (newItem) =>{
    localStorage.setItem("listProducts", JSON.stringify(newItem));
    setItems(newItem);
  }
  return {
    items,
    saveItemLocalStorage,
    loading,
    error
  }
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