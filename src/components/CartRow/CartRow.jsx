import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import './CartRow.style.scss'

const CartRow = ({ children, title, href, className = "" })=>{

    return(
     <div className={clsx("CartRow", className)}>
         <div className="CartRow__header">
             <h1>{title}</h1>
             <Link to={href}>{"مشاهده همه محصولات"}</Link>
         </div>
         <div className={"CartRow__content"}>
             <div style={{display:'flex' , overflowX:"scroll", margin:25}}>
                 {children}
             </div>
         </div>
     </div>
    )
}

export default CartRow;