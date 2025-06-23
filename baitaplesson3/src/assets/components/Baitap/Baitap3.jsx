import React from 'react';
import './Baitap3.css';
const Baitap3 = (props) => {

 return (
    <div className='Card'>
        <p>Tôi là {props.name}</p>
        <p>Tôi {props.age} tuổi</p>
        <p>Tôi ở {props.address}</p>
    </div>
 )
}
export default Baitap3;