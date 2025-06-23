import './App.css'
import Baitap3 from './assets/components/Baitap/Baitap3.jsx';
function App() {
  const users = [
    { name: "Nguyễn Văn A", age: 20, address: "Hà Nội" },
    { name: "Nguyễn Văn B", age: 21, address: "Hồ Chí Minh" },
    { name: "Nguyễn Văn C", age: 19, address: "Đà Nẵng" },
    { name: "Nguyễn Văn D", age: 22, address: "Cần Thơ" },
    { name: "Nguyễn Văn E", age: 23, address: "Nam Định" },

  ]


  return (
    <div>
      <h2>Thực hành 3</h2>
      {
        users.map((user, index) => {
          return <Baitap3 key={helo + index} name={user.name} age={user.age} address={
            user.address} />
        })
      }
    </div>
  )
}

export default App
