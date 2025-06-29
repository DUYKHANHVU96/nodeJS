
import './App.css'
import Hello from './component/Hello/Hello'

function App() {

  return (
    <>
      <h1>Hello baby</h1>
      <p>hôm nay tôi học react</p>
      <Hello name="Alice" age={20} alo="123"/>
      <Hello name="John Wick" age={30} />
      <Hello name="Bob" age={10} />
    </>
  )
}

export default App  
