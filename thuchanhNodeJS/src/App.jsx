import './App.css'
import Card from './assets/components/card/card'

function App() {






  return (

    <div>
      <h1>Thực hành NodeJS</h1>
      <Card name="Vũ Duy Khánh" age={29} address="Hà Nội"/>
      <Card name="Nguyễn Văn A" age={25} address="Hải Phòng"/>
      <Card name="Trần Thị B" age={30} address="Đà Nẵng"/>
      <Card name="Lê Văn C" age={22} address="Hồ Chí Minh"/>
      <Card name="Phạm Thị D" age={28} address="Cần Thơ"/>
    </div>
    
  )
}

export default App
