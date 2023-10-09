import { useEffect, useState } from "react";
import { products } from "../productsMock";
import ItemList from "./ItemList";


const ItemListContainer = () => {
  const [items,setItems]=useState([])

  useEffect ( ()=>{
  const tarea= new Promise((resolve,reject)=>{
    resolve(products);
  }); 
  tarea
  .then( (res)=> setItems(res))
  .catch((error)=>console.log(error));
   //const tarea2=fetch("api")
},[] )
  return <ItemList items={items}/>;
};
export default ItemListContainer;
  /*return (
    
    <div>
      <h4>Bienvenida {nombre}!!!</h4>
    </div>
  );*/

