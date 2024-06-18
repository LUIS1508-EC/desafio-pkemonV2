
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Pokemones from './assets/pages/Pokemones'
import Detalle from './assets/pages/Detalle'
<<<<<<< HEADimport Home from './assets/pages/Home1'
=======
import Home from './Home1'
>>>>>>> 0bf054e67603d233d3cb901dda6fbb29f157f342

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
