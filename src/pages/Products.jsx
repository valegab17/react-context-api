//importo useState e useEffect per gestire lo stato della lista
import { useState, useEffect } from "react"
//mi importo axios per la chiamata all'api dei prodotti
import axios from "axios"

//creo la mia const solita per definire l'endpoint
const endpoint = "https://fakestoreapi.com/products"

function Products() {
 //destructuring di lista prodotti
 const[list, setList] = useState([])

 useEffect(()=>{
  //faccio la chiamata al mio api
  axios.get(endpoint)
    .then((res)=>{
      setList(res.data)
    }) .catch(err=> console.error(err))
 },[])

  return (
    <>
     <h2>IO SARÒ LA LISTA PRODOTTI</h2>


      {list.map(product => (
        <div key={product.id}>
          <h4>{product.title}</h4>
          <p>{product.price} €</p>
            <img src={product.image} alt="" />
            </div>
      ))}
    </>
  )
}

export default Products
