import { useState } from 'react'
import UserInfoForm from './components/UserInfoForm/UserInfoForm'



const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log(name, email, password)

  const handleSubmit = (e) => {
    e.preventDefault()
    //validate form with regex
    const nameRegex = /^[a-zA-Z]+$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (!nameRegex.test(name)) {
      alert('Name must contain only letters')
    }
    if (!emailRegex.test(email)) {
      alert('Email must be a valid email address')
    }
    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character')
    }
    //submit form
    console.log(name, email, password)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  } //handle email change là hàm để lấy giá trị từ input email và gán vào state email

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }





  return (
    <>
      <div className='app-container'>
        <h1>Form Demo</h1>
      </div>
      <form className='form-container'>
        <UserInfoForm  name="name" label="Name" type="text" onChange={handleNameChange} />
        <UserInfoForm  name="email" label="Email" type="email" onChange={handleEmailChange} />
        <UserInfoForm  name="password" label="Password" type="password" onChange={handlePasswordChange} />
        <button type='submit'>Submit</button>
      </form>



    </>
  )
}

export default App  