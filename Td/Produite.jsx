import React from "react";
export default function Produite({ product }) {
  return (
    <div className="col-md-3 mb-2">
      <div classNmae="card " style={{ width: "18rem" }}>
        <img src={product.img} classNmae="card-img-top" alt="..." />
        <div classNmae="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h6 classNmae="card-text">{product.price} $</h6>
          <p className="card-text">{product.desc}</p>

          <button type="button" className="btn btn-outline-dark">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}