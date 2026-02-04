import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//importo provider contesto
import { BudgetProvider } from './assets/contexts/BudgetContext '

// Importo i componenti e le pagine
import Home from './pages/Home'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import DefaultLayout from './components/DefaultLayout'
import DetailProducts from './pages/DetailProducts'
function App() {
  return (
    <BudgetProvider>

      <BrowserRouter>
        <Routes>
          {/* Il DefaultLayout avvolge tutto ciò che deve avere la NavBar */}
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/Products'>
              <Route index element={<Products />} />
              <Route path=':id' element={<DetailProducts />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
  )
}

export default App