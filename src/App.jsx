import './App.css'
import TopInfoBar from './components/TopInfoBar'
import MiddleBar from './components/MiddleBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="app">
      <TopInfoBar />
      <MiddleBar />
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
