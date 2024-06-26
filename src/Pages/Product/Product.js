import { useContext } from "react";
import { useMatch } from "react-router-dom"
import { AppContext } from "../../App";
import NotFound from "../NotFound/NotFound";
import { AddToCart } from "../../Components/AddToCart/AddToCart";
import './Product.css'

export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);

  const product = products.find(product => product.slug === params.slug);

  if (!product) {
    return <NotFound />
  }

  return (
    <div className="Product flex">
      <div className="ProductImg">
        <img src={product.picture} alt={product.name} />
      </div>
      <div className="ProductIn">
        <h1 className="ProductName">{product.name}</h1>
        <p className="ProductPrice"><strong>Цена:</strong> {product.price}c</p>
        <p className="ProductDesc"><strong>Описание: </strong>{product.description}</p>
        <div className="ProductButton">
        <AddToCart product={product} />

        </div>
        
      </div>
    </div>
  )
}