import React from "react";
import ProduitItem from "./ProduitItem";



function Produit(){
    return(
        <div className="container">
            <div className="row md-5">
                <div className="col-md-6 mx-auto">
                    <div className="card bg">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Produit</th>
                                    <th>Price</th>
                                    <th>Desc</th>
                                    <th>Deleate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ProduitItem />
                            </tbody>
                        </table>
                    </div>
                    </div>
            </div>
        </div>
        );
}
export default Produit;