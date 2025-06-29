import React from 'react'
import './Card.css'
const Card = (props) => {
    return (
        <>
            <div className='Card'>
                <p>Tôi tên là: {props.name}</p>
                <p>Tôi học lớp: {props.class}</p>
                <p>{props.slogan}</p>
            </div>
        </>
    )
}

export default Card