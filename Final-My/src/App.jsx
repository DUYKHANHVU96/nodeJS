import React from 'react' // Import React library
import ShowWhey from './components/dataShow/showWhey' // Import component chính chứa toàn bộ ứng dụng

function App() {
  // Component App chính - đây là entry point của ứng dụng
  return (
    <div>
      <ShowWhey /> {/* Render component ShowWhey chứa toàn bộ logic và UI */}
    </div>
  )
}

export default App // Export component App để sử dụng ở file khác
