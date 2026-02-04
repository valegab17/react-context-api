import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
function DetailProducts() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const endpointNew = `https://fakestoreapi.com/products/${id}`
  useEffect(() => {
    axios.get(endpointNew)
         .then((res) => {
        console.log(res.data)
        setProduct(res.data)
      })
      .catch(err => console.error(err))
  }, [id])

  if (!product) return <p>Caricamento...</p>

  return (
    <>
      <h2>Dettaglio Prodotto</h2>
      <h3>{product.title}</h3>
      <img
        src={product.image}
      />
      <p>{product.description}</p>
      <p><strong>Prezzo: </strong>{product.price} €</p>
      <Link to="/Products" className="btn btn-primary">TORNA AI PRODOTTI</Link>
    </>
  )
}

export default DetailProducts