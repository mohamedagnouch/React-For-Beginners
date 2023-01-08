import React from "react";


function ProduitItem(){
    return (
      <div>
        <tr>
          <td>PC</td>
          <td>234</td>
          <td>SIII</td>
          <td>
            <span className="badge text-bg-danger">&times;</span>
          </td>
        </tr>
      </div>
    );
}
export default ProduitItem;