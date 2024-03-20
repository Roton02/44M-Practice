import './App.css'
import Header from './component/Header'
import Nav from './component/Nav'
import Phones from './component/Phones'
import PieChearts from './component/PieChearts'
import PriceOption from './component/PriceOption'
import Reachearts from './component/Reachearts'

function App() {

  return (
    <div>
      <Nav></Nav>
      <Header></Header>
      <Reachearts></Reachearts>
      <PieChearts></PieChearts>
      <Phones></Phones>
      <PriceOption></PriceOption>
    </div>
  )
}

export default App
