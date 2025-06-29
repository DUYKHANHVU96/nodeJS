import React from 'react'
import './Hello.css'
const Hello = (props) => {
  const school = "MindX Technology School";
  console.log(props);
  const age = props.age;
  const name = props.name ;
  // mảng này còn có thể là 1 mảng component được
  const listName = ["Alice" ,"John Wick", "Bob", "David"]; //đây có phải là 1 array của react không?
  //đây là 1 array của react 
  return (
      <div className='hello-container'>
          <h1>Bạn là người {age >= 20 ? "trưởng thành" : "đang lớn"}!</h1>
          <p>Hello everyone, welcome to {school}</p>
          {listName}
      </div>  
  )
}

export default Hello