import NavBar from './components/NavBar'
import MainSection from './components/MainSection'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className='h-screen no-scrollbar overflow-y-scroll'>
      <Router>
        <NavBar />
        <MainSection />
      </Router>
    </div>
  );
}

export default App
