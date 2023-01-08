import React from "react";
import Produite from "./Produite";

export default function ProductList({ products }) {
  return (
    <div className="row my-4">
   {
    products.map(product => <Produite key={product.id}
    product={product}/>)
   }
    </div>
  );
}