import React from "react";
import './IconButton.style.scss'



const IconButton = ({children , onclick})=>{
    const handelClick = (e)=>{
        e.stopPropagation();
        if (onclick){
            onclick(e);
        }
    }

    return(
        <div role={"button"} onClick={handelClick} className={"iconButton"}>
            {children}
        </div>
    )
}


export default IconButton;