import { Routes, Route } from 'react-router-dom';
import About from "./pages/About"
import Contacts from './pages/Contacts'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='page-container'>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
