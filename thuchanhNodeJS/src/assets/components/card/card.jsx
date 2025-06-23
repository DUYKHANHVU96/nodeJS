import React from "react";
import "./card.css";
const Card = (props) => {

    return (
        <div className="card">
            <h2>Tôi tên là {props.name}</h2>
            <p>Tôi {props.age} tuổi</p>
            <p>Tôi ở {props.address}</p>
        </div>
    )
}       
export default Card;