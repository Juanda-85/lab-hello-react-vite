import "./App.css"
import Header from "./components/Header.jsx"
import SayHello from "./components/SayHello"
import BottomBlock from "./components/BottomBlock"
function App() {

  return (
      <div className="App">
        <Header />
        <SayHello />
        <BottomBlock/>
      </div>
  )
}

export default App