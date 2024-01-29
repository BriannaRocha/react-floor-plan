import "./App.css"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"

function App() {
  return (
    <>
      <Bedroom bedNum={1} />
      <Kitchen />
      <Bedroom bedNum={2} />
      <Bedroom bedNum={3} />
      
    </>
  )
}

export default App

