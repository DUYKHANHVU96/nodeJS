import UserInfoForm from './components/UserInfoForm/UserInfoForm'
import './App.css'
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
    e.preventDefault();
    console.log(name, email, password);
  }

  //validate email và password để đảm bảo người dùng nhập đúng định dạng
  const nameRegex = /^[a-zA-Z\s]+$/; // regex để kiểm tra tên chỉ chứa chữ cái và khoảng trắng


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex để kiểm tra email đúng định dạng


  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // regex để kiểm tra password có ít nhất 8 ký tự, ít nhất 1 chữ cái và 1 số


  if (name === '' || email === '' || password === '') // kiểm tra nếu name, email, password rỗng thì sẽ không cho submit
    {
    alert('Vui lòng nhập đầy đủ thông tin');
    return;
  }

  if (!nameRegex.test(name)) { // kiểm tra nếu name không đúng định dạng thì sẽ không cho submit
    alert('Tên không hợp lệ');
    return;
  }
  if (!emailRegex.test(email)) { // kiểm tra nếu email không đúng định dạng thì sẽ không cho submit
    alert('Email không hợp lệ');
    return;
  }
  if (!passwordRegex.test(password)) { // kiểm tra nếu password không đúng định dạng thì sẽ không cho submit
    alert('Mật khẩu phải có ít nhất 8 ký tự, ít nhất 1 chữ cái và 1 số');
    return;
  }
  // nếu tất cả các điều kiện trên đều đúng thì sẽ in ra console
  console.log('Đăng nhập thành công:', { name, email, password });
  // và có thể gửi dữ liệu lên server hoặc làm gì đó khác
  // ở đây chỉ in ra console để kiểm tra
  // nếu không có lỗi thì sẽ gọi hàm handleSubmit để xử lý dữ liệu

  return (
    <>
      <h2>Đăng nhập email</h2>
      <div className="form-container">
        <UserInfoForm label="Name" type="text" handleChange={handleNameChange} />
        <UserInfoForm label="Email" type="email" handleChange={handleEmailChange} />
        <UserInfoForm label="Password" type="password" handleChange={handlePasswordChange} />
        <button type="submit">Đăng nhập</button>
      </div>
    </>
  )
}

export default App;
