import React from 'react'
import Card from './components/Card/Card'

const App = () => {
  const user = [
    {
      name: "Johnwick",
      class: "12A1",
      slogan: "I'm a assassin"
    },
    {
      name: "Jane",
      class: "12A2",
      slogan: "I'm a student"
    },
    {
      name: "Jimmy",
      class: "12A3",
      slogan: "I'm a student"
    }
  ]

  return (
    <>
      <div className="card-container">
        <h1>Thực hành 3</h1>
        {
        user.map((user, index) => (
          <Card key={"hello" + index} name={user.name} class={user.class} slogan={user.slogan} />
        ))}
      </div>
    </>
  )
}

export default App