
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Pokemones from './assets/pages/Pokemones'
import Detalle from './assets/pages/Detalle'
import Home from './assets/pages/Home1'

function App() {
 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pokemones' element={<Pokemones />} />
        <Route path='/pokemones/:name' element={<Detalle />}/>


      </Routes>
    </>
  )
}

export default App
