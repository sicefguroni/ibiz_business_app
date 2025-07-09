import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import GuidesPage from './pages/GuidesPage';
import TrainingsPage from './pages/TrainingsPage';
import LoansPage from './pages/LoansPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/trainings" element={<TrainingsPage />} />
        <Route path="/loans" element={<LoansPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </Router>
  );
}

export default App
