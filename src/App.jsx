import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Importo i componenti e le pagine
import Home from './pages/Home'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import DefaultLayout from './components/DefaultLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Il DefaultLayout avvolge tutto ciò che deve avere la NavBar */}
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Products' element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App