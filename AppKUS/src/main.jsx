import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { Route, Routes } from 'react-router-dom';
import EtalaseLKP from './pages/EtalaseLKP.jsx';
// import Semen from './pages/hal-produk/Semen.jsx';
// import Cat from './pages/hal-produk/Cat.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/Beranda" element={<App />} />
      <Route path="/Etalase" element={<EtalaseLKP />} />
      {/* <Route path="/Etalase/Semen" element={<Semen />} />
      <Route path="/Etalase/Cat" element={<Cat />} /> */}
    </Routes>
  </BrowserRouter>,
)
