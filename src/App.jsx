import './index.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import ProductPage from './components/ProductPage'
import ShippingPage from './components/ShippingPage'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
