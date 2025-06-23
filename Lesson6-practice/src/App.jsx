import axios from "axios"
import { useEffect } from "react"
export default function App() {
  const dataKey = [
    {
      title: "User",
      key: "users",
    },
    {
      title: "Task Status",
      key: "taskStatus",
    },
    {
      title: "Flags",
      key: "flags",
    },
    {
      title: "Tasks",
      key: "tasks",
    },
  ]

//get data
  const getData = async (param) => {
    const api = `https://mindx-mockup-server.vercel.app/api/resources/${param}?apiKey=67fe6ce4c590d6933cc126d9`
    try {
      const res = await axios.get(api)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.error("Error fetching user list:", error)
      return []
    }
  }


  //todo 
  getData("users")
  getData("taskStatus")
  getData("flags")
  getData("tasks")


// add data to user
  const addData = async (param, data) => {
    const api = `https://mindx-mockup-server.vercel.app/api/resources/${param}?apiKey=67fe6ce4c590d6933cc126d9`
    try {
      const res = await axios.post(api, data)
      console.log(res.data)
      return res.data
    }
    catch (error) {
      console.error("Error adding data:", error)
      return []
    }
  }
  getData("users")
 

//

  return (
    <button
      className="px-4 py-2 rounded bg-blue-500 text-white"
      onClick={() => {
        addData("users", {
          name: "New User",
          email: "khanhvuu@gmail.com",
          phone: "1234567890",
          address: "123 Main St",
        })
      }}
    >
      Update Data
    </button >
  )
}
