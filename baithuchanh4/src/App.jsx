import UserInfoForm from './components/UserInfoForm/UserInfoForm'
import './App.css'
import { useState } from 'react';
import './index.css';

function App() {
  const [name, setName] = useState('');// state để lưu giá trị của input name
  const [email, setEmail] = useState('');// state để lưu giá trị của input email
  const [password, setPassword] = useState('');// state để lưu giá trị của input password


  const handleEmailChange = (e) => {
    setEmail(e.target.value); //(e) là event, target là thẻ input, value là giá trị của input được nhập vào
    console.log(e.target.value); // in ra giá trị của input email
  } // ý tưởng là lấy giá trị từ input email và set vào state email
  // để khi submit thì có thể lấy được giá trị email
  // tương tự với password và name
  // khi submit thì sẽ lấy được giá trị của name, email, password
  // và in ra console
  // nếu không dùng state thì sẽ không lấy được giá trị của input
  // vì input không có giá trị mặc định, khi nhập vào thì giá trị sẽ không được lưu lại
  // nên phải dùng state để lưu giá trị của input
  // khi nhập vào input thì sẽ gọi hàm handleEmailChange và set giá trị của email
  // khi submit thì sẽ lấy giá trị của email, password, name và in ra console

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();// ngăn chặn hành vi mặc định của form khi submit

    if (name === '' || email === '' || password === '') {
      console.log('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    if (!nameRegex.test(name)) {
      console.log('Tên không hợp lệ');
      return;
    }
    if (!emailRegex.test(email)) {
      console.log('Email không hợp lệ');
      return;
    }
    if (!passwordRegex.test(password)) {
      console.log('Mật khẩu phải có ít nhất 8 ký tự, ít nhất 1 chữ cái và 1 số');
      return;
    }
    console.log('Đăng nhập thành công:', { name, email, password });
  }

  //validate email và password để đảm bảo người dùng nhập đúng định dạng
  const nameRegex = /^[a-zA-Z\s]+$/; // regex để kiểm tra tên chỉ chứa chữ cái và khoảng trắng


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex để kiểm tra email đúng định dạng


  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // regex để kiểm tra password có ít nhất 8 ký tự, ít nhất 1 chữ cái và 1 số


  return (
    <>
      <h2>Đăng nhập email</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <UserInfoForm label="Name" type="text" handleChange={handleNameChange} />
        <UserInfoForm label="Email" type="email" handleChange={handleEmailChange} />
        <UserInfoForm label="Password" type="password" handleChange={handlePasswordChange} />
        <button type="submit">Đăng nhập</button>
      </form>
    </>
  )
}


export default App;
