import reactDom from "react-dom";
import React from "react";

export default function Detail(props){
    console.log(props.match.params.key)
    return (
        <div>
            <p>Deneme</p>
        </div>
    )
}