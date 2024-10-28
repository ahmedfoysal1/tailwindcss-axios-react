import './App.css'
import LineChart from './components/LineChart/LineChart'
import Navbar from './components/Navbar/Navbar'
import Priceoptions from './components/Priceoptions/Priceoptions'
// import Daisynav from './components/DaisyNav/Daisynav'

function App() {
  return (
    <>
    {/* <Daisynav></Daisynav> */}
    <Navbar></Navbar>
      <Priceoptions></Priceoptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
