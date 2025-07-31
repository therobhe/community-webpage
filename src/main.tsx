import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Layout from './components/Layout'
import HomePage from './pages/Home/HomePage'
import NewsPage from './pages/News/NewsPage'
import VerwaltungPage from './pages/Verwaltung/VerwaltungPage'
import BuergerservicePage from './pages/Buergerservice/BuergerservicePage'
import ContactPage from './pages/Contact/ContactPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="verwaltung" element={<VerwaltungPage />} />
          <Route path="buergerservice" element={<BuergerservicePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
