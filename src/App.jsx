import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopInfoBar from './components/TopInfoBar'
import MiddleBar from './components/MiddleBar'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ForPatientsPage from './pages/ForPatientsPage'
import ForPhysiciansPage from './pages/ForPhysiciansPage'
import ResourcesPage from './pages/ResourcesPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <TopInfoBar />
        <MiddleBar />
        <Navbar />
        <div className="app__content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/for-patients" element={<ForPatientsPage />} />
            <Route path="/for-physicians" element={<ForPhysiciansPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
