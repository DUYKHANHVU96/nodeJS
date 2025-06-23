// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Hello from './com/Hello/hello'

// function App() {
//   const [age, setAge] = useState(10);
//   console.log(age)
//   const handleIncAge = () => {
//     setAge(age + 1)
//   };


//   return (
//     <div className="App">
//       <h1>Hello mọi người</h1>
//       <p>Mỗi năm tôi sẽ tăng 1 tuổi</p>
//       <p>Hiện tại tôi: {age}</p>
//       <button onClick={handleIncAge}>Tăng tuổi</button>
//     </div>
//   )
// }

// export default App;

// import React, { useState } from "react";
// import './App.css';

// function App() {
//   const [isOn, setIsOn] = useState(false);

//   const toggleSwitch = () => {
//     setIsOn(!isOn);
//   };

//   return (
//     <div>
//       <div>
//         <span>Đèn:</span>
//         <div className="lightBulb"
//           style={{
//             backgroundColor: isOn ? 'yellow' : 'black'
//           }}></div>
//       </div>
//       <button onClick={toggleSwitch}>Chuyển trạng thái</button>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   // Lưu giá trị email
//   const [email, setEmail] = useState("");
//   // Trạng thái hợp lệ của email
//   const [isValid, setIsValid] = useState(true);

//   // Hàm kiểm tra định dạng email
//   const validateEmail = (email) => {
//     // Biểu thức chính quy kiểm tra email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     // Kiểm tra email khớp với regex
//     return emailRegex.test(email);
//   };
//   // Hàm xử lý khi người dùng nhập giá trị trên ô input
//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     // Cập nhật email vào state
//     setEmail(value);
//     // Kiểm tra email hợp lệ hay không
//     setIsValid(validateEmail(value));
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1>Kiểm tra định dạng Email</h1>
//       <input
//         type="text"
//         placeholder="Nhập email của bạn"
//         // mỗi khi state email thay đổi, component sẽ thực hiện re-render
//         // và cung cấp giá trị mới cho ô input
//         value={email}
//         onChange={handleInputChange}
//         style={{
//           padding: "10px",
//           fontSize: "16px",
//           border: `2px solid ${isValid ? "green" : "red"}`,
//         }}
//       />
//       <p style={{ color: isValid ? "green" : "red", marginTop: "10px" }}>
//         {email
//           ? isValid
//             ? "Email hợp lệ!"
//             : "Email không hợp lệ. Vui lòng kiểm tra lại."
//           : "Vui lòng nhập email để kiểm tra."}
//       </p>
//     </div>
//   );
// }

// export default App;



//